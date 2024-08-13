import LaserCuttingMachinesList from '@/features/product/laser-cutting-machines/pages/products-list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/laser-cutting-machines/_layout/')({
	component: LaserCuttingMachinesList
})
