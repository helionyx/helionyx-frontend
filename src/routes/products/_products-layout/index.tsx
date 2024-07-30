import ProductList from '@/routes/products/-pages/ProductList'
import { createFileRoute } from '@tanstack/react-router'
import { ProductListQueryParams } from '../-types/product'

export const Route = createFileRoute('/products/_products-layout/')({
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
