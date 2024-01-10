import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FC } from 'react'
import { AppProvider } from '../app-provider'
import { ChatAppComponent } from '../chat-app-component'

type ChatAppProps = {
	socketApiUrl: string
	dataBaseApiUrl: string
	authToken: string
	userId: string
}
const queryClient = new QueryClient()

export const ChatApp: FC<ChatAppProps> = ({ socketApiUrl, dataBaseApiUrl, authToken, userId }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AppProvider socketApiUrl={socketApiUrl} dataBaseApiUrl={dataBaseApiUrl} authToken={authToken} userId={userId}>
				<ChatAppComponent socketApiUrl={socketApiUrl} dataBaseApiUrl={dataBaseApiUrl} authToken={authToken} userId={userId} />
				<ReactQueryDevtools />
			</AppProvider>
		</QueryClientProvider>
	)
}
