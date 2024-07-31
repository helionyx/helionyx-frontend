import { useRouterState } from '@tanstack/react-router'
import React from 'react'

export const LoadingIndicator: React.FC = () => {
	const isLoading = useRouterState({ select: (s) => s.status === 'pending' })

	if (!isLoading) return null

	return (
		<div className='fixed top-0 left-0 right-0 h-1 bg-amber-500 z-50'>
			<div className='h-full w-1/3 bg-amber-600 animate-pulse'></div>
		</div>
	)
}
