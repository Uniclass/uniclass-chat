import { cn } from '@/lib/utils'
import { useChatStore } from '@/store/use-chat-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
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
	userProfile: {
		course_name: string
		teacher_name: string
		student_id: string
	}
	dataBaseApiUrl: string
	authToken: string
}

export const ChatRoom: FC<ChatRoomProps> = ({ authToken, dataBaseApiUrl, roomId, userProfile }) => {
	const id = useId()
	const { rooms, sendMessage, fetchChatMessage } = useChatStore()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: ''
		}
	})

	const messages = rooms[roomId] || []

	useEffect(() => {
		if (roomId) {
			fetchChatMessage(dataBaseApiUrl, authToken, roomId)
		}
	}, [fetchChatMessage, roomId, dataBaseApiUrl, authToken])

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		const msgData: ChatMessage = {
			course_id: roomId,
			content: values.message,
			sender_id: userProfile.student_id,
			sender_type: 'STD',
			type: 'MSG'
		}
		sendMessage(dataBaseApiUrl, authToken, msgData)
		form.reset()
	}

	return (
		<Card className="rounded-none" key={roomId}>
			<CardHeader className="flex items-center border-b-[1px]">
				<CardTitle>{userProfile.course_name}</CardTitle>
				<CardDescription>{userProfile.teacher_name}</CardDescription>
			</CardHeader>
			<CardContent className="p-0">
				<ScrollArea className="h-[80svh] w-full rounded-md mt-4 p-4">
					{messages.map((message: ChatMessage) => (
						<div key={id + message.content} className={cn('flex justify-start gap-2 my-2', message.sender_id === userProfile.student_id ? 'flex-row-reverse' : 'flex-row')}>
							{message.type === 'COMP' && (
								<div className="flex flex-row items-end gap-2">
									<Avatar>
										<AvatarImage src={message.sender_id === userProfile.student_id ? 'https://avatars.githubusercontent.com/u/62476230?s=96&v=4' : undefined} />
										<AvatarFallback>ร</AvatarFallback>
									</Avatar>
									<ComponentMessage {...message} />
								</div>
							)}
							{message.type === 'MSG' && (
								<div className={cn('flex flex-row items-end gap-2', message.sender_id === userProfile.student_id ? 'flex-row-reverse' : 'flex-row')}>
									<Avatar>
										<AvatarImage src={message.sender_id === userProfile.student_id ? 'https://avatars.githubusercontent.com/u/62476230?s=96&v=4' : undefined} />
										<AvatarFallback>ร</AvatarFallback>
									</Avatar>
									<div
										className={cn(
											'flex flex-col  text-black p-2 px-4 rounded-t-full',
											message.sender_id === userProfile.student_id ? 'rounded-l-full bg-blue-100' : 'rounded-r-full bg-gray-100'
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
											<Input placeholder="Aa" {...field} />
											<Button type="submit" variant="outline">
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
	)
}
