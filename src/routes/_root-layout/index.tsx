import HomePage from '@/features/home/pages/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_root-layout/')({
	component: HomePage
})
