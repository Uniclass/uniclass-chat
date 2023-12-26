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
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzMmNjMWNiMjg5ZGQ0NjI2YTQzNWQ3Mjk4OWFlNDMyMTJkZWZlNzgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmF0Y2hha2l0IFNyaXNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLemtQMDhTNFlHVF9fXzExclZHZ3VoWEZDRGI2bDNpUDB4Y1RVVXFsdTY9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAzNTc5MjY2LCJ1c2VyX2lkIjoiNUlWNDZNR2Qxc1RGbTdjN0tDQWNNWFQ5YnFNMiIsInN1YiI6IjVJVjQ2TUdkMXNURm03YzdLQ0FjTVhUOWJxTTIiLCJpYXQiOjE3MDM1NzkyNjYsImV4cCI6MTcwMzU4Mjg2NiwiZW1haWwiOiJpcm9tZS50b3VjaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODYwMTYxMDM2ODE0NzQ1MjY2NSJdLCJlbWFpbCI6WyJpcm9tZS50b3VjaEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rVlhBjCxGfJaBzX42m9wP3idoXNnebeC8kV3SxoBekMLvLo4OzYhwHrpDqPl-8my55OC6n_gveTqkpbRVJ4bD-1iwAw51Tz7_kawfS7g_jXjeKRhFN7rToj1LRNoxwdf_U3odSzFLMK-ODw676yF1benTtjEYvQsr_FU8rJlJxnP2CV2ANKv8mGZjivI3PMhRq5UxdUxEZan0Kkoc9AK3X6JTdiQXZ08sqmWXResJnNldS8Y0LVQsNjn7l7FkZWI-OQR_m2qIDyAzeMczhKZrZpYwDrsLLlZEuQU-kCs6SdbjzbLyXzhK0MRXzayWQ26fDNVEGwEwscMXx2K93O9Bg',
		dataBaseApiUrl: 'http://localhost:3000',
		socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		userId: 'TCA0002'
		// userId: 'STD0002'
	}
}
