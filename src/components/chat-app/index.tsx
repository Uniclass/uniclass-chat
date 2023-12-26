import { fetchUserProfileList } from '@/common/api/chat'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import useBrowserRestriction from '@/hooks/use-browser-restriction '
import { cn } from '@/lib/utils'
import { useChatRoomStore } from '@/store/use-chat-room-store'
import { useChatStore } from '@/store/use-chat-store'
import { FC, useEffect, useState } from 'react'
import { ChatRoom } from '../chat-room'
import { Badge } from '../ui/badge'
import { ChatRoomDetail } from '../chat-room-detail'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerFooter } from '@/components/ui/drawer'
import { Button } from '../ui/button'

type ChatAppProps = {
	socketApiUrl: string
	dataBaseApiUrl: string
	authToken: string
	userId: string
}

export const ChatApp: FC<ChatAppProps> = ({ socketApiUrl, dataBaseApiUrl, authToken, userId }) => {
	const [selectedTab, setSelectedTab] = useState(0)
	const [userProfiles, setUserProfiles] = useState<any[]>([])
	const { connectWebSocket, socketStatus, disconnectWebSocket } = useChatStore()
	const { fetchChatRoom, chatRoom } = useChatRoomStore()

	const isAllowed = useBrowserRestriction()

	useEffect(() => {
		const fetchProfiles = async () => {
			const profiles = await Promise.all(chatRoom.map((room) => fetchUserProfileList(dataBaseApiUrl, authToken, room.room_id)))
			const filteredTeacher = profiles.flat().filter((item) => item.teacher_id)
			setUserProfiles(filteredTeacher)
		}

		if (chatRoom && chatRoom.length > 0) {
			fetchProfiles()
		}
	}, [chatRoom, dataBaseApiUrl, authToken])

	useEffect(() => {
		connectWebSocket(dataBaseApiUrl, socketApiUrl, authToken)
		fetchChatRoom(dataBaseApiUrl, authToken)

		function handleVisibilityChange() {
			if (document.visibilityState === 'hidden') {
				disconnectWebSocket()
			} else {
				connectWebSocket(dataBaseApiUrl, socketApiUrl, authToken)
				fetchChatRoom(dataBaseApiUrl, authToken)
			}
		}

		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [connectWebSocket, fetchChatRoom, socketApiUrl, dataBaseApiUrl, authToken, disconnectWebSocket])

	return isAllowed ? (
		<div className="w-full mx-auto m-10">
			<div className="flex flex-row relative">
				<Badge className="absolute top-4 right-4" variant="outline">
					Socket {socketStatus ? <span className="w-[5px] h-[5px] bg-green-400 ml-2"></span> : <span className="w-[5px] h-[5px] bg-red-400 ml-2"></span>}
				</Badge>
				<div className="flex flex-col border-y border-l ">
					{chatRoom &&
						chatRoom.map((room: ChatRoom, index: number) => {
							return (
								<button
									key={room.id}
									className={cn('min-w-[300px] px-4 py-2  flex flex-row gap-4 border-l-4 ', selectedTab === index ? 'border-l-4 border-orange-400 bg-gray-100/50' : 'border-white')}
									onClick={() => setSelectedTab(index)}
								>
									<Avatar>
										<AvatarImage src={userProfiles[index]?.photo_url} />
										<AvatarFallback>{userProfiles[index]?.firstname}</AvatarFallback>
									</Avatar>
									<div className="flex flex-col items-start">
										<p className="truncate max-w-[200px]">
											{room.room_name} ({room.room_id})
										</p>
										<p className="text-sm">
											{userProfiles[index]?.firstname} {userProfiles[index]?.lastname}
										</p>
									</div>
								</button>
							)
						})}
				</div>
				{chatRoom &&
					chatRoom.map((room: ChatRoom, index: number) => (
						<div key={room.id} className={`w-full ${selectedTab === index ? 'block' : 'hidden'}`}>
							<ChatRoom dataBaseApiUrl={dataBaseApiUrl} authToken={authToken} currentRoom={room} roomId={room.room_id} userId={userId} socketStatus={socketStatus} />
							<ChatRoomDetail dataBaseApiUrl={dataBaseApiUrl} authToken={authToken} roomId={room.room_id} />
						</div>
					))}
			</div>
		</div>
	) : (
		<h1>Unsupported browser. Please use Chrome, Firefox, Safari, or Edge.</h1>
	)
}
