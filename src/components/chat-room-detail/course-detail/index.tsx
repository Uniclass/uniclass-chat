import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { FC } from 'react'
import { Card, CardContent } from '../../ui/card'
import { Badge } from '@/components/ui/badge'

type CourseDetailProps = {
	// get type order from ChatRo
	order: ChatRoomDetail['order']
	teacher: ChatRoomDetail['teacher']
}

export const CourseDetail: FC<CourseDetailProps> = ({ order: { course_name }, teacher: { title, firstname } }) => {
	return (
		<Card className="relative bg-white rounded-none w-full">
			<div className="flex flex-row gap-3 p-3">
				<Avatar className="w-[70px] h-[70px] rounded-md">
					<AvatarImage
						className="w-[70px] h-[70px]"
						src={'https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024'}
					/>
					<AvatarFallback>{course_name}</AvatarFallback>
				</Avatar>
				<div>
					<div className="flex flex-row gap-1">
						<p className="font-bold">รายวิชา:</p>
						<span>
							{course_name.split(' ')[1]} {course_name.split(' ')[2]}
						</span>
					</div>
					<div className="flex flex-row gap-1">
						<p className="font-bold">คุณครู:</p>
						<span>{title || firstname}</span>
					</div>
				</div>
			</div>
			<CardContent className="p-3">
				<div>{course_name}</div>
			</CardContent>
			<div className="flex flex-row w-full justify-end p-3">
				<Badge className="p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]" variant="secondary">
					ดูรายละเอียด
				</Badge>
			</div>
		</Card>
	)
}
