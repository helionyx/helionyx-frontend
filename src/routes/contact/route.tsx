import Contact from '@/routes/contact/-pages/Contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
	component: Contact
})
