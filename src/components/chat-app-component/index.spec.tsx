import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ChatAppComponent } from '.'

describe('ChatAppComponent', () => {
	it('renders without crashing', () => {
		render(<ChatAppComponent socketApiUrl="" dataBaseApiUrl="" authToken="" userId="" />)
		expect(screen.getByTestId('chat-app')).toBeInTheDocument()
	})
})
