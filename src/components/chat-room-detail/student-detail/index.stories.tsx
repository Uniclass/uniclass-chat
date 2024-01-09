import type { Meta, StoryObj } from '@storybook/react'
import { StudentDetail } from '.'

const meta: Meta<typeof StudentDetail> = {
	title: 'Components/StudentDetail',
	component: StudentDetail,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		student: {
			sid: 'STA0002',
			title: 'นักเรียน',
			firstname: 'นักเรียน',
			lastname: 'นักเรียน',
			phone: '+66859009804',
			photo_url: 'https://randomuser.me/api/portraits/lego/7.jpg'
		}
	}
}
