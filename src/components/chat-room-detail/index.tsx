import { fetchChatRoomDetail } from '@/common/api/chat'
import { cn } from '@/lib/utils'
import { Transition } from '@headlessui/react'
import { IconX } from '@tabler/icons-react'
import { FC, Fragment, useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Error } from '../error'
import { Button } from '../ui/button'
import { ClassSchedule } from './class-schedule'
import { CourseDetail } from './course-detail'
import { CourseStatus } from './course-status'
import { TeacherDetail } from './teacher-detail'

type ChatRoomDetailProps = {
	dataBaseApiUrl: string
	authToken: string
	roomId: string
	sideMenuOpen: boolean
	setSideMenuOpen: (value: boolean) => void
}

export const ChatRoomDetail: FC<ChatRoomDetailProps> = ({ dataBaseApiUrl, authToken, roomId, sideMenuOpen, setSideMenuOpen }) => {
	const [chatRoomDetail, setChatRoomDetail] = useState<ChatRoomDetail | null>(null)

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 720)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 720)
			setSideMenuOpen(false)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

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
				enterFrom={cn('opacity-0', isMobile ? 'translate-x-10' : '-translate-x-10')}
				enterTo="opacity-100 translate-x-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-x-0"
				leaveTo={cn('opacity-0', isMobile ? 'translate-x-10' : '-translate-x-10')}
			>
				<div className={cn('bg-white', isMobile && 'absolute top-0 left-0 right-0 bottom-0 z-20')} onClick={() => setSideMenuOpen(false)}>
					<div className="min-w-[300px] h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
						{isMobile && (
							<Button className="p-2 my-2" variant="ghost">
								<IconX className="active:translate-y-[1px]" size={24} onClick={() => setSideMenuOpen(false)} />
							</Button>
						)}
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
