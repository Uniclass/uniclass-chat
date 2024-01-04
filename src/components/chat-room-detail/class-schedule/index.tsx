import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { IconBook } from '@tabler/icons-react'
import { FC } from 'react'

type ClassScheduleProps = {
	order: ChatRoomDetail['order']
}

export const ClassSchedule: FC<ClassScheduleProps> = ({ order: { course_name } }) => {
	return (
		<Card className="relative bg-white rounded-none w-full p-0">
			<CardHeader className="p-3">
				<h2 className="text-lg font-bold">การเรียน</h2>
				<h3 className="text-lg font-normal">
					Class Schedule:
					<span className="text-orange-400 ml-1">กำลังเรียน</span>
				</h3>
			</CardHeader>
			<CardContent className="p-3">
				<ScheduleInfo course_name={course_name} />
			</CardContent>
		</Card>
	)
}

type ScheduleInfoProps = {
	course_name: string
}

const ScheduleInfo: FC<ScheduleInfoProps> = ({ course_name }) => {
	return (
		<Card className="border-orange-200 bg-orange-100/50 p-3 flex flex-col gap-3">
			{/* UNICLASS LOGO */}
			<div>LOGO</div>
			{/* SVG IMAGE */}
			<div className="text-center">SVG IMAGE</div>
			{/* DESCRIPTION */}
			<div className="flex flex-row gap-1">
				<p className="text-lg font-bold">คลาส</p>
				<p className="text-lg font-normal">{course_name.split(' ')[1]}</p>
				<p className="text-lg font-normal">กำลังจะเริ่มใน</p>
			</div>
			{/* COUNTDOWN TIME */}
			<div className="text-indigo-500 text-2xl text-center font-bold">00:25:15</div>
			{/* ENTER CLASS BUTTON */}
			<Button className="w-full rounded-xl bg-orange-500 hover:bg-orange-400">
				<IconBook size={20} className="mr-3" />
				เข้าห้องเรียน
			</Button>
		</Card>
	)
}
