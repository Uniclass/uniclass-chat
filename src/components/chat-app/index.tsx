import { fetchUserProfileList } from '@/common/api/chat'
import useBrowserRestriction from '@/hooks/use-browser-restriction '
import { useChatRoomStore } from '@/store/use-chat-room-store'
import { useChatStore } from '@/store/use-chat-store'
import { FC, useEffect, useState } from 'react'
import { ChatRoom } from '../chat-room'
import { ChatRoomMenu } from '../chat-room-menu'
import { ChatRoomDetail } from '../chat-room-detail'

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
	const [roomMenuOpen, setRoomMenuOpen] = useState(false)
	const [sideMenuOpen, setSideMenuOpen] = useState(false)

	const isAllowed = useBrowserRestriction()

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

	return isAllowed ? (
		<div className="w-full mx-auto m-10">
			<div className="flex flex-row">
				<ChatRoomMenu
					roomMenuOpen={roomMenuOpen}
					setRoomMenuOpen={setRoomMenuOpen}
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
					userProfiles={userProfiles}
					chatRoom={chatRoom}
				/>

				{chatRoom &&
					chatRoom.map((room: ChatRoom, index: number) => (
						<div key={room.id} className={`w-full ${selectedTab === index ? 'block' : 'hidden'}`}>
							<div className="flex flex-row">
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
		</div>
	) : (
		<h1>Unsupported browser. Please use Chrome, Firefox, Safari, or Edge.</h1>
	)
}
