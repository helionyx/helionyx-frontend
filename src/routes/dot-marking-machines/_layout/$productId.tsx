import ProductDetail from '@/features/dot-marking-machine/pages/products-detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dot-marking-machines/_layout/$productId')({
	component: ProductDetail,
	parseParams: (params): { productId: string } => ({
		productId: params.productId
	})
})
