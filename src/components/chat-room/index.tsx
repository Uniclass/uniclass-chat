import { fetchChatMessage, fetchUserProfileList, sendChatMessage } from '@/common/api/chat.api'
import { cn } from '@/lib/utils'
import { useChatStore } from '@/store/use-chat-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconAlertCircle, IconChalkboard, IconMenuDeep } from '@tabler/icons-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FC, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useAppContext } from '../app-provider'
import { ComponentMessage } from '../component-message'
import { NotificationMessage } from '../server-noti-message'
import { SocketBadgeStatus } from '../socket-badge-status'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'

const formSchema = z.object({
	message: z.string().min(1).max(50)
})

type ChatRoomProps = {
	roomId: string
	currentRoom: ChatRoom
	socketStatus?: boolean
	roomMenuOpen: boolean
	setRoomMenuOpen: (bool: boolean) => void
	sideMenuOpen: boolean
	setSideMenuOpen: (bool: boolean) => void
}

export const ChatRoom: FC<ChatRoomProps> = ({ roomId, currentRoom, roomMenuOpen, setRoomMenuOpen, sideMenuOpen, setSideMenuOpen }) => {
	const { dataBaseApiUrl, authToken, userId } = useAppContext()

	const queryClient = useQueryClient()
	const { socketStatus, sendSocketMessage } = useChatStore()
	const messagesEndRef = useRef(null)

	const messageQuery = useQuery({
		queryKey: ['chat-message', roomId],
		queryFn: () => fetchChatMessage(dataBaseApiUrl, authToken, roomId, new Date().toISOString(), '2023-12-20T09:32:13.000Z')
	})

	const profileQuery = useQuery({ queryKey: ['user-profile'], queryFn: () => fetchUserProfileList(dataBaseApiUrl, authToken, roomId) })

	const messageMutation = useMutation({
		mutationKey: ['send-message'],
		mutationFn: async (variables: { msgData: ChatMessage; roomId: string }) => {
			sendChatMessage(dataBaseApiUrl, authToken, variables.msgData, variables.roomId)
			sendSocketMessage(variables.msgData)
		},
		onSettled: () => {
			setTimeout(() => {
				queryClient.invalidateQueries({ queryKey: ['chat-message', roomId] })
				queryClient.invalidateQueries({ queryKey: ['latest-message', roomId] })
			}, 3000)
		}
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: ''
		}
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		if (!profileQuery.data) return

		const teacher_id = profileQuery.data[0].teacher_id
		const isTeacher = userId === teacher_id

		const msgData: ChatMessage = {
			room_id: roomId,
			content: values.message,
			sender_id: isTeacher ? teacher_id : userId,
			sender_type: isTeacher ? 'TCA' : 'STA',
			type: 'MSG'
		}

		messageMutation.mutate({
			msgData,
			roomId
		})

		form.reset()
	}

	const getProfile = (userId: string) => {
		if (!profileQuery.isSuccess) return

		const teacher_id = profileQuery.data[0].teacher_id
		const isTeacher = userId === teacher_id

		const profile = isTeacher ? profileQuery.data[1] : profileQuery.data[0]

		return profile
	}

	useEffect(() => {
		// prettier-ignore
		(messagesEndRef.current as HTMLElement | null)?.scrollIntoView({ behavior: 'smooth' })
	}, [messageQuery.data])

	return (
		<Card className="flex flex-col  relative rounded-none h-[90vh] w-full z-10 bg-white" key={roomId}>
			<CardHeader className="flex items-center border-b-[1px]">
				<CardTitle className="max-w-[70%] text-center">
					{currentRoom.room_name} ({currentRoom.room_id})
				</CardTitle>
				<CardDescription>
					{profileQuery.isSuccess && profileQuery.data[0]?.firstname} {profileQuery.isSuccess && profileQuery.data[0]?.lastname}
				</CardDescription>
				<SocketBadgeStatus socketStatus={!!socketStatus} />
			</CardHeader>
			<IconChalkboard className="absolute cursor-pointer top-[20px] left-[20px]" onClick={() => setRoomMenuOpen(!roomMenuOpen)} />
			<IconMenuDeep className="absolute cursor-pointer top-[20px] right-[20px]" onClick={() => setSideMenuOpen(!sideMenuOpen)} />
			<ScrollArea className="px-3 h-full">
				{messageQuery.isLoading && <div className="text-center mt-3">Loading...</div>}
				{messageQuery.isError && (
					<Card className="flex flex-row items-center justify-center gap-3 p-3 rounded-none bg-red-100 border-red-500 mt-3">
						<IconAlertCircle /> {messageQuery.error.message}
					</Card>
				)}
				{messageQuery.isSuccess &&
					messageQuery.data.map((message: ChatMessage) => (
						<div key={message.id} className={cn('flex gap-2 my-2', message.sender_id === userId ? 'flex-row justify-end' : 'flex-row-reverse justify-end')}>
							{message.type === 'COMP' && message.skip_audience_type !== userId.substring(0, 3) && (
								<ComponentMessage authToken={authToken} dataBaseApiUrl={dataBaseApiUrl} {...message} />
							)}
							{message.type === 'MSG' && message.skip_audience_type !== userId.substring(0, 3) && (
								<div className={cn('flex items-end gap-2', message.sender_id === userId ? 'flex-row-reverse' : 'flex-row')}>
									{profileQuery.isSuccess && (
										<Avatar>
											<AvatarImage src={getProfile(message.sender_id)?.photo_url} />
											<AvatarFallback>{getProfile(message.sender_id)?.firstname}</AvatarFallback>
										</Avatar>
									)}
									<div
										className={cn('flex flex-col  text-black p-2 px-4 rounded-t-full', message.sender_id === userId ? 'rounded-l-full bg-blue-100' : 'rounded-r-full bg-gray-100')}
									>
										<p>{message.content}</p>
									</div>
								</div>
							)}
							{message.type === 'NOTI' && message.skip_audience_type !== userId.substring(0, 3) && <NotificationMessage {...message} />}
						</div>
					))}
				<div ref={messagesEndRef} />
			</ScrollArea>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full p-3">
					<FormField
						control={form.control}
						disabled={!socketStatus || !currentRoom.room_status || messageQuery.isLoading || messageQuery.isError}
						name="message"
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel>Username</FormLabel> */}
								<FormControl>
									<div className="flex flex-row gap-1">
										<Input data-testid="message-input" placeholder="Aa" {...field} />
										<Button
											data-testid="message-submit"
											disabled={!socketStatus || !currentRoom.room_status || messageQuery.isLoading || messageQuery.isError || messageMutation.isPending}
											type="submit"
											variant="outline"
										>
											Send
										</Button>
									</div>
								</FormControl>
								{messageMutation.isError && <FormMessage className="text-red-400">Error: {messageMutation.error.message}</FormMessage>}
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</Card>
	)
}
