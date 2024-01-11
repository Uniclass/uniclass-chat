import { getCandidateTeacherList, putCandidateTeacherToOrder } from '@/common/api/chat.api'
import { IconAlertCircle, IconSquareCheck } from '@tabler/icons-react'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { ClassSchedule } from '../chat-room-detail/class-schedule'
import { TeacherDetail } from '../chat-room-detail/teacher-detail'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Card from '../ui/card'
import Dialog from '../ui/dialog'
import Avatar from '../ui/avatar'
import { useAppContext } from '../app-provider'

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
		case 'order:evaluate:teacher':
			return <TeacherEvaluateMessage />
		case 'order:evaluate:result':
			return <EvaluateResultMessage {...message} />
		default:
			return <></>
	}
}

const TeacherSelectMessage: FC<ChatMessage & ComponentMessageProps> = ({ comp_data, authToken, dataBaseApiUrl }) => {
	// Queries
	const query = useQuery({ queryKey: ['candidate-teacher'], queryFn: () => getCandidateTeacherList(dataBaseApiUrl, authToken, comp_data_obj?.order_id) })

	const comp_data_obj = JSON.parse(comp_data || '{}')

	return (
		<div className="flex flex-row justify-center w-full">
			<Card className="bg-[#ffebd9] border-none w-[400px]">
				<Card.Header className="p-4">
					<Card.Title className="text-xl">
						<p className="text-lg">เลือกคุณครูผู้สอนแล้วเริ่มเรียนกันเลย</p>
					</Card.Title>
				</Card.Header>
				<Card.Content className="flex flex-col gap-4 p-4">
					<div className="bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center">
						<div className="flex flex-col">
							<p className="font-bold text-xl">{comp_data_obj?.order_id} คณิตศาสตร์ ป.1</p>
							<p className="text-gray-400">กรุณาเลือกคุณครู</p>
						</div>
					</div>

					<Dialog>
						<Dialog.Trigger className="w-full mt-3">
							<Button className="w-full text-white bg-orange-500 hover:bg-orange-400">ค้นหาคุณครู</Button>
						</Dialog.Trigger>
						<Dialog.Content className="bg-white p-3">
							<Dialog.Header>
								<Dialog.Title>
									<p className="text-lg">งานสอน {comp_data_obj?.order_id}</p>
								</Dialog.Title>
								<Dialog.Description className="flex flex-col text-center gap-3">
									{query.isSuccess && (
										<div className="flex flex-col gap-3">
											{query.data?.map((teacher: Teacher) => (
												<TeacherProfile key={teacher.tid} dataBaseApiUrl={dataBaseApiUrl} authToken={authToken} orderId={comp_data_obj?.order_id} {...teacher} />
											))}
										</div>
									)}
									{query.isLoading && <Card className="p-3">กำลังโหลดข้อมูล...</Card>}
									{query.isError && <Card className="border-red-500 bg-red-100 p-3">เกิดข้อผิดพลาดในการโหลดข้อมูลครู {query.error.message}</Card>}
								</Dialog.Description>
							</Dialog.Header>
						</Dialog.Content>
					</Dialog>
				</Card.Content>
			</Card>
		</div>
	)
}

const TeacherProfile: FC<Teacher & { orderId: string; dataBaseApiUrl: string; authToken: string }> = ({ dataBaseApiUrl, authToken, tid, orderId, profile, background }) => {
	// Access the client
	const queryClient = useQueryClient()

	// Mutations
	const mutation = useMutation({
		mutationFn: (variables: { teacher_id: string; order_id: string }) => putCandidateTeacherToOrder(dataBaseApiUrl, authToken, variables),
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['candidate-teacher-select'] })
		}
	})

	return (
		<Card className="p-3">
			<div className="flex flex-row items-center justify-between gap-3">
				<div className="flex flex-row gap-3">
					<Avatar>
						<Avatar.Image className="w-[60px]" src={profile.photo_url} alt={profile.title} />
						<Avatar.Fallback>{profile.firstname[0]}</Avatar.Fallback>
					</Avatar>
					<div className="flex flex-col items-start">
						<p>({profile.title})</p>
						<p>
							{profile.firstname} {profile.lastname}
						</p>

						<Dialog>
							<Dialog.Trigger className="w-full ">
								<Button variant="link" className="w-fit h-fit p-0 text-gray-400">
									ดูข้อมูลเพิ่มเตืม
								</Button>
							</Dialog.Trigger>
							<Dialog.Content className="bg-white">
								<Dialog.Header>
									<Dialog.Title>
										<p className="text-lg">ข้อมูลเพิ่มเติม</p>
									</Dialog.Title>
								</Dialog.Header>
								<div>{background.self_desc}</div>
							</Dialog.Content>
						</Dialog>
					</div>
				</div>
				<Button
					onClick={() => {
						mutation.mutate({
							teacher_id: tid,
							order_id: orderId
						})
					}}
					variant="outline"
					className="border-indigo-500 text-indigo-500 hover:bg-indigo-100"
				>
					{mutation.isPending ? 'กำลังเลือก...' : 'เลือกครู'}
				</Button>
			</div>
			{mutation.isError && (
				<Card className="p-3 my-3 rounded-none border-red-500 bg-red-100">
					<div className="text-red-500 flex flex-row items-center gap-3">
						<IconAlertCircle /> {mutation.error.message}
					</div>
				</Card>
			)}
		</Card>
	)
}

const ClassStartMessage: FC<ChatMessage> = ({ comp_data }) => {
	const { dataBaseApiUrl, authToken } = useAppContext()
	const teacherProfileQuery = useQuery({ queryKey: ['candidate-teacher-profile'], queryFn: () => getCandidateTeacherList(dataBaseApiUrl, authToken, comp_data_obj?.order_id) })

	const comp_data_obj = JSON.parse(JSON.parse(comp_data || '{}'))

	const { st_time, google_meet_link } = comp_data_obj

	const date = new Date(comp_data_obj?.st_time)
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	const time = `${hours}:${minutes}`

	const countdown_time = st_time

	return (
		<div className="flex flex-row justify-center w-full">
			<Card className="bg-[#ffebd9] border-none w-[400px]">
				<Card.Header className="p-4">
					<Card.Title className="text-xl">
						<p className="text-lg">พร้อมเข้าห้องเรียนกันรึยัง?</p>
					</Card.Title>
					<Card.Description>
						<p>
							เช้านี้เรามีนัดกัน {time} นะ ในรายวิชา {comp_data_obj?.order_id} {comp_data_obj?.order_name}
						</p>
					</Card.Description>
				</Card.Header>
				<Card.Content className="flex flex-col gap-4 p-4">
					{teacherProfileQuery.isLoading && <Card className="flex flex-row items-center justify-center gap-3 p-3 rounded-none bg-white">กำลังโหลดโปรไฟล์ครู...</Card>}
					{teacherProfileQuery.isError && (
						<Card className="flex flex-row items-center justify-center gap-3 p-3 rounded-none bg-red-100 border-red-500">
							<IconAlertCircle /> {teacherProfileQuery.error.message}
						</Card>
					)}
					{teacherProfileQuery.isSuccess && (
						<div className="flex flex-col gap-3">
							<p className="font-bold text-xl">กับคุณครู</p>
							<TeacherDetail
								hasButton={false}
								teacher={{
									tid: teacherProfileQuery.data[0].tid,
									title: teacherProfileQuery.data[0].profile.title,
									firstname: teacherProfileQuery.data[0].profile.firstname,
									lastname: teacherProfileQuery.data[0].profile.lastname,
									photo_url: teacherProfileQuery.data[0].profile.photo_url
								}}
								roomId={comp_data_obj?.order_id}
							/>
						</div>
					)}
					<div className="flex flex-col gap-3">
						<p className="font-bold text-xl">พร้อมแล้วกดเข้าห้องได้เลย</p>
						<ClassSchedule
							time={countdown_time}
							order={{ order_id: 'A012', order_id_mask: 'PpOcpS', order_status: 'A', course_id: 'MATTH06-04', course_name: 'วิชา คณิตศาสตร์ ป.3 หลักสูตร ไทย คอร์ส 6 ครั้ง' }}
							googleMeetLink={google_meet_link}
						/>
					</div>
				</Card.Content>
			</Card>
		</div>
	)
}

const TeacherEvaluateMessage = () => {
	return (
		<div className="flex flex-row justify-center w-full">
			<Card className="bg-[#ffebd9] border-none w-[400px] ">
				<Card.Header className="p-4">
					<Card.Title className="text-xl">
						<p className="text-lg">เรียนเสร็จแล้ว</p>
					</Card.Title>
				</Card.Header>
				<Card.Content className="flex flex-col gap-4 p-4">
					<div className="bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center">
						<Avatar>
							<Avatar.Image
								className="w-[40px] h-[40px] rounded-md"
								src="https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024"
							/>
							<Avatar.Fallback>Class Room Image</Avatar.Fallback>
						</Avatar>
						<div className="flex flex-col">
							<p>คณิตศาสตร์ ป.1</p>
							<div>
								<span className="text-orange-500">1</span>/6 คลาส
							</div>
						</div>
					</div>

					<Dialog>
						<Dialog.Trigger className="w-full mt-3">
							<Button className="w-full text-white bg-orange-500 hover:bg-orange-400">ทำแบบประเมิน</Button>
						</Dialog.Trigger>
						<Dialog.Content className="bg-white">
							<Dialog.Header>
								<Dialog.Title>
									<p className="text-lg">A056 (วิชา คณิตศาสตร์ ป.1 หลักสูตร ไทย คอร์ส 6 ครั้ง)</p>
								</Dialog.Title>
								<Dialog.Description className="flex flex-col gap-3">
									<div className="flex flex-row gap-3">
										<Badge className="bg-gray-400 text-white">คณิตศาสตร์</Badge>
										<Badge className="bg-gray-400 text-white">ป.1</Badge>
									</div>
								</Dialog.Description>
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
							</Dialog.Header>
							<Dialog.Footer className="mt-3 flex flex-row gap-3 ">
								<Dialog.Close asChild>
									<Button className="bg-gray-500 hover:bg-gray-400 w-[50%] text-white" type="button">
										ยกเลิก
									</Button>
								</Dialog.Close>
								<Dialog.Close asChild>
									<Button className="bg-indigo-500 hover:bg-indigo-400 w-[50%] text-white" type="submit">
										ส่งประเมิน
									</Button>
								</Dialog.Close>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog>
				</Card.Content>
			</Card>
		</div>
	)
}

const EvaluateResultMessage: FC<ChatMessage> = ({ comp_data }) => {
	const comp_data_obj = JSON.parse(JSON.parse(comp_data || '{}'))
	const { class_order, eval_behavior_note, eval_study_note } = comp_data_obj

	return (
		<div className="flex flex-row justify-center w-full">
			<Card className="bg-[#ffebd9] border-none w-[400px]">
				<Card.Header className="p-4 ">
					<Card.Title className="text-xl">
						<p className="text-lg">ผลการประเมิน ครั้งที่ {class_order}</p>
					</Card.Title>
				</Card.Header>
				<Card.Content className="flex flex-col gap-4 px-4 ">
					<div className="flex flex-col gap-3">
						<p>ผลการประเมินด้านพฤติกรรม</p>
						<div className="bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center">{eval_behavior_note}</div>
						<p>ผลการประเมินด้านการเรียน</p>
						<div className="bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center">{eval_study_note}</div>
					</div>
				</Card.Content>
			</Card>
		</div>
	)
}
