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
	args: {}
}
