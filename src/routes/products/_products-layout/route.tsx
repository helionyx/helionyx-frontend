import Layout from '@/layouts/Layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import React from 'react'

const ProductLayoutComponent: React.FC = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}

export const Route = createFileRoute('/products/_products-layout')({
	component: ProductLayoutComponent
})
