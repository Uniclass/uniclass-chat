import { FC } from 'react'
import { Card, CardContent } from '../../ui/card'
import { IconCircleCheckFilled, IconWashDryclean } from '@tabler/icons-react'

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
		<Card className="rounded-none">
			{/* ORDER STATUS */}
			<CardContent className="p-3">
				<div className="flex flex-row gap-3 items-center">
					{statusGroup.hasTeacher ? <IconCircleCheckFilled size={30} className="text-orange-400" /> : <IconWashDryclean size={30} className="text-orange-400" />}
					ได้คุณครูแล้ว
				</div>
				<div className="p-[1px] bg-orange-400 w-[1px] h-[20px] ml-[14px]"></div>
				<div className="flex flex-row gap-3 items-center">
					{statusGroup.isLearned ? <IconCircleCheckFilled size={30} className="text-orange-400" /> : <IconWashDryclean size={30} className="text-orange-400" />}
					เรียนแล้ว
				</div>
				<div className="p-[1px] bg-orange-400 w-[1px] h-[20px] ml-[14px]"></div>
				<div className="flex flex-row gap-3 items-center">
					{statusGroup.isCompleted ? <IconCircleCheckFilled size={30} className="text-orange-400" /> : <IconWashDryclean size={30} className="text-orange-400" />}
					เสร็จแล้ว
				</div>
			</CardContent>
		</Card>
	)
}
