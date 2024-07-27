import About from '@/routes/about/-pages/About'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
	component: About,
})
