import React, { createContext, useContext } from 'react'

interface AppContextProps {
	socketApiUrl: string
	dataBaseApiUrl: string
	authToken: string
	userId: string
	children?: React.ReactNode
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: React.FC<AppContextProps> = ({ children, ...props }) => {
	return <AppContext.Provider value={props}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error('useAppContext must be used within an AppProvider')
	}
	return context
}
