import type { Meta, StoryObj } from '@storybook/react'
import { ChatApp } from '.'

const meta: Meta<typeof ChatApp> = {
	title: 'Components/ChatApp',
	component: ChatApp,
	parameters: {
		// layout: 'centered'
		// layout: 'fullscreen'
		layout: 'fullscreen'
	},
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		authToken:
			'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxNjg5NDE1ZWMyM2EzMzdlMmJiYWE1ZTNlNjhiNjZkYzk5MzY4ODQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzA0OTg0MzI5LCJ1c2VyX2lkIjoiQTRqZkZvbEs0UVdiUnhTQXBTWUhKb2c5c3dKMyIsInN1YiI6IkE0amZGb2xLNFFXYlJ4U0FwU1lISm9nOXN3SjMiLCJpYXQiOjE3MDQ5ODQzMjksImV4cCI6MTcwNDk4NzkyOSwiZW1haWwiOiJuaW5lcmlhQHByb3Rvbi5tZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5pbmVyaWFAcHJvdG9uLm1lIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.M698i0S1Ut8bmGapjza4fuoiVXI63wXx64fXYSUYG7PByrEHYvj9iZjtmCc72s905zcIeZQKn4tloFY6AgsCwGP_cTY9oVyg5ivix4T_hN6Sg_YvFrtluyWh9ef4JzdYvfBuqr2brEr6QOSTWmCmg9DQ4K0kYecv86lSeiLc4ihj3s1oOt-t_o0nX7GhQkGJWAksCFEbbWzAxB_oxdKLO6HJ8-GAYYZvLE3fNGqN_oIyzNGK54EW_17L8MNrIJdrkM-iuslfYYBb05Ehq1mtuN8p4KcVMQcAXGSpxsbk-OqWE00suqkMJVNNDJ1FUWGxWBTZDabS2rtnuJmMTfXVNw',
		dataBaseApiUrl: 'http://localhost:3000',
		// dataBaseApiUrl: 'https://uniclass-api---dev-2fce6.ondigitalocean.app',
		// socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		socketApiUrl: 'wss://7n99e865wb.execute-api.ap-southeast-1.amazonaws.com/dev',
		userId: 'TCA0002',
		devTools: true
		// userId: 'TCA0002'
	}
}
