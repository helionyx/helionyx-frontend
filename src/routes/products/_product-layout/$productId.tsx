import ProductDetail from '@/features/product/pages/product-detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/_product-layout/$productId')({
	component: ProductDetail
})
