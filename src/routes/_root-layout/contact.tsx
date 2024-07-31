import Contact from '@/features/contact/contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_root-layout/contact')({
	component: Contact
})
