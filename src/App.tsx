import { routeTree } from '@/routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18n'

const queryClient = new QueryClient()

const router = createRouter({
	routeTree,
	context: { queryClient },
	defaultPreload: 'intent',
	defaultPreloadStaleTime: 0
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const TanStackRouterDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: React.lazy(() =>
				import('@tanstack/router-devtools').then((res) => ({
					default: res.TanStackRouterDevtools
				}))
			)

const ReactQueryDevtools = React.lazy(() =>
	import('@tanstack/react-query-devtools').then((res) => ({
		default: res.ReactQueryDevtools
	}))
)

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				{process.env.NODE_ENV === 'development' && (
					<Suspense fallback={null}>
						<TanStackRouterDevtools router={router} />
						<ReactQueryDevtools initialIsOpen={false} />
					</Suspense>
				)}
			</QueryClientProvider>
		</I18nextProvider>
	)
}

export default App
