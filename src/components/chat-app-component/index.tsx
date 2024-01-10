import { fetchChatRoom } from '@/common/api/chat.api'
import { useChatStore } from '@/store/use-chat-store'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { FC, useEffect, useState } from 'react'
import { ChatRoom } from '../chat-room'
import { ChatRoomDetail } from '../chat-room-detail'
import { ChatRoomMenu } from '../chat-room-menu'
import { Error } from '../error'

type ChatAppProps = {
	socketApiUrl: string
	dataBaseApiUrl: string
	authToken: string
	userId: string
}

export const ChatAppComponent: FC<ChatAppProps> = ({ socketApiUrl, dataBaseApiUrl, authToken }) => {
	const [selectedTab, setSelectedTab] = useState(0)
	const { connectWebSocket, socketStatus, disconnectWebSocket } = useChatStore()

	const queryClient = useQueryClient()

	const chatRoomQuery = useQuery({
		queryKey: ['chat-room'],
		queryFn: () => fetchChatRoom(dataBaseApiUrl, authToken)
	})

	// if mobile set default to false
	const isMobile = window.innerWidth <= 768 // Adjust the value as needed
	const [roomMenuOpen, setRoomMenuOpen] = useState(isMobile)
	const [sideMenuOpen, setSideMenuOpen] = useState(isMobile)

	useEffect(() => {
		connectWebSocket(dataBaseApiUrl, socketApiUrl, authToken, queryClient)

		function handleVisibilityChange() {
			if (document.visibilityState === 'hidden') {
				disconnectWebSocket()
			} else {
				connectWebSocket(dataBaseApiUrl, socketApiUrl, authToken, queryClient)
				fetchChatRoom(dataBaseApiUrl, authToken)
			}
		}

		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [connectWebSocket, socketApiUrl, dataBaseApiUrl, authToken, disconnectWebSocket, queryClient])

	if (chatRoomQuery.isLoading) return <div>Loading...</div>
	if (chatRoomQuery.isError) return <Error>{chatRoomQuery.error.message}</Error>

	return (
		chatRoomQuery.isSuccess && (
			<div data-testid="chat-app" className="flex flex-row relative">
				<ChatRoomMenu roomMenuOpen={roomMenuOpen} setRoomMenuOpen={setRoomMenuOpen} selectedTab={selectedTab} setSelectedTab={setSelectedTab} chatRoom={chatRoomQuery.data} />
				{chatRoomQuery.data.map((room: ChatRoom, index: number) => {
					return (
						selectedTab === index && (
							<div key={room.room_id} className="flex flex-row w-full">
								<ChatRoom
									currentRoom={room}
									roomId={room.room_id}
									socketStatus={socketStatus}
									setRoomMenuOpen={setRoomMenuOpen}
									roomMenuOpen={roomMenuOpen}
									sideMenuOpen={sideMenuOpen}
									setSideMenuOpen={setSideMenuOpen}
								/>
								<ChatRoomDetail roomId={room.room_id} sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
							</div>
						)
					)
				})}
			</div>
		)
	)
}
