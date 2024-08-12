import LaserCleaningMachinesList from '@/features/laser-cleaning-machines/pages/products-list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/laser-cleaning-machines/_layout/')({
	component: LaserCleaningMachinesList
})
