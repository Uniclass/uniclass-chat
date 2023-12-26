import type { Meta, StoryObj } from '@storybook/react'
import { TeacherDetail } from '.'

const meta: Meta<typeof TeacherDetail> = {
	title: 'Components/TeacherDetail',
	component: TeacherDetail,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
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
