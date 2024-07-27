import Layout from '@/layouts/Layout'
import { productsQueryOptions } from '@/services/queries.service'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export type ProductSearch = {
	category?: string
}

export const Route = createFileRoute('/products')({
	validateSearch: (search: Record<string, unknown>): ProductSearch => {
		return {
			category: (search.category as string) || '',
		}
	},
	loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(productsQueryOptions),
	component: () => (
		<Layout>
			<Outlet />
		</Layout>
	),
})
