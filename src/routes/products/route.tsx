import CustomBreadcrumb from '@/components/custom-breadcrumb'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import React from 'react'

const ProductsLayout: React.FC = () => {
	return (
		<div className='container mx-auto px-4 py-8 space-y-8'>
			<CustomBreadcrumb />
			<Outlet />
		</div>
	)
}

export const Route = createFileRoute('/products')({
	component: ProductsLayout
})
