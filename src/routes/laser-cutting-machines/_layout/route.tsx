import CustomBreadcrumb from '@/components/custom-breadcrumb'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import React from 'react'

const LaserCuttingMachinesLayout: React.FC = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow'>
				<div className='container mx-auto px-4 py-8 space-y-8'>
					<CustomBreadcrumb />
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	)
}

export const Route = createFileRoute('/laser-cutting-machines/_layout')({
	component: LaserCuttingMachinesLayout
})
