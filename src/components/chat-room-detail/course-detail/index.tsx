// import Avatar from '@/components/ui/avatar'
// import { FC } from 'react'
// import Card from '../../ui/card'
// import { Badge } from '@/components/ui/badge'

// type CourseDetailProps = {
// 	// get type order from ChatRo
// 	order: any
// 	teacher: any
// }

// export const CourseDetail: FC<CourseDetailProps> = ({ order, teacher }) => {
// 	console.log(teacher)

// 	return (
// 		<Card className="relative bg-white rounded-none w-full">
// 			<div className="flex flex-row gap-3 p-3">
// 				{/* <Avatar className="w-[70px] h-[70px] rounded-md">
// 					<Avatar.Image className="w-[70px] h-[70px]" src={'https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024'} />
// 					<Avatar.Fallback>{course_name}</Avatar.Fallback>
// 				</Avatar> */}
// 				<div>
// 					<div className="flex flex-row gap-1">
// 						<p className="font-bold">รายวิชา:</p>
// 						<span>{`${order?.subject_name}`}</span>
// 					</div>
// 					<div className="flex flex-row gap-1">
// 						<p className="font-bold">คุณครู:</p>
// 						<span>{`${teacher?.firstname} ${teacher?.lastname}`}</span>
// 					</div>
// 				</div>
// 			</div>
// 			<Card.Content className="p-3">{/* <div>{course_name}</div> */}</Card.Content>
// 			<div className="flex flex-row w-full justify-end p-3">
// 				<Badge className="p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]" variant="secondary">
// 					ดูรายละเอียด
// 				</Badge>
// 			</div>
// 		</Card>
// 	)
// }

// import { getStudentCourseClassRoom, getStudentCourseDetail } from '@/actions/database'
import { IconBroadcast, IconBroadcastOff, IconTargetArrow } from '@tabler/icons-react'
import { useQueries } from '@tanstack/react-query'
import { isWithinInterval } from 'date-fns'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

type CourseDetailProps = {
	// get type order from ChatRo
	order: any
	teacher: any
}

export const CourseDetail = ({ order, teacher }: CourseDetailProps) => {
	const [studentId, setStudentId] = useState('')

	const { '0': course, '1': classRoom } = useQueries({
		queries: [
			{ queryKey: ['course', courseId[0]], queryFn: () => getStudentCourseDetail(courseId[0], studentId), enabled: !!courseId && !!studentId },
			{ queryKey: ['course-classroom', courseId[0]], queryFn: () => getStudentCourseClassRoom(courseId[0], studentId), enabled: !!courseId && !!studentId }
		]
	})

	const isLoading = course.isLoading || classRoom.isLoading
	const isError = course.isError || classRoom.isError
	const isSuccess = course.isSuccess && classRoom.isSuccess

	const courseCreditUsed = course.data?.course_credit_used || 0
	const courseCreditTotal = course.data?.course_credit_total || 0

	const startTime = new Date((isSuccess && classRoom.data[course.data?.class_indx_next - 1]?.st_time) || '')

	const isClassRoomOpen = !isWithinInterval(startTime, { start: new Date(), end: new Date(Date.now() + 3600000) })

	const handleClassRoomClick = () => {
		router.push(`/dashboard/${course.data?.courseId}/zoom?i=${course.data?.class_indx_next}`)
	}

	useEffect(() => {
		const sid = localStorage.getItem('sid')
		if (!localStorage.getItem('sid')) {
			router.push('/auth/user-select')
		}
		setStudentId(sid as string)
	}, [router])

	if (isLoading) {
		return (
			<Card className="p-3">
				<div className="flex flex-col gap-3">
					<Skeleton className="h-[24px] w-[250px] " />
					<Skeleton className="h-[28px] w-[200px]" />
					<Skeleton className="h-[40px] w-full" />
					<div className="mt-3 flex flex-row justify-between">
						<Skeleton className="h-[15px] w-[40px]" />
						<Skeleton className="h-[15px] w-[40px]" />
					</div>
					<Skeleton className="h-[15px] w-full" />
				</div>
			</Card>
		)
	}

	if (isError) {
		return (
			<Card className="p-3">
				<FormError type="component-error" message="เกิดข้อผิดพลาดในการโหลดข้อมูล" />
			</Card>
		)
	}

	return (
		isSuccess && (
			<Card className="bg-white p-3">
				<Card.Header className="p-3 text-xl font-bold">{course.data?.subject_name}</Card.Header>
				<Card.Content className="flex flex-col gap-6 p-3">
					{course.data?.course_objs && (
						<div className="flex flex-row items-center gap-2">
							<IconTargetArrow />
							<span className="font-bold">เป้าหมาย: </span>
							<p>{course.data?.course_objs}</p>
						</div>
					)}
					<Button onClick={handleClassRoomClick} disabled={isClassRoomOpen} className={cn('flex w-full flex-row gap-2 ', isClassRoomOpen ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-400')}>
						{isClassRoomOpen ? (
							<>
								<IconBroadcastOff /> {isNaN(startTime.getTime()) ? 'คลาสถัดไป' : startTime.toLocaleDateString()}{' '}
							</>
						) : (
							<>
								<IconBroadcast /> เข้าห้องเรียน
							</>
						)}
					</Button>
					<div className="flex flex-col gap-2">
						<div className="flex flex-row justify-between">
							<p>จำนวนครั้งที่เรียน</p>
							<p>
								{courseCreditUsed}/{courseCreditTotal}
							</p>
						</div>
						<Progress barColor="bg-blue-400" value={(courseCreditUsed / courseCreditTotal) * 100} />
					</div>
				</Card.Content>
			</Card>
		)
	)
}
