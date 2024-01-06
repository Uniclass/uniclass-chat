import { fetchChatRoomDetail } from '@/common/api/chat'
import { Transition } from '@headlessui/react'
import { FC, Fragment, useEffect, useState } from 'react'
import { ClassSchedule } from './class-schedule'
import { CourseDetail } from './course-detail'
import { CourseStatus } from './course-status'
import { TeacherDetail } from './teacher-detail'
import { ErrorBoundary } from 'react-error-boundary'
import { Error } from '../error'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

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
						<ErrorBoundary fallback={<Error>มีข้อผิดพลาดเกิดขึ้น</Error>}>
							<CourseDetail order={chatRoomDetail.order} teacher={chatRoomDetail.teacher} />
						</ErrorBoundary>
						{/* COURSE STATUS */}
						<ErrorBoundary fallback={<Error>มีข้อผิดพลาดเกิดขึ้น</Error>}>
							<CourseStatus orderStatus={chatRoomDetail.order.order_status} />
						</ErrorBoundary>
						{/* CLASS SCHEDULE */}
						<ErrorBoundary fallback={<Error>มีข้อผิดพลาดเกิดขึ้น</Error>}>
							<ClassSchedule order={chatRoomDetail.order} />
						</ErrorBoundary>
						{/* CLASS DETAIL */}
						{/* TEACHER / STUDENT DETAIL */}
						<ErrorBoundary fallback={<Error>มีข้อผิดพลาดเกิดขึ้น</Error>}>
							<TeacherDetail teacher={chatRoomDetail.teacher} />
						</ErrorBoundary>
						{/* <StudentDetail /> */}
						{/* <StudentDetail student={chatRoomDetail.student} /> */}
					</div>
				</div>
			</Transition>
		)
	)
}
