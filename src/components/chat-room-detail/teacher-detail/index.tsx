import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Dialog from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IconPhoneCall } from '@tabler/icons-react'
import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import Card from '../../ui/card'

type TeacherDetailProps = {
	teacher: ChatRoomDetail['teacher']
	hasButton?: boolean
}

export const TeacherDetail: FC<TeacherDetailProps> = ({ teacher, hasButton = true }) => {
	return (
		<Card className="rounded-none bg-white w-full">
			<Card.Content className="p-3">
				{/* TEACHER PHOTO URL */}
				<div className="flex flex-row justify-between w-full">
					<div className="flex flex-row items-center gap-3">
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
						<div className="flex flex-col items-end gap-2">
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
				<Dialog>
					{hasButton && (
						<Dialog.Trigger className="w-full mt-3">
							<Button className="w-full text-white bg-orange-500 hover:bg-orange-400">เปลี่ยนครู</Button>
						</Dialog.Trigger>
					)}
					<Dialog.Content className="bg-white">
						<Dialog.Header>
							<Dialog.Title>
								<p className="text-xl">
									เปลี่ยนครู {teacher.firstname} {teacher.lastname} ({teacher.title})
								</p>
							</Dialog.Title>
							<Dialog.Description className="flex flex-col gap-3">
								<p>
									ท่านต้องการเปลี่ยนครู {teacher.firstname} {teacher.lastname} หรือไม่?
								</p>
								<div>
									<Label>หมายเหตุ</Label>
									<Input placeholder="กรอกเหตุผลที่ต้องการเปลี่ยนครู" />
								</div>
							</Dialog.Description>
						</Dialog.Header>
						<Dialog.Footer className="mt-3">
							<Dialog.Close asChild>
								<Button className="bg-gray-500 hover:bg-gray-400 w-[50%] text-white" type="button">
									ยกเลิก
								</Button>
							</Dialog.Close>
							<Dialog.Close asChild>
								<Button className="bg-red-500 hover:bg-red-400 w-[50%] text-white" type="submit">
									ยืนยัน
								</Button>
							</Dialog.Close>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog>
			</Card.Content>
		</Card>
	)
}
