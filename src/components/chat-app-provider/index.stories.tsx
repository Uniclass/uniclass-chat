import type { Meta, StoryObj } from '@storybook/react'
import { ChatAppProvider } from '.'

const meta: Meta<typeof ChatAppProvider> = {
	title: 'Components/ChatAppProvider',
	component: ChatAppProvider,
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
			'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxNjg5NDE1ZWMyM2EzMzdlMmJiYWE1ZTNlNjhiNjZkYzk5MzY4ODQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmF0Y2hha2l0IFNyaXNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLemtQMDhTNFlHVF9fXzExclZHZ3VoWEZDRGI2bDNpUDB4Y1RVVXFsdTY9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzA0ODgxMjkzLCJ1c2VyX2lkIjoiNUlWNDZNR2Qxc1RGbTdjN0tDQWNNWFQ5YnFNMiIsInN1YiI6IjVJVjQ2TUdkMXNURm03YzdLQ0FjTVhUOWJxTTIiLCJpYXQiOjE3MDQ4ODEyOTMsImV4cCI6MTcwNDg4NDg5MywiZW1haWwiOiJpcm9tZS50b3VjaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODYwMTYxMDM2ODE0NzQ1MjY2NSJdLCJlbWFpbCI6WyJpcm9tZS50b3VjaEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JGOUio3JVfmMJ5qJbCnPBOgKbHGV_lt40txqKe3tzBwDl_PMNDjnwtbCLM5H40e7vRqfQkvfA1HI_SLmjpvfz0w4F7RZfazF397DSeFdvzPQPMz6Wfpoie5OPdglDDVK3f3_EtzXYVhhf1NnfhEzvp-WMW1rwsNh_ZoiFGA3pBuaCMhZdbPZgMMg6Nxp9z0Vx4mWarsUk80ZU2_dcDFS34cimFOogNAsUy-SiX5sSsz8_rcZU72L-8wUpvU7bYEDvzYswqocNZMZjcxmHlC-6x4eBZrX18C_WXjG1iV-MfV18MkoBQMR-ppTY4Gd8mT5dA5VHvsEbboRuCzaltLGpw',
		dataBaseApiUrl: 'http://localhost:3000',
		// dataBaseApiUrl: 'https://uniclass-api---dev-2fce6.ondigitalocean.app',
		// socketApiUrl: 'wss://b59xru5edg.execute-api.ap-southeast-1.amazonaws.com/HUNTER',
		socketApiUrl: 'wss://7n99e865wb.execute-api.ap-southeast-1.amazonaws.com/dev',
		userId: 'STA0002'
		// userId: 'TCA0002'
	}
}
