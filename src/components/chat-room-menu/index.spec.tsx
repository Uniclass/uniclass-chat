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
		const removeLatestMessage = () => {}
		const userProfiles = [{ firstname: 'John', lastname: 'Doe', photo_url: 'https://example.com/john.jpg' }]
		const latestMessage: ChatMessage = {
			room_id: '1',
			type: 'MSG',
			sender_type: 'TCA',
			sender_id: 'TCA0002',
			content: 'TEST'
		}

		render(
			<ChatRoomItem
				room={room}
				selectedTab={selectedTab}
				index={index}
				setSelectedTab={setSelectedTab}
				removeLatestMessage={removeLatestMessage}
				userProfiles={userProfiles}
				latestMessage={latestMessage}
				getNotiLatestMessage={() => false}
			/>
		)

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
		const removeLatestMessage = () => {}
		const userProfiles = [{ firstname: 'John', lastname: 'Doe', photo_url: 'https://example.com/john.jpg' }]
		const latestMessage: ChatMessage = {
			room_id: '1',
			type: 'MSG',
			sender_type: 'TCA',
			sender_id: 'TCA0002',
			content: 'TEST'
		}

		// Render the component
		render(
			<ChatRoomItem
				room={room}
				selectedTab={selectedTab}
				index={index}
				setSelectedTab={setSelectedTab}
				removeLatestMessage={removeLatestMessage}
				userProfiles={userProfiles}
				latestMessage={latestMessage}
				getNotiLatestMessage={() => true}
			/>
		)

		const notificationDiv = screen.getByTestId('notification-div')
		expect(notificationDiv).toBeInTheDocument()
	})
})
