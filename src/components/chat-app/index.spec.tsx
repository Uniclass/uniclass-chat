import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ChatApp } from '.'

describe('ChatApp', () => {
	it('renders without crashing', () => {
		render(<ChatApp socketApiUrl="" dataBaseApiUrl="" authToken="" userId="" />)

		// Add more specific assertions as needed
		expect(screen.getByTestId('chat-app')).toBeInTheDocument()
	})
})
