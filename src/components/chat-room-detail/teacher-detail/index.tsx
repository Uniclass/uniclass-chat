import { IconPhoneCall } from '@tabler/icons-react'
import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { Card, CardContent } from '../../ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type TeacherDetailProps = {
	teacher: ChatRoomDetail['teacher']
}

export const TeacherDetail: FC<TeacherDetailProps> = ({ teacher }) => {
	return (
		<Card className="rounded-none bg-white w-full">
			<CardContent className="p-3">
				{/* TEACHER PHOTO URL */}
				<div className="flex flex-row justify-between w-full">
					<div className="flex flex-row gap-3">
						<Avatar className="border-orange-400 border-2">
							<AvatarImage src={teacher.photo_url} alt={teacher.firstname} />
							<AvatarFallback>
								{teacher.firstname[0]}
								{teacher.lastname[0]}
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col mr-2">
							<div className="flex flex-col">
								{teacher?.title ? (
									<p className="text-nowrap">{teacher.title}</p>
								) : (
									<>
										<p>{teacher.firstname}</p>
										<p>{teacher.lastname}</p>
									</>
								)}
							</div>
							<p>⭐ 4.5</p>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="flex flex-col items-end gap-3">
							<div className="flex flex-row gap-2">
								<IconPhoneCall /> <div>{teacher.phone}</div>
							</div>
							<Badge
								className="w-fit hover:bg-blue-100 bg-blue-100 text-blue-400 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]"
								variant="secondary"
							>
								ดูรายละเอียด
							</Badge>
						</div>
					</div>
				</div>
				<div className="w-full mt-3">
					<Button className="w-full text-white bg-orange-500 hover:bg-orange-400">เปลี่ยนครู</Button>
				</div>
			</CardContent>
		</Card>
	)
}
