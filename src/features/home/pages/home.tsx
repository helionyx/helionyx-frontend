import React from 'react'
import HeroSection from '../components/hero-section'
import Feature from '../components/feature'
import ProductCatalog from '../components/product-catalog'
import Testimonial from '../components/testimonial'

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

export default HomePage
