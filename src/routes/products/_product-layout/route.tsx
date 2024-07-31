import React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from '@/components/header'
import Footer from '@/components/footer'

const ProductsLayout: React.FC = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow'>
				<div className='container mx-auto px-4 py-8'>
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	)
}

export const Route = createFileRoute('/products/_product-layout')({
	component: ProductsLayout
})
