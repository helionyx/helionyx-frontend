import ProductList from '@/features/product/pages/product-list'
import { ProductListQueryParams } from '@/features/product/types/product'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/_product-layout/')({
	validateSearch: (search: Record<string, unknown>): ProductListQueryParams => {
		return {
			category: (search.category as string[]) || '',
			power: (search.power as string[]) || '',
			wavelength: (search.wavelength as string[]) || '',
			search: (search.search as string) || ''
		}
	},
	component: ProductList
})
