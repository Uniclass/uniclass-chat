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
			'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxNjg5NDE1ZWMyM2EzMzdlMmJiYWE1ZTNlNjhiNjZkYzk5MzY4ODQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzA1MTU3MDQxLCJ1c2VyX2lkIjoiQTRqZkZvbEs0UVdiUnhTQXBTWUhKb2c5c3dKMyIsInN1YiI6IkE0amZGb2xLNFFXYlJ4U0FwU1lISm9nOXN3SjMiLCJpYXQiOjE3MDUxNTcwNDEsImV4cCI6MTcwNTE2MDY0MSwiZW1haWwiOiJuaW5lcmlhQHByb3Rvbi5tZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5pbmVyaWFAcHJvdG9uLm1lIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.odLSNGx1N_DImQG56AOvbB2tNmC4imxLiEY2PQ5GzXGednUKMxK_Nh2P63rkGH1bhjib_f8n3lAQubNB4pX7l0cp7HlwVBH-6Q1-VbdgRX6yrlulrUkJ2e2dpk3EZd1PHiNQZ5kuflagJtjci7Pcrjn7dbDE0CrAVIokB-Nnksyw__ogBtZzPj9YNbbmwaCJw2yoGXDOae-HfDhZgLWUnEmXuvlbwRXSOhJokP_Cd4hwwG1SPSu0KAWEfFdwfFl-MDxEZq3JO3wJXRoWz7dt9MNZ7Mnj4QUVB_2ke8rNe6F2_SppDeJRUpcBJmqXrTPLXr8_sC6pTxvuln76mxjcqQ',
		dataBaseApiUrl: 'http://localhost:3000',
		// dataBaseApiUrl: 'https://uniclass-api---dev-2fce6.ondigitalocean.app',
		// socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		socketApiUrl: 'wss://7n99e865wb.execute-api.ap-southeast-1.amazonaws.com/dev',
		// userId: 'TCA0022',
		userId: 'STA0022',
		devTools: true
	}
}
