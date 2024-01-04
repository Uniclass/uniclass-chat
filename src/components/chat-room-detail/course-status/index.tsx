import { FC } from 'react'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { IconCircleCheckFilled, IconWashDryclean } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'

type CourseStatusProps = {
	orderStatus: ChatRoomDetail['order']['order_status']
}

type StatusGroup = {
	hasTeacher: boolean
	isLearned: boolean
	isCompleted: boolean
}

export const CourseStatus: FC<CourseStatusProps> = ({ orderStatus }) => {
	let statusGroup: StatusGroup

	switch (orderStatus) {
		case 'F':
			statusGroup = {
				hasTeacher: false,
				isLearned: false,
				isCompleted: false
			}
			break
		case 'A':
			statusGroup = {
				hasTeacher: true,
				isLearned: false,
				isCompleted: false
			}
			break
		case 'B':
			statusGroup = {
				hasTeacher: true,
				isLearned: true,
				isCompleted: false
			}
			break
		case 'C':
			statusGroup = {
				hasTeacher: true,
				isLearned: true,
				isCompleted: true
			}
			break
		default:
			statusGroup = {
				hasTeacher: false,
				isLearned: false,
				isCompleted: false
			}
			break
	}

	return (
		<Card className="rounded-none bg-white w-full">
			<CardHeader className=" px-3 pt-3 pb-0">
				<p className="text-lg font-bold">สถานะ</p>
			</CardHeader>
			<CardContent className="p-3 flex flex-row justify-between">
				<div>
					<div className="flex flex-row gap-3 items-center">
						{statusGroup.hasTeacher ? <IconCircleCheckFilled size={30} className="text-orange-500" /> : <IconWashDryclean size={30} className="text-orange-500" />}
						ได้คุณครูแล้ว
					</div>
					<div className="p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]"></div>
					<div className="flex flex-row gap-3 items-center">
						{statusGroup.isLearned ? <IconCircleCheckFilled size={30} className="text-orange-500" /> : <IconWashDryclean size={30} className="text-orange-500" />}
						เรียนแล้ว
					</div>
					<div className="p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]"></div>
					<div className="flex flex-row gap-3 items-center">
						{statusGroup.isCompleted ? <IconCircleCheckFilled size={30} className="text-orange-500" /> : <IconWashDryclean size={30} className="text-orange-500" />}
						เสร็จแล้ว
					</div>
				</div>
				<div className="flex flex-col justify-end">
					<Badge className="p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]" variant="secondary">
						ดูรายละเอียด
					</Badge>
				</div>
			</CardContent>
		</Card>
	)
}
