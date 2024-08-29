import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import Feature from './-components/feature'
import HeroSection from './-components/hero-section'
import ProductCatalog from './-components/product-catalog'
import Testimonial from './-components/testimonial'

const HomePage: React.FC = () => {
	return (
		<>
			<HeroSection />
			<Feature />
			<ProductCatalog />
			<Testimonial />
		</>
	)
}

export const Route = createFileRoute('/')({
	component: HomePage
})
