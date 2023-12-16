import { cn } from '@/lib/utils'
import { IconInfoSquare, IconSquareCheck, IconSquareX } from '@tabler/icons-react'
import { FC } from 'react'
import { Card, CardContent } from '../ui/card'

export const NotificationMessage: FC<ChatMessage> = ({ comp_type, content }) => {
	const iconSize = 28

	let [borderColor, bgColor, icon] = ['border-gray-400', 'bg-gray-100/50', <IconInfoSquare size={iconSize} />]

	switch (comp_type?.trim()) {
		case 'NOTI:INFO':
			borderColor = 'border-gray-400'
			bgColor = 'bg-gray-100/50'
			icon = <IconInfoSquare size={iconSize} className="text-gray-400" />
			break

		case 'NOTI:SUCCESS':
			borderColor = 'border-green-400'
			bgColor = 'bg-green-100/50'
			icon = <IconSquareCheck size={iconSize} className="text-green-400" />
			break

		case 'NOTI:DANGER':
			borderColor = 'border-red-400'
			bgColor = 'bg-red-100/50'
			icon = <IconSquareX size={iconSize} className="text-red-400" />
			break
	}

	return (
		<div className="flex flex-row justify-center w-full">
			<Card className={cn('rounded-2xl flex items-center flex-row w-[500px] pl-4 border-2', borderColor, bgColor)}>
				<div>{icon}</div>
				<CardContent className="flex flex-row gap-4 p-4">
					<div>{content}</div>
				</CardContent>
			</Card>
		</div>
	)
}
