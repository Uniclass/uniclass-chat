import { cn } from '@/lib/utils'
import { useChatStore } from '@/store/use-chat-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconChalkboard, IconMenuDeep } from '@tabler/icons-react'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { ChatRoomDetail } from '../chat-room-detail'
import { ComponentMessage } from '../component-message'
import { NotificationMessage } from '../server-noti-message'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
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
	currentRoom: ChatRoom
	socketStatus: boolean
	roomMenuOpen: boolean
	setRoomMenuOpen: (bool: boolean) => void
	sideMenuOpen: boolean
	setSideMenuOpen: (bool: boolean) => void
}

export const ChatRoom: FC<ChatRoomProps> = ({
	authToken,
	dataBaseApiUrl,
	roomId,
	userId,
	currentRoom,
	socketStatus,
	roomMenuOpen,
	setRoomMenuOpen,
	sideMenuOpen,
	setSideMenuOpen
}) => {
	const [myProfile, setMyProfile] = useState<RoomAttendan>()
	const [opponentProfile, setOpponentMyProfile] = useState<RoomAttendan>()
	const { rooms, profile, sendMessage, fetchChatMessage, fetchUserProfile } = useChatStore()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: ''
		}
	})

	const messages = rooms[roomId] || []

	useEffect(() => {
		if (roomId) {
			const ts_st = new Date().toISOString()
			const ts_en = '2023-12-20T09:32:13.000Z'
			fetchChatMessage(dataBaseApiUrl, authToken, roomId, ts_st, ts_en)
			fetchUserProfile(dataBaseApiUrl, authToken, roomId)
		}
	}, [fetchChatMessage, fetchUserProfile, roomId, dataBaseApiUrl, authToken])

	useEffect(() => {
		if (profile.length > 1) {
			const teacher_id = profile[0].teacher_id

			if (userId === teacher_id) {
				setMyProfile(profile[0])
				setOpponentMyProfile(profile[1])
			} else {
				setMyProfile(profile[1])
				setOpponentMyProfile(profile[0])
			}
		}
	}, [profile, userId])

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// if userId === teacher_id then sender_id === teacher otherwise sender_id === student
		const teacher_id = profile[0].teacher_id

		if (userId === teacher_id) {
			const msgData: ChatMessage = {
				room_id: roomId,
				content: values.message,
				sender_id: teacher_id,
				sender_type: 'TCA',
				type: 'MSG'
			}
			sendMessage(dataBaseApiUrl, authToken, msgData, roomId)
		}

		if (userId !== teacher_id) {
			const msgData: ChatMessage = {
				room_id: roomId,
				content: values.message,
				sender_id: userId,
				sender_type: 'STD',
				type: 'MSG'
			}
			sendMessage(dataBaseApiUrl, authToken, msgData, roomId)
		}

		form.reset()
	}

	const getProfile = (userId: string) => {
		const profile = opponentProfile?.teacher_id === userId || opponentProfile?.student_id === userId ? opponentProfile : myProfile
		return profile
	}

	return (
		<div className="flex flex-row relative z-10">
			<Card className="rounded-none" key={roomId}>
				<CardHeader className="flex items-center border-b-[1px]">
					<CardTitle className="max-w-[70%] text-center">
						{currentRoom.room_name} ({currentRoom.room_id})
					</CardTitle>
					<CardDescription>
						{profile[0]?.firstname} {profile[0]?.lastname}
					</CardDescription>
				</CardHeader>
				<IconChalkboard className="absolute cursor-pointer top-[20px] left-[20px]" onClick={() => setRoomMenuOpen(!roomMenuOpen)} />
				<IconMenuDeep className="absolute cursor-pointer top-[20px] right-[20px]" onClick={() => setSideMenuOpen(!sideMenuOpen)} />
				<CardContent className="p-0">
					<ScrollArea className="min-h-[400px] min-w-[700px] w-full rounded-md mt-4 p-4">
						{messages.map((message: ChatMessage) => (
							<div key={message.id} className={cn('flex gap-2 my-2', message.sender_id === userId ? 'flex-row justify-end' : 'flex-row-reverse justify-end')}>
								{message.type === 'COMP' && (
									<div className="flex flex-row items-end gap-2">
										<Avatar>
											<AvatarImage src={getProfile(message.sender_id)?.photo_url} />
											<AvatarFallback>{getProfile(message.sender_id)?.firstname}</AvatarFallback>
										</Avatar>
										<ComponentMessage {...message} />
									</div>
								)}
								{message.type === 'MSG' && (
									<div className={cn('flex items-end gap-2', message.sender_id === userId ? 'flex-row-reverse' : 'flex-row')}>
										<Avatar>
											<AvatarImage src={getProfile(message.sender_id)?.photo_url} />
											<AvatarFallback>{getProfile(message.sender_id)?.firstname}</AvatarFallback>
										</Avatar>
										<div
											className={cn(
												'flex flex-col  text-black p-2 px-4 rounded-t-full',
												message.sender_id === userId ? 'rounded-l-full bg-blue-100' : 'rounded-r-full bg-gray-100'
											)}
										>
											<p>{message.content}</p>
										</div>
									</div>
								)}
								{message.type === 'NOTI' && <NotificationMessage {...message} />}
							</div>
						))}
					</ScrollArea>
				</CardContent>
				<CardFooter className="p-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										{/* <FormLabel>Username</FormLabel> */}
										<FormControl>
											<div className="flex flex-row gap-1">
												<Input disabled={!socketStatus} placeholder="Aa" {...field} />
												<Button disabled={!socketStatus} type="submit" variant="outline">
													Send
												</Button>
											</div>
										</FormControl>
										{/* <FormDescription>Test Websocket</FormDescription> */}
										<FormMessage className="text-red-400" />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</CardFooter>
			</Card>
		</div>
	)
}
