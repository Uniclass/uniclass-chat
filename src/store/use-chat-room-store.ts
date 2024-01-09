import { fetchChatRoom } from '@/common/api/chat.api'
import { create } from 'zustand'

type StoreState = {
	chatRoom: any[]
	rooms: Record<string, any[]>
	isLoading: boolean
	error: Error | null
}

type StoreActions = {
	fetchChatRoom: (dataBaseApiUrl: string, authToken: string) => void
}

const initialState = {
	chatRoom: [],
	rooms: {},
	isLoading: false,
	error: null
}

export const useChatRoomStore = create<StoreState & StoreActions>((set) => ({
	...initialState,
	fetchChatRoom: async (dataBaseApiUrl, authToken) => {
		try {
			set({ isLoading: true, error: null })
			const response = await fetchChatRoom(dataBaseApiUrl, authToken)
			set({ chatRoom: response, isLoading: false, error: null })
		} catch (error) {
			console.error('fetchChatRoom', error)
			set({ error: error as Error })
			throw error as Error
		}
	}
}))
