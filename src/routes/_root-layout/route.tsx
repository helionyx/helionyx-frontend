import Footer from '@/components/footer'
import Header from '@/components/header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_root-layout')({
	component: () => (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
})
