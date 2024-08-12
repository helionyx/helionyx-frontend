import ProductDetail from '@/features/laser-cleaning-machines/pages/products-detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/laser-cleaning-machines/_layout/$productId')({
	component: ProductDetail,
	parseParams: (params): { productId: string } => ({
		productId: params.productId
	})
})
