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
			'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxNjg5NDE1ZWMyM2EzMzdlMmJiYWE1ZTNlNjhiNjZkYzk5MzY4ODQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzA0OTU3MDQ1LCJ1c2VyX2lkIjoiQTRqZkZvbEs0UVdiUnhTQXBTWUhKb2c5c3dKMyIsInN1YiI6IkE0amZGb2xLNFFXYlJ4U0FwU1lISm9nOXN3SjMiLCJpYXQiOjE3MDQ5NTcwNDUsImV4cCI6MTcwNDk2MDY0NSwiZW1haWwiOiJuaW5lcmlhQHByb3Rvbi5tZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5pbmVyaWFAcHJvdG9uLm1lIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.DBpqQibEBLutax6Bf0yKxZ2tKUfWKOtgHLmqY-7hczBFUH_HPVHCEkqmZJHnKPzcBoTiyGrZar_E4PgGlJ3dGqAEBwBmjngZ7ueIFkg1BXVhnhaxOJM2g-NmaIft0DuGZ5Qj9m6QP_EdEJI9H1M6yHP4X7Vx2VrOCxxOW626ccIJHna1OtodXkYcG13syCmTHZPGRzYO2IB2lZlh5zhhitmv4qbWla8d7b75rHIJXoXnOFpyUKudxccZLgRMVDnJzbHw22uFKLbd4iy89cwWLOR5OcG2G0_DkOndGYbKZEI4qn7yWCqCVbK6trPAmK6g9JF2QWDHByLZA5LIuFhK0w',
		dataBaseApiUrl: 'http://localhost:3000',
		// dataBaseApiUrl: 'https://uniclass-api---dev-2fce6.ondigitalocean.app',
		// socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		socketApiUrl: 'wss://7n99e865wb.execute-api.ap-southeast-1.amazonaws.com/dev',
		userId: 'TCA0002',
		devTools: true
		// userId: 'TCA0002'
	}
}
