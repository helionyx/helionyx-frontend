import Footer from '@/components/footer'
import Header from '@/components/header'
import LoadingIndicator from '@/components/loading-indicator'
import { QueryClient } from '@tanstack/react-query'
import { Outlet, ScrollRestoration, createRootRouteWithContext, useRouterState } from '@tanstack/react-router'
import React from 'react'

const RouterSpinner: React.FC = () => {
	const isLoading = useRouterState({ select: (s) => s.status === 'pending' })
	return <LoadingIndicator show={isLoading} wait='delay-300' />
}

const RootRoute: React.FC = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<RouterSpinner />
			<Header />
			<main className='flex-grow'>
				<Outlet />
				<ScrollRestoration />
			</main>
			<Footer />
		</div>
	)
}

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	component: RootRoute
})
