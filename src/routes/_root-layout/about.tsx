import About from '@/features/about/about'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_root-layout/about')({
	component: About
})
