import { fetchUserProfileList } from '@/common/api/chat'
import { useChatRoomStore } from '@/store/use-chat-room-store'
import { useChatStore } from '@/store/use-chat-store'
import { FC, useEffect, useState } from 'react'
import { ChatRoom } from '../chat-room'
import { ChatRoomDetail } from '../chat-room-detail'
import { ChatRoomMenu } from '../chat-room-menu'

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

	// if mobile set default to false
	const isMobile = window.innerWidth <= 768 // Adjust the value as needed
	const [roomMenuOpen, setRoomMenuOpen] = useState(!isMobile)
	const [sideMenuOpen, setSideMenuOpen] = useState(!isMobile)

	useEffect(() => {
		const fetchProfiles = async () => {
			const profiles = await Promise.all(chatRoom.map((room) => fetchUserProfileList(dataBaseApiUrl, authToken, room.room_id)))
			const filteredTeacher = profiles.flat().filter((item: any) => item.teacher_id)
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

	return (
		<div data-testid="chat-app" className="flex flex-row w-full">
			<ChatRoomMenu
				roomMenuOpen={roomMenuOpen}
				setRoomMenuOpen={setRoomMenuOpen}
				selectedTab={selectedTab}
				setSelectedTab={setSelectedTab}
				userProfiles={userProfiles}
				chatRoom={chatRoom}
				dataBaseApiUrl={dataBaseApiUrl}
				authToken={authToken}
				userId={userId}
			/>

			{chatRoom.map((room: ChatRoom, index: number) => (
				<div key={room.room_id} className={`w-full  ${selectedTab === index ? 'block' : 'hidden'}`}>
					<div className="flex flex-row ">
						<ChatRoom
							dataBaseApiUrl={dataBaseApiUrl}
							authToken={authToken}
							currentRoom={room}
							roomId={room.room_id}
							userId={userId}
							socketStatus={socketStatus}
							setRoomMenuOpen={setRoomMenuOpen}
							roomMenuOpen={roomMenuOpen}
							sideMenuOpen={sideMenuOpen}
							setSideMenuOpen={setSideMenuOpen}
						/>
						<ChatRoomDetail dataBaseApiUrl={dataBaseApiUrl} authToken={authToken} roomId={room.room_id} sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
					</div>
				</div>
			))}
		</div>
	)
}
