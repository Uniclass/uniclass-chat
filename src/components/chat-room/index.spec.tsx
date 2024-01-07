import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ChatRoom } from '.'

window.HTMLElement.prototype.scrollIntoView = function () {}

const renderChatRoom = (props = {}) => {
	const defaultProps = {
		roomId: '',
		userId: '',
		dataBaseApiUrl: '',
		authToken: '',
		currentRoom: {
			id: '',
			room_id: '',
			room_name: '',
			room_status: false,
			created_time: '',
			updated_time: ''
		},
		socketStatus: false,
		roomMenuOpen: false,
		setRoomMenuOpen: () => {},
		sideMenuOpen: false,
		setSideMenuOpen: () => {}
	}

	return render(<ChatRoom {...defaultProps} {...props} />)
}

describe('ChatRoom', () => {
	it('displays the correct room status (button)', async () => {
		renderChatRoom()

		const button = screen.getByTestId('message-submit')

		expect(button).toBeDisabled()
		expect(button).toBeInTheDocument()
	})

	it('displays the correct room status (form)', async () => {
		renderChatRoom()

		const input = screen.getByTestId('message-input')

		expect(input).toBeDisabled()
		expect(input).toBeInTheDocument()
	})
})
