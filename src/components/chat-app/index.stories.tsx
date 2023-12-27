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
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzMmNjMWNiMjg5ZGQ0NjI2YTQzNWQ3Mjk4OWFlNDMyMTJkZWZlNzgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmF0Y2hha2l0IFNyaXNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLemtQMDhTNFlHVF9fXzExclZHZ3VoWEZDRGI2bDNpUDB4Y1RVVXFsdTY9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAzNjcxMTcxLCJ1c2VyX2lkIjoiNUlWNDZNR2Qxc1RGbTdjN0tDQWNNWFQ5YnFNMiIsInN1YiI6IjVJVjQ2TUdkMXNURm03YzdLQ0FjTVhUOWJxTTIiLCJpYXQiOjE3MDM2NzExNzEsImV4cCI6MTcwMzY3NDc3MSwiZW1haWwiOiJpcm9tZS50b3VjaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODYwMTYxMDM2ODE0NzQ1MjY2NSJdLCJlbWFpbCI6WyJpcm9tZS50b3VjaEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.0dT65Tk-KMtC324OZ6U3hGsTi2oBW6XgkkDv0T55GSAjBdqYLzVzDS3AUCmBW2-BHKBHdmwA2KXaQv-qJzQv1wLSd54UaOWUnA5XgTXnka2O9XF8-lmIztH04mC4bD2kKn3ov2pe6Ejgefk68YpJA-aERR9zWgkEQsSQvRN4ZzkOVAjuULoyKxGe9kUItFY-ZNhlEp80168G63nQb3cz9rKUangAtEU_LkQVkfoEwIc9iw2M5qb5c2leh9PGsrnbge9BkWYJt54zRT_boFRDE-VyBKZr_6sUYvQ3wVUT186qras274mxWkb_B-d_OtavdnHtaT-EO2L9kp4ZM0Bj8w',
		dataBaseApiUrl: 'http://localhost:3000',
		// socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		socketApiUrl: 'wss://7n99e865wb.execute-api.ap-southeast-1.amazonaws.com/dev',
		userId: 'TCA0002'
		// userId: 'STD0002'
	}
}
