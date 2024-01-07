import type { Meta, StoryObj } from '@storybook/react'
import { ChatApp } from '.'

const meta: Meta<typeof ChatApp> = {
	title: 'Components/ChatApp',
	component: ChatApp,
	parameters: {
		// layout: 'centered'
		// layout: 'fullscreen'
		layout: 'padded'
	},
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		authToken:
			'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxNjg5NDE1ZWMyM2EzMzdlMmJiYWE1ZTNlNjhiNjZkYzk5MzY4ODQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmF0Y2hha2l0IFNyaXNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLemtQMDhTNFlHVF9fXzExclZHZ3VoWEZDRGI2bDNpUDB4Y1RVVXFsdTY9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzA0NjI1Nzk4LCJ1c2VyX2lkIjoiNUlWNDZNR2Qxc1RGbTdjN0tDQWNNWFQ5YnFNMiIsInN1YiI6IjVJVjQ2TUdkMXNURm03YzdLQ0FjTVhUOWJxTTIiLCJpYXQiOjE3MDQ2MjU3OTgsImV4cCI6MTcwNDYyOTM5OCwiZW1haWwiOiJpcm9tZS50b3VjaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODYwMTYxMDM2ODE0NzQ1MjY2NSJdLCJlbWFpbCI6WyJpcm9tZS50b3VjaEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.EnwnCirHT6iVPazhS25C52l_C351j6VHxCS1VLJJ6ia-C6g-Haa0Ba59PcELlvNAr9XzAUO0rte0xwAW-vDUtOM8bBoShsD4CRDWot6xXZUJsn5-q0nvPXnVG5iBuTFMROab_rIkFoqfprX0PjAYpnKHQbYTtw2BcH_KpP-gWJY7USlcS6dUS_uZDvRp-bxGmlcpWQg35D6AhkJnbUXjlpvHs_rKCeIFwTgNWQfFWp0e5pwClndyTFE2RCf3ZEPj03WhFRQapdSbnGCjfhZRqOyTZc3MRIHzcQrYL-t8UJuCxCkQGE4XKgzBIy-mNyDL-iavaSeC9JcQJSXohuvkUQ',
		// dataBaseApiUrl: 'http://localhost:3000',
		dataBaseApiUrl: 'https://uniclass-api---dev-2fce6.ondigitalocean.app',
		// socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		socketApiUrl: 'wss://7n99e865wb.execute-api.ap-southeast-1.amazonaws.com/dev',
		userId: 'STD0002'
		// userId: 'STD0002'
	}
}
