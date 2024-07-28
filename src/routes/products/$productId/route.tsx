import ProductDetail from '@/routes/products/-pages/ProductDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
	component: ProductDetail,
})
