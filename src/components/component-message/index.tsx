import { FC } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export const ComponentMessage: FC<ChatMessage> = () => {
	return (
		<Card className="bg-[#ffebd9] border-none w-[400px]">
			<CardHeader className="p-4">
				<CardTitle>ขอเลื่อนตารางเรียนหน่อยจารรร</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-4 p-4">
				<div>
					ขอเลื่อนตารางเรียนในวันที่ <span className="text-orange-400">26 พฤศจิกายน 2566</span>
				</div>
				<Card className="flex flex-row gap-3 items-center px-4 py-2">
					<h2 className="text-xl">09.00</h2>
					<div className="bg-orange-400 rounded-full h-[50px] w-[2px]"></div>
					<div className="flex flex-col">
						<p>คณิตศาสตร์ ป.1 </p>
						<p className="text-xs">ครูบี</p>
					</div>
				</Card>
				<div>
					เป็นวันที่ <span className="text-orange-400">3 ธันวาคม 2566</span>
				</div>
				<Card className="flex flex-row gap-3 items-center px-4 py-2">
					<h2 className="text-xl">09.00</h2>
					<div className="bg-orange-400 rounded-full h-[50px] w-[2px]"></div>
					<div className="flex flex-col">
						<p>คณิตศาสตร์ ป.1 </p>
						<p className="text-xs">ครูบี</p>
					</div>
				</Card>
				<div className="flex flex-col gap-4">
					<Button className="w-full bg-orange-400 text-white">ตรวจสอบตารางเรียน</Button>
					<div className="flex flex-row gap-2">
						<Button className="w-full border-green-400 text-green-400" variant="outline">
							ยืนยัน
						</Button>
						<Button className="w-full border-red-400 text-red-400" variant="outline">
							ปฏิเสธ
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
