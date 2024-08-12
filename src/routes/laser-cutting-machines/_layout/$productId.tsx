import ProductDetail from '@/features/laser-cutting-machines/pages/products-detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/laser-cutting-machines/_layout/$productId')({
	component: ProductDetail,
	parseParams: (params): { productId: string } => ({
		productId: params.productId
	})
})
