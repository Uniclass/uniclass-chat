import type { Meta, StoryObj } from '@storybook/react'
import { ClassDetail } from '.'

const meta: Meta<typeof ClassDetail> = {
	title: 'Components/ClassDetail',
	component: ClassDetail,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		orderStatus: 'F'
	}
}
