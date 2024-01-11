import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Dialog from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IconAlertTriangle, IconPhoneCall } from '@tabler/icons-react'
import { FC } from 'react'
import Avatar from '../../ui/avatar'
import Card from '../../ui/card'
import { changeTeacher } from '@/common/api/chat.api'
import { useAppContext } from '@/components/app-provider'
import { useMutation } from '@tanstack/react-query'
import * as z from 'zod'
import { useForm, zodResolver } from '@mantine/form'

type TeacherDetailProps = {
	teacher: ChatRoomDetail['teacher']
	hasButton?: boolean
	roomId: string
}

const formSchema = z.object({
	course_credit_used: z.string().min(1, { message: 'กรุณากรอกจำนวนที่ครูสอน' }),
	remark: z.string()
})

export const TeacherDetail: FC<TeacherDetailProps> = ({ teacher, roomId, hasButton = true }) => {
	const { dataBaseApiUrl, authToken } = useAppContext()

	const changeTeacherMutation = useMutation({
		mutationKey: ['change-teacher'],
		mutationFn: async (variables: ChangeTeacher) => changeTeacher(dataBaseApiUrl, authToken, variables)
	})

	const form = useForm({
		validate: zodResolver(formSchema),
		initialValues: {
			course_credit_used: '',
			remark: ''
		}
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		changeTeacherMutation.mutate({
			order_id: roomId,
			teacher_id: teacher.tid,
			course_credit_used: Number(values.course_credit_used),
			remark: values.remark
		})
		form.reset()
	}
	return (
		<Card className="rounded-none bg-white w-full">
			<Card.Content className="p-3">
				{/* TEACHER PHOTO URL */}
				<div className="flex flex-row justify-between w-full">
					<div className="flex flex-row items-center gap-3">
						<Avatar className="border-orange-400 border-2">
							<Avatar.Image src={teacher.photo_url} alt={teacher.firstname} />
							<Avatar.Fallback>
								{teacher.firstname[0]}
								{teacher.lastname[0]}
							</Avatar.Fallback>
						</Avatar>
						<div className="flex flex-col mr-2">
							<div className="flex flex-col">
								{teacher?.title ? (
									<p className="text-nowrap">{teacher.title}</p>
								) : (
									<div className="flex flex-row gap-2">
										<p>{teacher.firstname}</p>
										<p>{teacher.lastname}</p>
									</div>
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
						<form onSubmit={form.onSubmit(onSubmit)}>
							<Dialog.Header>
								<Dialog.Title>
									<p className="text-xl">
										ท่านต้องการเปลี่ยนครู {teacher.firstname} {teacher.lastname} {teacher?.title && `(${teacher.title})`} หรือไม่?
									</p>
								</Dialog.Title>
								<Dialog.Description className="flex flex-col gap-3">
									<div className="flex flex-col gap-3 mt-3">
										<Label>จำนวนที่ครูสอน</Label>
										{form.errors && <div className="text-red-400">{form.getInputProps('course_credit_used').error}</div>}
										<Input type="number" placeholder="กรอกจำนวนที่ครูสอน" {...form.getInputProps('course_credit_used')} />
										<Label>หมายเหตุ</Label>
										<Input placeholder="กรอกเหตุผลที่ต้องการเปลี่ยนครู" {...form.getInputProps('remark')} />
									</div>
								</Dialog.Description>
							</Dialog.Header>

							{changeTeacherMutation.isError && (
								<div className="border-red-200 p-3 border-2 bg-red-100/50 mt-3">
									<div className="text-red-400 flex flex-row gap-3 items-center">
										<IconAlertTriangle size={20} />
										{changeTeacherMutation.error.message}
									</div>
								</div>
							)}
							<Dialog.Footer className="mt-3">
								<Dialog.Close asChild>
									<Button
										onClick={() => {
											form.reset()
											changeTeacherMutation.reset()
										}}
										className="bg-gray-500 hover:bg-gray-400 w-[50%] text-white"
									>
										ยกเลิก
									</Button>
								</Dialog.Close>
								<Button disabled={changeTeacherMutation.isPending} className="bg-red-500 hover:bg-red-400 w-[50%] text-white" type="submit">
									ยืนยัน
								</Button>
							</Dialog.Footer>
						</form>
					</Dialog.Content>
				</Dialog>
			</Card.Content>
		</Card>
	)
}
