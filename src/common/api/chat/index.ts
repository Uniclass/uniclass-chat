import axios from 'axios'

const fetchChatRoom = (dataBaseApiUrl: string, authToken: string) => {
	return axios
		.get(`${dataBaseApiUrl}/chat/room`, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload as ChatRoom[]
			throw new Error(res.data.message_ui || res.data.message)
		})
}

const fetchChatMessage = (dataBaseApiUrl: string, authToken: string, room_id: string, ts_st: string, ts_en: string) => {
	return axios
		.get(`${dataBaseApiUrl}/chat/room/${room_id}/message?ts_st=${ts_st || ''}&ts_en=${ts_en || ''}`, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload as ChatMessage[]
			throw new Error(res.data.message_ui || res.data.message)
		})
}

const sendChatMessage = (dataBaseApiUrl: string, authToken: string, body: ChatMessage, room_id: string) => {
	return axios
		.post(`${dataBaseApiUrl}/chat/room/${room_id}/message`, body, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload as ChatMessage
			throw new Error(res.data.message_ui || res.data.message)
		})
}

const getAuthToken = (dataBaseApiUrl: string, authToken: string) => {
	return axios
		.get(`${dataBaseApiUrl}/chat/token`, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload as string
			throw new Error(res.data.message_ui || res.data.message)
		})
}

const fetchUserProfileList = (dataBaseApiUrl: string, authToken: string, room_id: string) => {
	return axios
		.get(`${dataBaseApiUrl}/chat/room/${room_id}/attendant`, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload as RoomAttendan[]
			throw new Error(res.data.message_ui || res.data.message)
		})
}

const fetchUserProfile = (dataBaseApiUrl: string, authToken: string, user_id: string) => {
	return axios
		.get(`${dataBaseApiUrl}/chat/profile?user_id=${user_id || ''}`, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload
			throw new Error(res.data.message_ui || res.data.message)
		})
}

const fetchChatRoomDetail = (dataBaseApiUrl: string, authToken: string, room_id: string) => {
	return axios
		.get(`${dataBaseApiUrl}/chat/room/${room_id}`, {
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then((res) => {
			if (res.data.code === 200) return res.data.payload
			throw new Error(res.data.message_ui || res.data.message)
		})
}

export { fetchChatRoom, fetchChatMessage, sendChatMessage, getAuthToken, fetchUserProfileList, fetchUserProfile, fetchChatRoomDetail }
