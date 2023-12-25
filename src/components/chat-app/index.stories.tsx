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
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzMmNjMWNiMjg5ZGQ0NjI2YTQzNWQ3Mjk4OWFlNDMyMTJkZWZlNzgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmF0Y2hha2l0IFNyaXNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLemtQMDhTNFlHVF9fXzExclZHZ3VoWEZDRGI2bDNpUDB4Y1RVVXFsdTY9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAzNTA3MDQxLCJ1c2VyX2lkIjoiNUlWNDZNR2Qxc1RGbTdjN0tDQWNNWFQ5YnFNMiIsInN1YiI6IjVJVjQ2TUdkMXNURm03YzdLQ0FjTVhUOWJxTTIiLCJpYXQiOjE3MDM1MDcwNDEsImV4cCI6MTcwMzUxMDY0MSwiZW1haWwiOiJpcm9tZS50b3VjaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODYwMTYxMDM2ODE0NzQ1MjY2NSJdLCJlbWFpbCI6WyJpcm9tZS50b3VjaEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mASin4kkhxQ127hAH2wJT_wUfzyvX2Fu4MJF_5QW5-ciRfJPsnzV8q6AiTF5W41qlr0CJcjrEOpg-pK8N7AIbJEQe8Wzn5uckGNxSgZQfqeK5vFwiEhd7xBpitsRl_YRFtXBE0lVSNzSRz0BQufcU1VIWIsIl4uAOJILGeyOkSbaLQcl895j79_HEIJUk92K7KnIjziVfCwWq298d4qkOPH1TEKP0FcPJbiCmmZJ5kXoiqkM7ofNNNkiV9FA0QQR_2R3Gv32XLuNfImWU5e8Lte2K4i8-pIrs4thdH7XD1hj5aKxds-oru6j-O8RU1ExHYGVhvzcPZ5H3UXyU2AUkg',
		dataBaseApiUrl: 'http://localhost:3000',
		socketApiUrl: 'wss://7n99e865wb.execute-api.ap-southeast-1.amazonaws.com/dev',
		// userId: 'TCA0002'
		userId: 'STD0002'
	}
}
