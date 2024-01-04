import { fetchChatRoomDetail } from '@/common/api/chat'
import { FC, useEffect, useState, Fragment } from 'react'
import { CourseDetail } from './course-detail'
import { CourseStatus } from './course-status'
import { TeacherDetail } from './teacher-detail'
import { Transition } from '@headlessui/react'
import { ClassSchedule } from './class-schedule'

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
			fetchChatRoomDetail(dataBaseApiUrl, authToken, roomId).then((res: ChatRoomDetail) => {
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
				enterFrom="opacity-0 -translate-x-10"
				enterTo="opacity-100 translate-x-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-x-0"
				leaveTo="opacity-0 -translate-x-10"
			>
				<div className="bg-gray-100" onClick={() => setSideMenuOpen(false)}>
					<div className="min-w-[300px] h-[90vh]" onClick={(e) => e.stopPropagation()}>
						{/* COURSE DETAIL */}
						<CourseDetail order={chatRoomDetail.order} teacher={chatRoomDetail.teacher} />
						{/* COURSE STATUS */}
						<CourseStatus orderStatus={chatRoomDetail.order.order_status} />
						{/* CLASS SCHEDULE */}
						<ClassSchedule order={chatRoomDetail.order} />
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
