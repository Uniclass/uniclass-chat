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
			'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxNjg5NDE1ZWMyM2EzMzdlMmJiYWE1ZTNlNjhiNjZkYzk5MzY4ODQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmF0Y2hha2l0IFNyaXNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLemtQMDhTNFlHVF9fXzExclZHZ3VoWEZDRGI2bDNpUDB4Y1RVVXFsdTY9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzA0OTQyMjQyLCJ1c2VyX2lkIjoiNUlWNDZNR2Qxc1RGbTdjN0tDQWNNWFQ5YnFNMiIsInN1YiI6IjVJVjQ2TUdkMXNURm03YzdLQ0FjTVhUOWJxTTIiLCJpYXQiOjE3MDQ5NDIyNDIsImV4cCI6MTcwNDk0NTg0MiwiZW1haWwiOiJpcm9tZS50b3VjaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODYwMTYxMDM2ODE0NzQ1MjY2NSJdLCJlbWFpbCI6WyJpcm9tZS50b3VjaEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Sg-6vRqI4zRSsG7D0wrSs7dT_CzMFHTn-b7tsjVmUsagUeRCLnGrJUB9P_gGO_qCwIzo5FYkJtVqdXvIpD1xhnY5fFJhNNOJGqi5XNNQjn-hdWyX5dO8olUPjqGonBL8ZrayTct0xljVziLEuVYtgG9e9APsGRrTQ-3q1T_PcNdRT1ifMP9Dr4O7-DQvc9himokdbFIdawjK4XWhIECMJog5QfM7AdICKzn3qZXxGGNLtfzP_LynC_xsQD4nRMX6QrxhxyKz-75V0DuFP4ijf3exl0wqX2_ItidGSLbMbkrPkRXFmOrdMbh4w5cyObxfZH-F8gwCDAmleaaiNubigg',
		dataBaseApiUrl: 'http://localhost:3000',
		// dataBaseApiUrl: 'https://uniclass-api---dev-2fce6.ondigitalocean.app',
		// socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		socketApiUrl: 'wss://7n99e865wb.execute-api.ap-southeast-1.amazonaws.com/dev',
		userId: 'TCA0002',
		devTools: true
		// userId: 'TCA0002'
	}
}
