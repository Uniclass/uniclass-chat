import { fetchChatRoomDetail } from '@/common/api/chat'
import { FC, useEffect, useState, Fragment } from 'react'
import { CourseDetail } from './course-detail'
import { CourseStatus } from './course-status'
import { TeacherDetail } from './teacher-detail'
import { Transition } from '@headlessui/react'

type ChatRoomDetailProps = {
	dataBaseApiUrl: string
	authToken: string
	roomId: string
	sideMenuOpen: boolean
	setSideMenuOpen: (value: boolean) => void
}

export const ChatRoomDetail: FC<ChatRoomDetailProps> = ({ dataBaseApiUrl, authToken, roomId, sideMenuOpen, setSideMenuOpen }) => {
	const [chatRoomDetail, setChatRoomDetail] = useState<ChatRoomDetail | null>(null)

	useEffect(() => {
		if (roomId) {
			fetchChatRoomDetail(dataBaseApiUrl, authToken, roomId).then((res) => {
				setChatRoomDetail(res)
			})
		}
	}, [roomId, dataBaseApiUrl, authToken])

	return (
		chatRoomDetail && (
			<Transition
				show={sideMenuOpen}
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-x-10"
				enterTo="opacity-100 translate-x-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-x-0"
				leaveTo="opacity-0 translate-x-10"
			>
				<div className="absolute top-0 left-0 right-0 bottom-0" onClick={() => setSideMenuOpen(false)}>
					<div className="absolute top-0 right-0 bottom-0 max-w-[400px] bg-gray-200" onClick={(e) => e.stopPropagation()}>
						{/* COURSE DETAIL */}
						<CourseDetail order={chatRoomDetail.order} />
						{/* COURSE STATUS */}
						<CourseStatus orderStatus={chatRoomDetail.order.order_status} />
						{/* CLASS DETAIL */}
						{/* <ClassDetail /> */}
						{/* TEACHER / STUDENT DETAIL */}
						<TeacherDetail teacher={chatRoomDetail.teacher} />
						{/* <StudentDetail /> */}
					</div>
				</div>
			</Transition>
		)
	)
}
