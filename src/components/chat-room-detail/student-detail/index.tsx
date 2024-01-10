import { Badge } from '@/components/ui/badge'
import Card from '@/components/ui/card'
import Avatar from '@/components/ui/avatar'
import { IconPhoneCall } from '@tabler/icons-react'
import { FC } from 'react'

type StudentDetailProps = {
	student: ChatRoomDetail['student']
}

export const StudentDetail: FC<StudentDetailProps> = ({ student: { phone, photo_url, firstname, lastname, title } }) => {
	return (
		<Card className="rounded-none bg-white w-full">
			<Card.Content className="p-3">
				{/* TEACHER PHOTO URL */}
				<div className="flex flex-row justify-between w-full">
					<div className="flex flex-row gap-3">
						<Avatar className="border-orange-400 border-2">
							<Avatar.Image src={photo_url} alt={firstname} />
							<Avatar.Fallback>
								{firstname[0]}
								{lastname[0]}
							</Avatar.Fallback>
						</Avatar>
						<div className="flex flex-col mr-2">
							<div className="flex flex-col">
								{title ? (
									<p className="text-nowrap">{title}</p>
								) : (
									<>
										<p>{firstname}</p>
										<p>{lastname}</p>
									</>
								)}
							</div>
							<p>⭐ 4.5</p>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="flex flex-col items-end gap-3">
							<div className="flex flex-row gap-2">
								<IconPhoneCall /> <div>{phone}</div>
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
			</Card.Content>
		</Card>
	)
}
