import ProductDetail from '@/pages/ProductDetail'
import { productQueryOption } from '@/services/queries.service'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
	loader: ({ context: { queryClient }, params: { productId } }) => {
		return queryClient.ensureQueryData(productQueryOption(productId))
	},
	component: ProductDetail,
})
