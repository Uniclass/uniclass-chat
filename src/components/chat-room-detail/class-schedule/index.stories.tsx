import type { Meta, StoryObj } from '@storybook/react'
import { ClassSchedule } from '.'

const meta: Meta<typeof ClassSchedule> = {
	title: 'Components/ClassSchedule',
	component: ClassSchedule,
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
		}
	}
}
