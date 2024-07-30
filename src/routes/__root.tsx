import type { QueryClient } from '@tanstack/react-query'
import { Outlet, ScrollRestoration, createRootRouteWithContext } from '@tanstack/react-router'
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
			<ScrollRestoration />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	)
}

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	component: RootRoute
})
