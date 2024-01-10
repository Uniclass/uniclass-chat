import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FC } from 'react'
import { ChatApp } from '..'
import { AppProvider } from '../app-provider'

type ChatAppProviderProps = {
	socketApiUrl: string
	dataBaseApiUrl: string
	authToken: string
	userId: string
}
const queryClient = new QueryClient()

export const ChatAppProvider: FC<ChatAppProviderProps> = ({ socketApiUrl, dataBaseApiUrl, authToken, userId }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AppProvider socketApiUrl={socketApiUrl} dataBaseApiUrl={dataBaseApiUrl} authToken={authToken} userId={userId}>
				<ChatApp socketApiUrl={socketApiUrl} dataBaseApiUrl={dataBaseApiUrl} authToken={authToken} userId={userId} />
				<ReactQueryDevtools />
			</AppProvider>
		</QueryClientProvider>
	)
}
