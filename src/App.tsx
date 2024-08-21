import React, { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18n'
import { routeTree } from '@/routeTree.gen'

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
						<ReactQueryDevtools initialIsOpen={false} />
					</Suspense>
				)}
			</QueryClientProvider>
		</I18nextProvider>
	)
}

export default App
