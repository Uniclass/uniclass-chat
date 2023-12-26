import { fetchChatRoomDetail } from '@/common/api/chat'
import { FC, useEffect, useState } from 'react'
import { CourseDetail } from './course-detail'
import { CourseStatus } from './course-status'
import { TeacherDetail } from './teacher-detail'

type ChatRoomDetailProps = {
	dataBaseApiUrl: string
	authToken: string
	roomId: string
}

export const ChatRoomDetail: FC<ChatRoomDetailProps> = ({ dataBaseApiUrl, authToken, roomId }) => {
	const [chatRoomDetail, setChatRoomDetail] = useState<ChatRoomDetail | null>(null)

	useEffect(() => {
		if (roomId) {
			fetchChatRoomDetail(dataBaseApiUrl, authToken, roomId).then((res) => {
				setChatRoomDetail(res)
			})
		}
	}, [roomId, dataBaseApiUrl, authToken])

	console.log(chatRoomDetail)

	return (
		chatRoomDetail && (
			<div>
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
		)
	)
}
