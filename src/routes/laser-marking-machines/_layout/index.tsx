import LaserMarkingMachinesList from '@/features/laser-marking-machines/pages/products-list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/laser-marking-machines/_layout/')({
	component: LaserMarkingMachinesList
})
