import { fetchChatMessage, sendChatMessage } from '@/common/api/chat'
import create from 'zustand'

type StoreState = {
	rooms: Record<string, ChatMessage[]>
	socket: WebSocket | null
	socketStatus: boolean
}

type StoreActions = {
	connectWebSocket: (socketApiUrl: string) => void
	disconnectWebSocket: () => void
	sendMessage: (dataBaseApiUrl: string, authToken: string, msgData: ChatMessage) => void
	fetchChatMessage: (dataBaseApiUrl: string, authToken: string, course_id: string) => void
}

const initialState = {
	rooms: {},
	socket: null,
	socketStatus: false
}

export const useChatStore = create<StoreState & StoreActions>((set, get) => ({
	...initialState,

	// Connect to WebSocket
	connectWebSocket: (socketApiUrl) => {
		const { socketStatus } = get()

		// If the WebSocket is already connected, return without doing anything
		if (socketStatus) return

		const socket = new WebSocket(socketApiUrl)

		socket.onopen = () => {
			set({ socket, socketStatus: true })
		}

		socket.onmessage = (event) => {
			// Handle incoming messages
			const message = JSON.parse(event.data)
			const { course_id } = message.msgData

			console.log(message)

			set((state) => ({
				rooms: {
					...state.rooms,
					[course_id]: [...(state.rooms[course_id] || []), message.msgData]
				}
			}))
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
	sendMessage: async (dataBaseApiUrl, authToken, msgData) => {
		const { socket } = useChatStore.getState()
		if (socket && socket.readyState === WebSocket.OPEN) {
			try {
				await sendChatMessage(dataBaseApiUrl, authToken, msgData)
				socket.send(JSON.stringify({ action: 'sendMessage', msgData }))
			} catch (err) {
				console.log(err)
			}
		}
	},

	// Fetch chat messages from API
	fetchChatMessage: async (dataBaseApiUrl, authToken, course_id) => {
		try {
			const message = (await fetchChatMessage(dataBaseApiUrl, authToken, course_id)) as ChatMessage[]

			set((state) => ({
				rooms: {
					...state.rooms,
					[course_id]: [...(state.rooms[course_id] || []), ...message]
				}
			}))
		} catch (err) {
			console.log(err)
		}
	}
}))
