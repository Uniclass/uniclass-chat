import { FC } from 'react'
import { Card, CardContent } from '../../ui/card'
import { Badge } from '../../ui/badge'

type CourseDetailProps = {
	// get type order from ChatRo
	order: ChatRoomDetail['order']
}

export const CourseDetail: FC<CourseDetailProps> = ({ order: { course_id, course_name } }) => {
	return (
		<Card className="relative rounded-none">
			<CardContent className="p-3">
				{/* COURSE ID */}
				<h2 className="font-bold">{course_id}</h2>
				{/* COURSE NAME */}
				<div>{course_name}</div>
			</CardContent>
			<Badge variant="secondary" className="absolute top-3 right-3 ">
				ดูรายละเอียด
			</Badge>
		</Card>
	)
}
