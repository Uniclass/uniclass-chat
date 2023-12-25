type ChatMessage = {
	id?: string
	room_id: string
	type: 'MSG' | 'COMP' | 'FILE' | 'NOTI'
	sender_type: 'TCA' | 'STD' | 'SYS' | 'ADM'
	sender_id: string
	content?: string
	comp_type?: string
	comp_data?: string
	skip_audience_type?: string
	file_url?: string
}

type RoomAttendan = {
	firstname: string
	lastname: string
	title: string
	photo_url?: string
	student_id?: string
	teacher_id?: string
}

type ChatRoom = {
	id: string
	room_id: string
	room_name: string
	room_status: boolean
	created_time: string
	updated_time: string
}
