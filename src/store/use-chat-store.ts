import { fetchChatMessage, sendChatMessage, getAuthToken, fetchUserProfileList } from '@/common/api/chat'
import create from 'zustand'

type StoreState = {
	rooms: Record<string, ChatMessage[]>
	profile: RoomAttendan[]
	socket: WebSocket | null
	socketStatus: boolean
	sending: boolean
}

type StoreActions = {
	connectWebSocket: (dataBaseApiUrl: string, socketApiUrl: string, authToken: string) => void
	disconnectWebSocket: () => void
	sendMessage: (dataBaseApiUrl: string, authToken: string, data: ChatMessage, room_id: string) => void
	fetchChatMessage: (dataBaseApiUrl: string, authToken: string, room_id: string, ts_st: string, ts_en: string) => void
	fetchUserProfile: (dataBaseApiUrl: string, authToken: string, room_Id: string) => void
}

const initialState = {
	rooms: {},
	profile: [],
	socket: null,
	socketStatus: false,
	sending: false
}

export const useChatStore = create<StoreState & StoreActions>((set, get) => ({
	...initialState,

	// Connect to WebSocket
	connectWebSocket: async (dataBaseApiUrl, socketApiUrl, authToken) => {
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

			set((state) => ({
				rooms: {
					...state.rooms,
					[room_id]: [...(state.rooms[room_id] || []), message]
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
	sendMessage: async (dataBaseApiUrl, authToken, data, room_id) => {
		const { socket } = useChatStore.getState()
		if (socket && socket.readyState === WebSocket.OPEN) {
			try {
				// set loading state
				set(() => ({ sending: true }))
				await sendChatMessage(dataBaseApiUrl, authToken, data, room_id)
				socket.send(JSON.stringify({ action: 'sendmessage', data }))
				set(() => ({ sending: false }))
			} catch (err) {
				console.log(err)
				set(() => ({ sending: false }))
			}
		}
	},

	// Fetch chat messages from API
	fetchChatMessage: async (dataBaseApiUrl, authToken, room_id, ts_st, ts_en) => {
		try {
			const message = (await fetchChatMessage(dataBaseApiUrl, authToken, room_id, ts_st, ts_en)) as ChatMessage[]

			set((state) => {
				const existingMessages = state.rooms[room_id] || []
				const newMessages = [...existingMessages, ...message]

				const uniqueMessages = newMessages.reduce((acc: ChatMessage[], current: ChatMessage) => {
					const index = acc.findIndex((msg) => msg.id === current.id) // Assuming each message has a unique 'id' property
					if (index < 0) {
						acc.push(current)
					}
					return acc
				}, [])

				return {
					rooms: {
						...state.rooms,
						[room_id]: uniqueMessages
					}
				}
			})
		} catch (err) {
			console.log(err)
		}
	},

	// Fetch User Profile From API
	fetchUserProfile: async (dataBaseApiUrl, authToken, room_Id) => {
		try {
			const profile = await fetchUserProfileList(dataBaseApiUrl, authToken, room_Id)
			set({ profile })
		} catch (err) {
			console.log(err)
		}
	}
}))
