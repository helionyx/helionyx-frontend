import Layout from '@/layouts/Layout'
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
	component: () => (
		<Layout>
			<Outlet />
		</Layout>
	),
})
