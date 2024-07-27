import Layout from '@/layouts/Layout'

import Feature from '@/routes/index/-components/Feature'
import HeroSection from '@/routes/index/-components/HeroSection'
import ProductCategory from '@/routes/index/-components/ProductCategory'
import Testimonial from '@/routes/index/-components/Testimonial'

const HomePage = () => {
	return (
		<Layout>
			<HeroSection />
			<Feature />
			<ProductCategory />
			<Testimonial />
		</Layout>
	)
}

export default HomePage
