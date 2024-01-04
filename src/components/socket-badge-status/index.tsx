import { FC } from 'react'
import { Badge } from '../ui/badge'

type ScoketBadgeStatusProps = {
	socketStatus: boolean
}

export const SocketBadgeStatus: FC<ScoketBadgeStatusProps> = ({ socketStatus }) => {
	return (
		<Badge variant="outline">
			{socketStatus ? (
				<>
					<div className="p-[3px] bg-green-400 rounded-full mr-1" /> Connected
				</>
			) : (
				<>
					<div className="p-[3px] bg-red-400 rounded-full mr-1" /> Disconnected
				</>
			)}
		</Badge>
	)
}
