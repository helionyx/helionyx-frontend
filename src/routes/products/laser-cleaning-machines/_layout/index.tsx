import LaserCleaningMachinesList from '@/features/product/laser-cleaning-machines/pages/products-list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/laser-cleaning-machines/_layout/')({
	component: LaserCleaningMachinesList
})
