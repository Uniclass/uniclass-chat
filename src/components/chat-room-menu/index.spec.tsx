import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ChatRoomItem } from '.'

describe('ChatRoomMenu', () => {
	it('displays the latest message of the selected room', () => {
		// Mock the props
		const room: ChatRoom = {
			id: '1',
			room_id: '1',
			room_name: 'Room 1',
			room_status: true,
			created_time: '2021-09-01T00:00:00.000Z',
			updated_time: '2021-09-01T00:00:00.000Z'
		}
		const selectedTab = 0
		const index = 0
		const setSelectedTab = () => {}

		render(<ChatRoomItem room={room} selectedTab={selectedTab} index={index} setSelectedTab={setSelectedTab} />)

		expect(screen.getByTestId('latest-message')).toHaveTextContent('TEST')
	})

	it('displays notification', () => {
		// Mock the props
		const room: ChatRoom = {
			id: '1',
			room_id: '1',
			room_name: 'Room 1',
			room_status: true,
			created_time: '2021-09-01T00:00:00.000Z',
			updated_time: '2021-09-01T00:00:00.000Z'
		}
		const selectedTab = 0
		const index = 1
		const setSelectedTab = () => {}

		// Render the component
		render(<ChatRoomItem room={room} selectedTab={selectedTab} index={index} setSelectedTab={setSelectedTab} />)

		const notificationDiv = screen.getByTestId('notification-div')
		expect(notificationDiv).toBeInTheDocument()
	})
})
