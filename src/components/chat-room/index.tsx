import { fetchChatMessage, fetchUserProfileList, getAuthToken, sendChatMessage } from '@/common/api/chat.api'
import { cn } from '@/lib/utils'
import { useChatStore } from '@/store/use-chat-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconAlertCircle, IconChalkboard, IconMenuDeep } from '@tabler/icons-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FC, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { ComponentMessage } from '../component-message'
import { NotificationMessage } from '../server-noti-message'
import { SocketBadgeStatus } from '../socket-badge-status'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'

const formSchema = z.object({
	message: z.string().min(2).max(50)
})

type ChatRoomProps = {
	roomId: string
	userId: string
	dataBaseApiUrl: string
	authToken: string
	socketApiUrl: string
	currentRoom: ChatRoom
	socketStatus?: boolean
	roomMenuOpen: boolean
	setRoomMenuOpen: (bool: boolean) => void
	sideMenuOpen: boolean
	setSideMenuOpen: (bool: boolean) => void
}

export const ChatRoom: FC<ChatRoomProps> = ({
	authToken,
	dataBaseApiUrl,
	socketApiUrl,
	roomId,
	userId,
	currentRoom,
	roomMenuOpen,
	setRoomMenuOpen,
	sideMenuOpen,
	setSideMenuOpen
}) => {
	const queryClient = useQueryClient()
	const { sending } = useChatStore()
	const messagesEndRef = useRef(null)
	const socketRef = useRef<WebSocket | null>(null)
	const [socketStatus, setSocketStatus] = useState<WebSocket['readyState']>()

	const authTokenQuery = useQuery({
		queryKey: ['auth-token', roomId],
		queryFn: () => getAuthToken(dataBaseApiUrl, authToken)
	})

	const messageQuery = useQuery({
		queryKey: ['chat-message'],
		queryFn: () => fetchChatMessage(dataBaseApiUrl, authToken, roomId, new Date().toISOString(), '2023-12-20T09:32:13.000Z')
	})

	const profileQuery = useQuery({ queryKey: ['user-profile'], queryFn: () => fetchUserProfileList(dataBaseApiUrl, authToken, roomId) })

	const mutation = useMutation({
		mutationFn: (variables: { msgData: ChatMessage; roomId: string }) => sendChatMessage(dataBaseApiUrl, authToken, variables.msgData, variables.roomId),
		onSettled: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['chat-message'] })
		}
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: ''
		}
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// if userId === teacher_id then sender_id === teacher otherwise sender_id === student
		if (!profileQuery.data) return

		const teacher_id = profileQuery.data[0].teacher_id

		if (userId === teacher_id) {
			const msgData: ChatMessage = {
				room_id: roomId,
				content: values.message,
				sender_id: teacher_id,
				sender_type: 'TCA',
				type: 'MSG'
			}
			mutation.mutate({
				msgData,
				roomId
			})
			const data = { action: 'sendmessage', data: msgData }
			socketRef.current?.send(JSON.stringify(data))
		}

		if (userId !== teacher_id) {
			const msgData: ChatMessage = {
				room_id: roomId,
				content: values.message,
				sender_id: userId,
				sender_type: 'STA',
				type: 'MSG'
			}
			mutation.mutate({
				msgData,
				roomId
			})
			const data = { action: 'sendmessage', data: msgData }
			socketRef.current?.send(JSON.stringify(data))
		}

		form.reset()
	}

	const getProfile = (userId: string) => {
		if (!profileQuery.isSuccess) return

		let opponentProfile, myProfile: RoomAttendan

		const teacher_id = profileQuery.data[0].teacher_id
		if (userId === teacher_id) {
			myProfile = profileQuery.data[0]
			opponentProfile = profileQuery.data[1]
		} else {
			myProfile = profileQuery.data[1]
			opponentProfile = profileQuery.data[0]
		}

		const profile = opponentProfile?.teacher_id === userId || opponentProfile?.student_id === userId ? opponentProfile : myProfile
		return profile
	}

	useEffect(() => {
		if (!authTokenQuery.isSuccess) return
		// If the WebSocket is already connected, return without doing anything

		socketRef.current = new WebSocket(socketApiUrl + '?token=' + authTokenQuery.data)

		// Connection opened
		socketRef.current.addEventListener('open', (event) => {
			setSocketStatus(socketRef.current?.readyState)
		})

		// Listen for messages
		socketRef.current.addEventListener('message', (event) => {
			// run messageQuery invalidate
			setTimeout(() => {
				queryClient.invalidateQueries({ queryKey: ['chat-message'] })
			}, 1000) // adjust delay as needed
		})

		// Connection closed
		socketRef.current.addEventListener('close', (event) => {
			setSocketStatus(socketRef.current?.readyState)
		})

		// Clean up
		return () => {
			socketRef.current?.close()
		}
	}, [roomId, queryClient, authTokenQuery.isSuccess, authTokenQuery.data, socketApiUrl])

	useEffect(() => {
		// prettier-ignore
		(messagesEndRef.current as HTMLElement | null)?.scrollIntoView({ behavior: 'smooth' })
	}, [messageQuery.data])

	return (
		<Card className="flex flex-col relative rounded-none h-[90vh] w-full z-10 bg-white" key={roomId}>
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
				{sending && (
					<div className={cn('flex items-end gap-2 flex-row-reverse')}>
						<Avatar>
							<AvatarImage src={getProfile(userId)?.photo_url} />
							<AvatarFallback>{getProfile(userId)?.firstname}</AvatarFallback>
						</Avatar>
						<div className={cn('flex flex-col  text-black p-2 px-4 rounded-t-full rounded-l-full bg-blue-100')}>
							<p>กำลังส่ง...</p>
						</div>
					</div>
				)}
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
											disabled={!socketStatus || !currentRoom.room_status || messageQuery.isLoading || messageQuery.isError}
											type="submit"
											variant="outline"
										>
											Send
										</Button>
									</div>
								</FormControl>
								{/* <FormDescription>Test Websocket</FormDescription> */}
								{/* <FormMessage className="text-red-400" /> */}
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</Card>
	)
}
