import { useState, useEffect } from 'react'

const useBrowserRestriction = () => {
	const [isAllowed, setIsAllowed] = useState(false)

	useEffect(() => {
		const allowedBrowsers = ['Chrome', 'Firefox', 'Safari', 'Edg']

		// Get the browser name
		const getBrowserName = () => {
			const userAgent = navigator.userAgent
			if (userAgent.includes('Chrome')) return 'Chrome'
			if (userAgent.includes('Firefox')) return 'Firefox'
			if (userAgent.includes('Safari')) return 'Safari'
			if (userAgent.includes('Edg')) return 'Edge'
			return 'Unsupported'
		}

		const currentBrowser = getBrowserName()

		// Check if the current browser is allowed
		const isBrowserAllowed = allowedBrowsers.includes(currentBrowser)
		setIsAllowed(isBrowserAllowed)
	}, [])

	return isAllowed
}

export default useBrowserRestriction
