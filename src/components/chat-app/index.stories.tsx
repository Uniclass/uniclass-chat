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
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzMmNjMWNiMjg5ZGQ0NjI2YTQzNWQ3Mjk4OWFlNDMyMTJkZWZlNzgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmF0Y2hha2l0IFNyaXNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLemtQMDhTNFlHVF9fXzExclZHZ3VoWEZDRGI2bDNpUDB4Y1RVVXFsdTY9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAzNTgzMjI1LCJ1c2VyX2lkIjoiNUlWNDZNR2Qxc1RGbTdjN0tDQWNNWFQ5YnFNMiIsInN1YiI6IjVJVjQ2TUdkMXNURm03YzdLQ0FjTVhUOWJxTTIiLCJpYXQiOjE3MDM1ODMyMjUsImV4cCI6MTcwMzU4NjgyNSwiZW1haWwiOiJpcm9tZS50b3VjaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODYwMTYxMDM2ODE0NzQ1MjY2NSJdLCJlbWFpbCI6WyJpcm9tZS50b3VjaEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ZNkpDCwqaeBpiNsp6Uz3mwA4WpROzSDAA6CGc2_KWLd4ecLFVjoe6Mjyy_X8FVsi_lEPKHjmCSIblFiJZhmqYQ9bQQTUGUpR6bBzINsnWwvQ_FjSPNdS9pKlc06RMbcW-N5JZPFpJdncx2YNDPbfFbALVI1MVvCkacU4b3xAg6RW-ZQH6fqgpWV4xF7hj0_LvwKoKiacog1jekhPPoLQJODrSMEtaCaAKWifLZHQ7AoFVCFKzfvvFkZ9iVaMLqrgvaaC7x77Rc2AhX4Nt8NCzb2R4X-Fn6np-O3rUU8LvNWMt6CILopqPQgyfL2LKrPbOb8bp5JExj9OynXYmkbmFw',
		dataBaseApiUrl: 'http://localhost:3000',
		socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		userId: 'TCA0002'
		// userId: 'STD0002'
	}
}
