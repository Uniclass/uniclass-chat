import { getAuthToken } from '@/common/api/chat.api'
import { QueryClient } from '@tanstack/react-query'
import { create } from 'zustand'

type StoreState = {
	notiLatestMessages: ChatMessage[]
	socket: WebSocket | null
	socketStatus: boolean
}

type StoreActions = {
	connectWebSocket: (dataBaseApiUrl: string, socketApiUrl: string, authToken: string, queryClient: QueryClient) => void
	disconnectWebSocket: () => void
	sendSocketMessage: (data: ChatMessage) => void
	updateLatestMessage: (roomId: string) => void
}

const initialState = {
	notiLatestMessages: [],
	socket: null,
	socketStatus: false
}

export const useChatStore = create<StoreState & StoreActions>((set, get) => ({
	...initialState,

	// Connect to WebSocket
	connectWebSocket: async (dataBaseApiUrl, socketApiUrl, authToken, queryClient) => {
		const { socketStatus } = get()

		// If the WebSocket is already connected, return without doing anything
		if (socketStatus) return

		const oneTimeAuthToken = await getAuthToken(dataBaseApiUrl, authToken)

		const socket = new WebSocket(socketApiUrl + '?token=' + oneTimeAuthToken)

		socket.onopen = () => {
			set({ socket, socketStatus: true })
		}

		socket.onmessage = (event) => {
			// Handle incoming messages
			const message = JSON.parse(event.data)
			const { room_id } = message
			setTimeout(() => {
				queryClient.invalidateQueries({ queryKey: ['chat-message', room_id] })
				queryClient.invalidateQueries({ queryKey: ['latest-message', room_id] })
			}, 3000)
		}

		socket.onclose = () => {
			set({ socket, socketStatus: false })
		}

		socket.onerror = (error) => {
			set({ socket, socketStatus: false })
			console.log(error)
		}
	},

	// Disconnect WebSocket
	disconnectWebSocket: () => {
		const { socket } = get()
		if (socket && socket.readyState === WebSocket.OPEN) {
			socket.close()
			set({ socket, socketStatus: false })
		}
	},

	// Send a message through WebSocket and API
	sendSocketMessage: async (data) => {
		const { socket } = useChatStore.getState()
		if (socket && socket.readyState === WebSocket.OPEN) {
			try {
				socket.send(JSON.stringify({ action: 'sendmessage', data }))
			} catch (err) {
				console.log(err)
			}
		}
	},

	updateLatestMessage: (roomId) => {
		const { notiLatestMessages } = get()
		const data = notiLatestMessages.filter((msg) => msg.room_id !== roomId)

		console.log(data)

		set(() => ({
			notiLatestMessages: [...data]
		}))
	}
}))
