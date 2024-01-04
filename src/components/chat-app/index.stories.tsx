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
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyNmM2YTg0YWMwNjcwMDVjZTM0Y2VmZjliM2EyZTA4ZTBkZDliY2MiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmF0Y2hha2l0IFNyaXNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLemtQMDhTNFlHVF9fXzExclZHZ3VoWEZDRGI2bDNpUDB4Y1RVVXFsdTY9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzA0MzM3NzIyLCJ1c2VyX2lkIjoiNUlWNDZNR2Qxc1RGbTdjN0tDQWNNWFQ5YnFNMiIsInN1YiI6IjVJVjQ2TUdkMXNURm03YzdLQ0FjTVhUOWJxTTIiLCJpYXQiOjE3MDQzMzc3MjIsImV4cCI6MTcwNDM0MTMyMiwiZW1haWwiOiJpcm9tZS50b3VjaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODYwMTYxMDM2ODE0NzQ1MjY2NSJdLCJlbWFpbCI6WyJpcm9tZS50b3VjaEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.nEdz45eItYym7sl8d1B2bfJtDi94ag3i2SIFlfpH8ZMwVJUDQxvbNPeUR5IUCuABygSu1AhBVY4vug3D7EGSwNDdGoxYbB5dbMOBOGisotEL4y5vtpSiUC3NZplE3KZx19JB9Jqf01wz2W1JstBB9iaGa40htXpSwBlrA5_QoBNfHk_WZBz6-sAHg3ZANOemy41NrDWnPOpqNwgoIDDUQGULEGZfoziU8AIcmVOExe-QjGmJZRmn9BVRUJ3QVYh8JRJu020ODOCOuq_Lf8CofBEvuoBELLQURTBwrr1hNafpyrlaQ0boCcVjtqIPbNgfoRspmDgh05Iy-upRVWdSIg',
		dataBaseApiUrl: 'http://localhost:3000',
		// dataBaseApiUrl: 'https://uniclass-api---dev-2fce6.ondigitalocean.app',
		socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		// socketApiUrl: 'wss://7n99e865wb.execute-api.ap-southeast-1.amazonaws.com/dev',
		userId: 'TCA0002'
		// userId: 'STD0002'
	}
}
