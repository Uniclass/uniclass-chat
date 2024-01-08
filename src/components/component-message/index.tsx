import { getCandidateTeacherList } from '@/common/api/chat'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { IconSquareCheck } from '@tabler/icons-react'
import { FC, useEffect, useState } from 'react'
import { ClassSchedule } from '../chat-room-detail/class-schedule'
import { TeacherDetail } from '../chat-room-detail/teacher-detail'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

type ComponentMessageProps = {
	authToken: string
	dataBaseApiUrl: string
}

export const ComponentMessage: FC<ChatMessage & ComponentMessageProps> = (message) => {
	switch (message.comp_type) {
		case 'order:teacher:select':
			return <TeacherSelectMessage {...message} />
		case 'order:class:start':
			return <ClassStartMessage {...message} />
		case 'order:teacher:evaluate':
			return <TeacherEvaluateMessage />
		default:
			return <></>
	}
}

const TeacherSelectMessage: FC<ChatMessage & ComponentMessageProps> = ({ comp_data, authToken, dataBaseApiUrl }) => {
	const [cadidateTeacherList, setCandidateTeacherList] = useState<Teacher[]>([])
	const comp_data_obj = JSON.parse(comp_data || '{}')

	useEffect(() => {
		getCandidateTeacherList(dataBaseApiUrl, authToken, comp_data_obj?.order_id).then((res) => setCandidateTeacherList(res))
	}, [authToken, comp_data_obj?.order_id, dataBaseApiUrl])

	return (
		<div className="flex flex-row justify-center w-full">
			<Card className="bg-[#ffebd9] border-none w-[400px]">
				<CardHeader className="p-4">
					<CardTitle className="text-xl">
						<p className="text-lg">เลือกคุณครูผู้สอนแล้วเริ่มเรียนกันเลย</p>
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4 p-4">
					<div className="bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center">
						<div className="flex flex-col">
							<p className="font-bold text-xl">{comp_data_obj?.order_id} คณิตศาสตร์ ป.1</p>
							<p className="text-gray-400">กรุณาเลือกคุณครู</p>
						</div>
					</div>

					<Dialog>
						<DialogTrigger className="w-full mt-3">
							<Button className="w-full text-white bg-orange-500 hover:bg-orange-400">ค้นหาคุณครู</Button>
						</DialogTrigger>
						<DialogContent className="bg-white">
							<DialogHeader>
								<DialogTitle>
									<p className="text-lg">งานสอน {comp_data_obj?.order_id}</p>
								</DialogTitle>
								<DialogDescription className="flex flex-col text-center gap-3">
									{cadidateTeacherList?.length > 0 ? (
										<div>
											{cadidateTeacherList?.map((teacher) => (
												<TeacherProfile key={teacher.tid} {...teacher} />
											))}
										</div>
									) : (
										<p>--- ไม่พบคุณครู ---</p>
									)}
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</CardContent>
			</Card>
		</div>
	)
}

const TeacherProfile: FC<Teacher> = ({ profile, background }) => {
	return (
		<Card className="p-3">
			<div className="flex flex-row items-center justify-between gap-3">
				<div className="flex flex-row gap-3">
					<Avatar>
						<AvatarImage className="w-[60px]" src={profile.photo_url} alt={profile.title} />
					</Avatar>
					<div className="flex flex-col items-start">
						<p>({profile.title})</p>
						<p>
							{profile.firstname} {profile.lastname}
						</p>

						<Dialog>
							<DialogTrigger className="w-full ">
								<Button variant="link" className="w-fit h-fit p-0 text-gray-400">
									ดูข้อมูลเพิ่มเตืม
								</Button>
							</DialogTrigger>
							<DialogContent className="bg-white">
								<DialogHeader>
									<DialogTitle>
										<p className="text-lg">ข้อมูลเพิ่มเติม</p>
									</DialogTitle>
								</DialogHeader>
								<div>{background.self_desc}</div>
							</DialogContent>
						</Dialog>
					</div>
				</div>
				<DialogClose>
					<Button variant="outline" className="border-indigo-500 text-indigo-500 hover:bg-indigo-100">
						เลือก
					</Button>
				</DialogClose>
			</div>
		</Card>
	)
}

const ClassStartMessage: FC<ChatMessage> = ({ comp_data }) => {
	const comp_data_obj = JSON.parse(comp_data || '{}')

	const date = new Date(comp_data_obj?.st_time)
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	const time = `${hours}:${minutes}`

	const countdown_time = new Date(new Date().getTime() + 60 * 60 * 1000).toISOString()

	return (
		<div className="flex flex-row justify-center w-full">
			<Card className="bg-[#ffebd9] border-none w-[400px]">
				<CardHeader className="p-4">
					<CardTitle className="text-xl">
						<p className="text-lg">พร้อมเข้าห้องเรียนกันรึยัง?</p>
					</CardTitle>
					<CardDescription>
						<p>
							เช้านี้เรามีนัดกัน {time} นะ ในรายวิชา {comp_data_obj?.order_id} {comp_data_obj?.order_name}
						</p>
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4 p-4">
					<div className="flex flex-col gap-3">
						<p className="font-bold text-xl">กับคุณครู</p>
						<TeacherDetail
							hasButton={false}
							teacher={{
								tid: 'TCA0002',
								title: 'ครูริกโรล',
								firstname: 'ริก',
								lastname: 'โรลลิง',
								phone: '+66859009804',
								photo_url: 'https://s3.ap-southeast-1.amazonaws.com/uniclass.pub---dev/teacher/TCA0002/profile.pic'
							}}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-bold text-xl">พร้อมแล้วกดเข้าห้องได้เลย</p>
						<ClassSchedule
							time={countdown_time}
							order={{ order_id: 'A012', order_id_mask: 'PpOcpS', order_status: 'A', course_id: 'MATTH06-04', course_name: 'วิชา คณิตศาสตร์ ป.3 หลักสูตร ไทย คอร์ส 6 ครั้ง' }}
						/>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

// const ContinueCourseMessage = () => {
// 	return (
// 		<div className="flex flex-row justify-center w-full">
// 			<Card className="bg-[#ffebd9] border-none w-[400px]">
// 				<CardHeader className="p-4">
// 					<CardTitle className="text-xl">
// 						<p className="text-lg">พร้อมเข้าห้องเรียนกันรึยัง?</p>
// 					</CardTitle>
// 					<CardDescription>
// 						<p>{/* เช้านี้เรามีนัดกัน {time} นะ ในรายวิชา {comp_data_obj?.order_id} {comp_data_obj?.order_name} */}</p>
// 					</CardDescription>
// 				</CardHeader>
// 				<CardContent className="flex flex-col gap-4 p-4">
// 					<div className="flex flex-col gap-3">
// 						<p className="font-bold text-xl">กับคุณครู</p>
// 						{/* <TeacherDetail
// 							hasButton={false}
// 							teacher={{
// 								tid: 'TCA0002',
// 								title: 'ครูริกโรล',
// 								firstname: 'ริก',
// 								lastname: 'โรลลิง',
// 								phone: '+66859009804',
// 								photo_url: 'https://s3.ap-southeast-1.amazonaws.com/uniclass.pub---dev/teacher/TCA0002/profile.pic'
// 							}}
// 						/> */}
// 					</div>
// 					<div className="flex flex-col gap-3">
// 						<p className="font-bold text-xl">พร้อมแล้วกดเข้าห้องได้เลย</p>
// 						{/* <ClassSchedule
// 							time={countdown_time}
// 							order={{ order_id: 'A012', order_id_mask: 'PpOcpS', order_status: 'A', course_id: 'MATTH06-04', course_name: 'วิชา คณิตศาสตร์ ป.3 หลักสูตร ไทย คอร์ส 6 ครั้ง' }}
// 						/> */}
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</div>
// 	)
// }

const TeacherEvaluateMessage = () => {
	return (
		<div className="flex flex-row justify-center w-full">
			<Card className="bg-[#ffebd9] border-none w-[400px] ">
				<CardHeader className="p-4">
					<CardTitle className="text-xl">
						<p className="text-lg">เรียนเสร็จแล้ว</p>
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4 p-4">
					<div className="bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center">
						<Avatar>
							<AvatarImage
								className="w-[40px] h-[40px] rounded-md"
								src="https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024"
							/>
						</Avatar>
						<div className="flex flex-col">
							<p>คณิตศาสตร์ ป.1</p>
							<div>
								<span className="text-orange-500">1</span>/6 คลาส
							</div>
						</div>
					</div>

					<Dialog>
						<DialogTrigger className="w-full mt-3">
							<Button className="w-full text-white bg-orange-500 hover:bg-orange-400">ทำแบบประเมิน</Button>
						</DialogTrigger>
						<DialogContent className="bg-white">
							<DialogHeader>
								<DialogTitle>
									<p className="text-lg">A056 (วิชา คณิตศาสตร์ ป.1 หลักสูตร ไทย คอร์ส 6 ครั้ง)</p>
								</DialogTitle>
								<DialogDescription className="flex flex-col gap-3">
									<div className="flex flex-row gap-3">
										<Badge className="bg-gray-400 text-white">คณิตศาสตร์</Badge>
										<Badge className="bg-gray-400 text-white">ป.1</Badge>
									</div>
								</DialogDescription>
								<div>
									<div className="flex flex-row justify-between">
										<div>จำนวนครั้งที่สอน 6 ครั้ง</div>
										<div>(1/6)</div>
									</div>
									<div className="flex flex-row gap-2">
										<IconSquareCheck className="text-orange-500" />
										<div>ครั้งที่ 1 2024-01-03</div>
									</div>
								</div>
							</DialogHeader>
							<DialogFooter className="mt-3">
								<DialogClose asChild>
									<Button className="bg-gray-500 hover:bg-gray-400 w-[50%] text-white" type="button">
										ยกเลิก
									</Button>
								</DialogClose>
								<DialogClose asChild>
									<Button className="bg-indigo-500 hover:bg-indigo-400 w-[50%] text-white" type="submit">
										ส่งประเมิน
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</CardContent>
			</Card>
		</div>
	)
}
