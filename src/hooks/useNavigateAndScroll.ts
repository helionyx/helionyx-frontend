import { useNavigate } from '@tanstack/react-router'
import { useCallback } from 'react'

export const useNavigateAndScroll = () => {
	const navigate = useNavigate()

	const navigateAndScroll = useCallback(
		(to: string, options?: { params?: Record<string, string>; search?: Record<string, string> }) => {
			navigate({ to, ...options })
			window.scrollTo(0, 0)
		},
		[navigate]
	)

	return navigateAndScroll
}
