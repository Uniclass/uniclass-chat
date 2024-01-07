import { cn } from '@/lib/utils'
import { useChatStore } from '@/store/use-chat-store'
import { Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type ChatRoomMenuProps = {
	roomMenuOpen: boolean
	setRoomMenuOpen: (bool: boolean) => void
	chatRoom: ChatRoom[]
	selectedTab: number
	setSelectedTab: (index: number) => void
	userProfiles: any[]
	dataBaseApiUrl: string
	authToken: string
	userId: string
}

export const ChatRoomMenu: FC<ChatRoomMenuProps> = ({ roomMenuOpen, chatRoom, selectedTab, setSelectedTab, userProfiles, userId }) => {
	const { rooms, notiLatestMessages, updateLatestMessage } = useChatStore()

	const getNotiLatestMessage = (currentRoomId: string) => {
		const latestMessage = notiLatestMessages.find((item) => item.room_id === currentRoomId)
		if (latestMessage && latestMessage.sender_id !== userId) return true
		else return false
	}

	const removeLatestMessage = (currentRoomId: string) => {
		updateLatestMessage(currentRoomId)
	}

	return (
		<Transition
			show={roomMenuOpen}
			as={Fragment}
			enter="transition ease-out duration-200"
			enterFrom="opacity-0 translate-x-10"
			enterTo="opacity-100 translate-x-0"
			leave="transition ease-in duration-150"
			leaveFrom="opacity-100 translate-x-0"
			leaveTo="opacity-0 translate-x-10"
		>
			<div className="flex flex-col bg-white border-y border-l h-[90vh]">
				{chatRoom &&
					chatRoom.map((room: ChatRoom, index: number) => {
						if (!rooms[room.room_id]) return null
						const latestMessage = rooms[room.room_id][rooms[room.room_id].length - 1]

						return (
							<ChatRoomItem
								room={room}
								selectedTab={selectedTab}
								index={index}
								setSelectedTab={setSelectedTab}
								removeLatestMessage={removeLatestMessage}
								userProfiles={userProfiles}
								latestMessage={latestMessage}
								getNotiLatestMessage={getNotiLatestMessage}
							/>
						)
					})}
			</div>
		</Transition>
	)
}

type ChatRoomItemProps = {
	room: ChatRoom
	selectedTab: number
	index: number
	setSelectedTab: (index: number) => void
	removeLatestMessage: (currentRoomId: string) => void
	userProfiles: any[]
	latestMessage: ChatMessage
	getNotiLatestMessage: (currentRoomId: string) => boolean
}

export const ChatRoomItem: FC<ChatRoomItemProps> = ({ room, selectedTab, index, setSelectedTab, removeLatestMessage, userProfiles, latestMessage, getNotiLatestMessage }) => {
	return (
		<button
			key={room.id}
			className={cn('min-w-[300px] px-4 py-2  flex flex-row gap-4 border-l-4 ', selectedTab === index ? 'border-l-4 border-orange-400 bg-gray-100/50' : 'border-white')}
			onClick={() => {
				setSelectedTab(index)
				removeLatestMessage(room.room_id)
			}}
		>
			<Avatar>
				<AvatarImage src={userProfiles[index]?.photo_url} />
				<AvatarFallback>{userProfiles[index]?.firstname}</AvatarFallback>
			</Avatar>
			<div className="flex flex-row items-center">
				<div className="flex flex-col items-start">
					<p className="truncate max-w-[200px]">
						{room.room_name} ({room.room_id})
					</p>
					<p className="text-sm">
						{userProfiles[index]?.firstname} {userProfiles[index]?.lastname}
					</p>
					<p data-testid="latest-message" className="text-xs">
						{latestMessage?.content}
					</p>
				</div>
				{getNotiLatestMessage(room.room_id) && selectedTab !== index && <div data-testid="notification-div" className="p-1 bg-red-500 rounded-full"></div>}
			</div>
		</button>
	)
}
