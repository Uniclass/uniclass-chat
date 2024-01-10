import React, { FC } from 'react'
import Card from './ui/card'
import { IconAlertTriangle } from '@tabler/icons-react'

type ErrorProps = {
	children: React.ReactNode
}

export const Error: FC<ErrorProps> = ({ children }) => {
	return (
		<Card className="p-3 flex flex-row gap-3 items-center text-red-400">
			<IconAlertTriangle size={20} /> {children}
		</Card>
	)
}
