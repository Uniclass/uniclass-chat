type ChatMessage = {
	id?: string
	room_id: string
	type: 'MSG' | 'COMP' | 'FILE' | 'NOTI'
	sender_type: 'TCA' | 'STA' | 'SYS' | 'ADM'
	sender_id: string
	content?: string
	comp_type?: string
	comp_data?: any
	skip_audience_type?: string
	file_url?: string
}
