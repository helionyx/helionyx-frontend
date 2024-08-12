import LaserCuttingMachinesList from '@/features/laser-cutting-machines/pages/products-list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/laser-cutting-machines/_layout/')({
	component: LaserCuttingMachinesList
})
