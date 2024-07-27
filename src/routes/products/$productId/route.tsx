import { productQueryOption } from '@/routes/products/-api/queries.api'
import ProductDetail from '@/routes/products/-pages/ProductDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
	loader: ({ context: { queryClient }, params: { productId } }) => {
		return queryClient.ensureQueryData(productQueryOption(Number(productId)))
	},
	component: ProductDetail,
})
