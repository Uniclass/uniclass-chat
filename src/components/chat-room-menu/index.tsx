import { fetchChatMessage, fetchChatRoomDetail } from '@/common/api/chat.api'
import { cn } from '@/lib/utils'
import { Transition } from '@headlessui/react'
import { IconX } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { FC, Fragment, useEffect, useState } from 'react'
import { useAppContext } from '../app-provider'
import Avatar from '../ui/avatar'
import { Button } from '../ui/button'

type ChatRoomMenuProps = {
	roomMenuOpen: boolean
	setRoomMenuOpen: (bool: boolean) => void
	chatRoom: ChatRoom[]
	selectedTab: number
	setSelectedTab: (index: number) => void
}

export const ChatRoomMenu: FC<ChatRoomMenuProps> = ({ roomMenuOpen, setRoomMenuOpen, chatRoom, selectedTab, setSelectedTab }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1200) {
				setIsMobile(true)
				setRoomMenuOpen(false)
			} else {
				setRoomMenuOpen(true)
				setIsMobile(false)
			}
		}

		window.addEventListener('resize', handleResize)

		// Call handleResize once to handle the initial window size
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	// const getNotiLatestMessage = (currentRoomId: string) => {
	// 	const latestMessage = notiLatestMessages.find((item) => item.room_id === currentRoomId)
	// 	if (latestMessage && latestMessage.sender_id !== userId) return true
	// 	else return false
	// }

	return (
		<Transition
			show={roomMenuOpen}
			as={Fragment}
			enter="transition ease-out duration-200"
			enterFrom={cn('opacity-0', isMobile ? '-translate-x-10' : 'translate-x-10')}
			enterTo="opacity-100 translate-x-0"
			leave="transition ease-in duration-150"
			leaveFrom="opacity-100 translate-x-0"
			leaveTo={cn('opacity-0', isMobile ? '-translate-x-10' : 'translate-x-10')}
		>
			<div className={cn('flex flex-col bg-white border-y border-l h-[90vh]', isMobile && 'absolute top-0 left-0 right-0 bottom-0 z-20')}>
				{isMobile && (
					<Button className="p-2 my-2 w-fit ml-auto" variant="ghost">
						<IconX className="active:translate-y-[1px]" size={24} onClick={() => setRoomMenuOpen(false)} />
					</Button>
				)}
				{chatRoom.map((room: ChatRoom, index: number) => {
					return (
						<div key={room.room_id}>
							<ChatRoomItem room={room} selectedTab={selectedTab} index={index} setSelectedTab={setSelectedTab} />
						</div>
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
}

export const ChatRoomItem: FC<ChatRoomItemProps> = ({ room, selectedTab, index, setSelectedTab }) => {
	const { dataBaseApiUrl, authToken } = useAppContext()

	const userProfiles = useQuery({
		queryKey: ['user-profile', room.room_id],
		queryFn: () => fetchChatRoomDetail(dataBaseApiUrl, authToken, room.room_id)
	})

	const latestMessageQuery = useQuery({
		queryKey: ['latest-message', room.room_id],
		queryFn: () => fetchChatMessage(dataBaseApiUrl, authToken, room.room_id, new Date().toISOString(), '2023-12-20T09:32:13.000Z')
	})

	const latestMessage = latestMessageQuery.data?.[latestMessageQuery.data.length - 1]

	console.log(userProfiles.data)

	return (
		<button
			className={cn('min-w-[300px] w-full px-4 py-2  flex flex-row gap-4 border-l-4 ', selectedTab === index ? 'border-l-4 border-orange-400 bg-gray-100/50' : 'border-white')}
			onClick={() => {
				setSelectedTab(index)
				// removeLatestMessage(room.room_id)
			}}
		>
			<Avatar>
				<Avatar.Image src={userProfiles.data?.teacher?.photo_url} />
				<Avatar.Fallback>{userProfiles.data?.teacher?.firstname}</Avatar.Fallback>
			</Avatar>
			<div className="flex flex-row items-center">
				<div className="flex flex-col items-start">
					<p className="truncate max-w-[200px]">
						{room.room_name} ({room.room_id})
					</p>
					<p className="text-sm">
						{userProfiles.data?.teacher?.firstname} {userProfiles.data?.teacher?.lastname}
					</p>
					<p data-testid="latest-message" className="text-xs">
						{latestMessage?.content}
					</p>
				</div>
				{/* {getNotiLatestMessage(room.room_id) && selectedTab !== index && <div data-testid="notification-div" className="p-1 bg-red-500 rounded-full"></div>} */}
			</div>
		</button>
	)
}
