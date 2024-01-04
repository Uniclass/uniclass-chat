type ChatRoomDetail = {
	order: {
		order_id: string
		order_id_mask: string
		order_status: string
		course_id: string
		course_name: string
	}
	teacher: {
		tid: string
		title: string
		firstname: string
		lastname: string
		phone: string
		photo_url: string
	}
	student: {
		sid: string
		title: string
		firstname: string
		lastname: string
		phone: string
		photo_url: string
	}
}
