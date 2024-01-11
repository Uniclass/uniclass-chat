type Education = {
	edu_status: string
	edu_qual: string
	edu_institute: string
	edu_faculty: string
	edu_major: string
	edu_branch: null | string
}

type Profile = {
	title: string
	firstname: string
	lastname: string
	photo_url: string
}

type Background = {
	edu_list: Education[]
	edu_status: string
	edu_qual: string
	edu_institute: string
	edu_faculty: string
	edu_major: string
	edu_branch: null | string
	teach_subjects: string[]
	teach_langs: string[]
	teach_levels: string[]
	teach_styles: string[]
	teach_exp: string
	teach_exp_desc: null | string
	academic_works: string
	self_desc: string
}

type Security = {
	deposit_amount: number
}

type Teacher = {
	tid: string
	profile: Profile
	privacy_policy: Record<string, unknown>
	background: Background
	verification: null | string
	security: Security
}

type ChangeTeacher = {
	order_id: string
	teacher_id: string
	course_credit_used: number
	remark: string
}
