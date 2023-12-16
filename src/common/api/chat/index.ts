import axios from 'axios'

const fetchChatRoom = (dataBaseApiUrl: string, authToken: string) => {
	return axios
		.get(`${dataBaseApiUrl}/chat/room/STD0012`, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload
			throw new Error(res.data.message_ui || res.data.message)
		})
}

const fetchChatMessage = (dataBaseApiUrl: string, authToken: string, room_id: string) => {
	return axios
		.get(`${dataBaseApiUrl}/chat/message/${room_id || ''}`, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload as ChatMessage[]
			throw new Error(res.data.message_ui || res.data.message)
		})
}

const sendChatMessage = (dataBaseApiUrl: string, authToken: string, body: ChatMessage) => {
	return axios
		.post(`${dataBaseApiUrl}/chat/message`, body, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload
			throw new Error(res.data.message_ui || res.data.message)
		})
}

export { fetchChatRoom, fetchChatMessage, sendChatMessage }
