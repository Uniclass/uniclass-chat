import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import useBrowserRestriction from '@/hooks/use-browser-restriction '
import { useChatRoomStore } from '@/store/use-chat-room-store'
import { useChatStore } from '@/store/use-chat-store'
import { FC, useEffect, useState } from 'react'
import { ChatRoom } from '../chat-room'
import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils'

type ChatAppProps = {
	socketApiUrl: string
	dataBaseApiUrl: string
	authToken: string
}

export const ChatApp: FC<ChatAppProps> = ({ socketApiUrl, dataBaseApiUrl, authToken }) => {
	const [selectedTab, setSelectedTab] = useState(0)
	const { connectWebSocket, socketStatus, disconnectWebSocket } = useChatStore()
	const { fetchChatRoom, chatRoom } = useChatRoomStore()

	const isAllowed = useBrowserRestriction()

	useEffect(() => {
		connectWebSocket(socketApiUrl)
		fetchChatRoom(dataBaseApiUrl, authToken)

		function handleVisibilityChange() {
			if (document.visibilityState === 'hidden') {
				disconnectWebSocket()
			} else {
				connectWebSocket(socketApiUrl)
				fetchChatRoom(dataBaseApiUrl, authToken)
			}
		}

		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [connectWebSocket, disconnectWebSocket, fetchChatRoom, socketApiUrl, dataBaseApiUrl, authToken])

	return isAllowed ? (
		<div className="max-w-[1440px] mx-auto m-10">
			<div className="flex flex-row relative">
				<Badge className="absolute top-4 right-4" variant="outline">
					Socket {socketStatus ? <span className="w-[5px] h-[5px] bg-green-400 ml-2"></span> : <span className="w-[5px] h-[5px] bg-red-400 ml-2"></span>}
				</Badge>
				<div className="flex flex-col border-y border-l ">
					{chatRoom &&
						chatRoom.map((room: ChatMessage, index: number) => (
							<button
								key={room.id}
								className={cn('px-4 py-2  flex flex-row gap-4 border-l-4 ', selectedTab === index ? 'border-l-4 border-orange-400 bg-gray-100/50' : 'border-white')}
								onClick={() => setSelectedTab(index)}
							>
								<Avatar>
									<AvatarImage src={''} />
									<AvatarFallback>{'TC'}</AvatarFallback>
								</Avatar>
								<div className="flex flex-col items-start">
									<p className="truncate max-w-[200px]">{room.course_id}</p>
									<p className="text-sm">{'TCA0002'}</p>
								</div>
							</button>
						))}
				</div>
				{chatRoom &&
					chatRoom.map((room: ChatMessage, index: number) => (
						<div key={room.id} className={`w-full ${selectedTab === index ? 'block' : 'hidden'}`}>
							{/* Your card content here */}
							<ChatRoom
								dataBaseApiUrl={dataBaseApiUrl}
								authToken={authToken}
								roomId={room.course_id}
								userProfile={{ course_name: room.course_id, teacher_name: 'TCA0002', student_id: 'STD0012' }}
							/>
						</div>
					))}
			</div>
		</div>
	) : (
		<h1>Unsupported browser. Please use Chrome, Firefox, Safari, or Edge.</h1>
	)
}
