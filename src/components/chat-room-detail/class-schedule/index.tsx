import { Button } from '@/components/ui/button'
import Card from '@/components/ui/card'
import { IconBook } from '@tabler/icons-react'
import { FC, useEffect, useState } from 'react'

type ClassScheduleProps = {
	order: ChatRoomDetail['order']
	time: string
	googleMeetLink: string
}

export const ClassSchedule: FC<ClassScheduleProps> = ({ order: { course_name, order_status }, time, googleMeetLink }) => {
	let classStatus

	switch (order_status) {
		case 'A':
			classStatus = 'กำลังจะถึงเวลาเรียน'
			break
		case 'B':
			classStatus = 'กำลังเรียน'
			break
		case 'C':
			classStatus = 'เรียนจบแล้ว'
			break
		default:
			classStatus = 'เริ่มเรียน'
			break
	}

	return (
		<Card className="relative bg-white rounded-none w-full p-0">
			<Card.Header className="p-3">
				<p className="text-lg font-bold">การเรียน</p>
				<p className="text-lg font-normal">
					Class Schedule:
					<span className="text-orange-400 ml-1">{classStatus}</span>
				</p>
			</Card.Header>
			<Card.Content className="p-3">
				<ScheduleInfo courseName={course_name} time={time || '00:00:00'} googleMeetLink={googleMeetLink} />
			</Card.Content>
		</Card>
	)
}

type ScheduleInfoProps = {
	courseName: string
	time: string
	googleMeetLink: string
}

const ScheduleInfo: FC<ScheduleInfoProps> = ({ courseName, time, googleMeetLink }) => {
	return (
		<Card className="border-orange-200 bg-orange-100/50 p-3 flex flex-col gap-3">
			{/* UNICLASS LOGO */}
			<div>LOGO</div>
			{/* SVG IMAGE */}
			<div className="text-center">SVG IMAGE</div>
			{/* DESCRIPTION */}
			<div className="flex flex-row gap-1">
				<p className="text-lg font-bold">คลาส</p>
				<p className="text-lg font-normal">{courseName.split(' ')[1]}</p>
				<p className="text-lg font-normal">กำลังจะเริ่มใน</p>
			</div>
			{/* COUNTDOWN TIME */}
			<div className="text-indigo-500 text-2xl text-center font-bold">{Countdown(time)}</div>
			{/* ENTER CLASS BUTTON */}
			<Button className="w-full text-white rounded-xl bg-orange-500 hover:bg-orange-400" onClick={() => window.open(googleMeetLink)}>
				<IconBook size={20} className="mr-3" />
				เข้าห้องเรียน
			</Button>
		</Card>
	)
}

const Countdown = (time_src: string) => {
	const calculateTimeLeft = () => {
		const targetDate = new Date(time_src)
		const now = new Date()
		const difference = targetDate.getTime() - now.getTime()

		return difference > 0 ? difference / 1000 : 0 // convert to seconds
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		const interval = setInterval(() => {
			const newTimeLeft = calculateTimeLeft()
			setTimeLeft(newTimeLeft)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	if (timeLeft === 0) {
		return <div className="text-red-400">00:00:00</div>
	}

	const hours = Math.floor(timeLeft / 3600)
		.toString()
		.padStart(2, '0')
	const minutes = Math.floor((timeLeft / 60) % 60)
		.toString()
		.padStart(2, '0')
	const seconds = Math.floor(timeLeft % 60)
		.toString()
		.padStart(2, '0')

	return <div>{`${hours}:${minutes}:${seconds}`}</div>
}
