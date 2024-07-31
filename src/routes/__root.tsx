import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, ScrollRestoration } from '@tanstack/react-router'
import React from 'react'

const TanStackRouterDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: React.lazy(() =>
				import('@tanstack/router-devtools').then((res) => ({
					default: res.TanStackRouterDevtools
				}))
			)

const RootRoute: React.FC = () => {
	return (
		<>
			<Outlet />
			<ScrollRestoration />
			<React.Suspense fallback={null}>
				<TanStackRouterDevtools />
			</React.Suspense>
		</>
	)
}

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	component: RootRoute
})
