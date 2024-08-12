import DotMarkingMachinesList from '@/features/dot-marking-machine/pages/products-list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dot-marking-machines/_layout/')({
	component: DotMarkingMachinesList
})
