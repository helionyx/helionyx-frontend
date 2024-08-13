import LaserMarkingMachinesList from '@/features/product/laser-marking-machines/pages/products-list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/laser-marking-machines/_layout/')({
	component: LaserMarkingMachinesList
})
