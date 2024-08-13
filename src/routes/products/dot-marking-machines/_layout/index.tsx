import DotMarkingMachinesList from '@/features/product/dot-marking-machine/pages/products-list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/dot-marking-machines/_layout/')({
	component: DotMarkingMachinesList
})
