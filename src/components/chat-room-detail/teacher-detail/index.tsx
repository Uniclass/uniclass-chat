import React, { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { Card, CardContent } from '../../ui/card'
import { IconPhoneCall } from '@tabler/icons-react'

type TeacherDetailProps = {
	teacher: ChatRoomDetail['teacher']
}

export const TeacherDetail: FC<TeacherDetailProps> = ({ teacher }) => {
	return (
		<Card className="rounded-none min-w-[400px]">
			<CardContent className="p-3">
				{/* TEACHER PHOTO URL */}
				<div className="relative">
					<div className="flex flex-row gap-3">
						<Avatar className="border-orange-400 border-2">
							<AvatarImage src={teacher.photo_url} alt={teacher.firstname} />
							<AvatarFallback>
								{teacher.firstname[0]}
								{teacher.lastname[0]}
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<p>
								{teacher.firstname} {teacher.lastname}
							</p>
							<p>rating</p>
						</div>
					</div>
					<div className="absolute top-3 right-3 flex flex-row">
						<IconPhoneCall /> <div>{teacher.phone}</div>
					</div>
				</div>
				{/* NAME */}
				{/* PHONE NUMBER */}
				<div></div>
			</CardContent>
		</Card>
	)
}
