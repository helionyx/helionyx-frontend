// import { productQueryOption } from '@/routes/products/-api/queries.api'
import ProductDetail from '@/routes/products/-pages/ProductDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/_products-layout/$productId')({
	validateSearch: () => ({}),
	// loader: ({ context: { queryClient }, params: { productId } }) =>
	// 	queryClient.ensureQueryData(productQueryOption(Number(productId))),
	component: ProductDetail
})
