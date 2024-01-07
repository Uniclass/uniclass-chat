import { cn } from '@/lib/utils'
import { FC, Fragment } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Transition } from '@headlessui/react'

type ChatRoomMenuProps = {
	roomMenuOpen: boolean
	setRoomMenuOpen: (bool: boolean) => void
	chatRoom: ChatRoom[]
	selectedTab: number
	setSelectedTab: (index: number) => void
	userProfiles: any[]
}

export const ChatRoomMenu: FC<ChatRoomMenuProps> = ({ roomMenuOpen, chatRoom, selectedTab, setSelectedTab, userProfiles }) => {
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
		</Transition>
	)
}
