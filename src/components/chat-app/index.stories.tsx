import type { Meta, StoryObj } from '@storybook/react'
import { ChatApp } from '.'

const meta: Meta<typeof ChatApp> = {
	title: 'Components/ChatApp',
	component: ChatApp,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		authToken:
			'eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyNzM2NTk3LCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI3MzY1OTcsImV4cCI6MTcwMjc0MDE5NywiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LhfTDuDd91CUEgkkueFsiEW4F4ZJwrQthvjYJZ9Z5tKa9m3T3qWNjaDVYff6Z4HvI1ZBl8bMcbo_ami_sGmlRvRaDQBLmHjI45VQwH4xOj4aXFTbTHLjUDVgRl8iieG8Ttkv0GSMB6GYqd0lH_ySePj__sK1_7J_sClp0py0UqedcOhsFIcG4DMz1_DzmrUdr-s_4FbwdBigynCJxegUZqAcGsKp5p6BTSUu67qLmuKZY8KPZD20yhxz0CoZ2SWPo2Wbi9sS7qJR8KtsvZi-RbLRx_0_P5YD0fMK0lcsWZJpZPouJq0nGIXx_W4qYSRcu_CNTXPicP5Krv0KTMNANg',
		dataBaseApiUrl: 'http://localhost:3000',
		socketApiUrl: 'wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/'
	}
}
