import type { Meta, StoryObj } from '@storybook/react'
import { CourseStatus } from '.'

const meta: Meta<typeof CourseStatus> = {
	title: 'Components/CourseStatus',
	component: CourseStatus,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		orderStatus: 'B'
	}
}
