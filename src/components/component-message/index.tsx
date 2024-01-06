import { FC } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Badge } from '../ui/badge'
import { IconSquareCheck } from '@tabler/icons-react'

export const ComponentMessage: FC<ChatMessage> = () => {
	return (
		<Card className="bg-[#ffebd9] border-none w-[400px]">
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
	)
}
