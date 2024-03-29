import type { Meta, StoryObj } from '@storybook/react'
import { CourseDetail } from '.'

const meta: Meta<typeof CourseDetail> = {
	title: 'Components/CourseDetail',
	component: CourseDetail,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		order: {
			order_id: 'A012',
			order_id_mask: 'PpOcpS',
			order_status: 'C',
			course_id: 'MATTH06-04',
			course_name: 'วิชา คณิตศาสตร์ ป.3 หลักสูตร ไทย คอร์ส 6 ครั้ง'
		},
		teacher: {
			tid: 'TCA0002',
			title: 'ครูริกโรล',
			firstname: 'ริก',
			lastname: 'โรลลิง',
			phone: '+66859009804',
			photo_url: 'https://s3.ap-southeast-1.amazonaws.com/uniclass.pub---dev/teacher/TCA0002/profile.pic'
		}
	}
}
