import Footer from '@/components/footer'
import Header from '@/components/header'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import React from 'react'

const RootLayout: React.FC = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export const Route = createFileRoute('/_root-layout')({
	component: RootLayout
})
