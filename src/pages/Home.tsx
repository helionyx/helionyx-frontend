import Layout from '@/layouts/Layout'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import group from '@/assets/group.png'
import unmatchPrecision from '@/assets/icon-benefits-commitment.png'
import innovation from '@/assets/icon-benefits-innovation.png'
import sustainability from '@/assets/icon-benefits-sustainability.png'
import quality from '@/assets/quality.png'

import cleaning from '@/assets/cleaning.jpg'
import cutting from '@/assets/cutting.jpg'
import mark2 from '@/assets/mark2.jpg'

import testimonail1 from '@/assets/01.png'
import testimonail2 from '@/assets/02.png'
import bg_laser from '@/assets/bg-laser.jpg'

import { useNavigateAndScroll } from '@/hooks/useNavigateAndScroll'
import { LightbulbIcon, ShieldCheckIcon } from 'lucide-react'
import { GiSewingMachine } from 'react-icons/gi'

const products = [
	{
		id: 1,
		title: 'Laser Marking',
		image: mark2,
		description: 'High-precision marking solutions for product identification and traceability.',
	},
	{
		id: 2,
		title: 'Laser Cutting',
		image: cutting,
		description: 'Powerful cutting systems for metal, plastic, and composite materials.',
	},
	{
		id: 3,
		title: 'Laser Cleaning',
		image: cleaning,
		description: 'Efficient and eco-friendly cleaning solutions for surface preparation.',
	},
]

const testimonial = [
	{
		id: 1,
		quote:
			"LaserTech Pro's marking systems have significantly improved our product traceability and reduced errors. Their support team is unparalleled.",
		name: 'Jane Doe',
		title: 'CEO, TechInnovate Inc.',
		image: testimonail1,
	},
	{
		id: 2,
		quote:
			"The precision and speed of LaserTech Pro's cutting systems have revolutionized our manufacturing process. We've seen a 30% increase in efficiency.",
		name: 'John Smith',
		title: 'Operations Manager, MetalWorks Co.',
		image: testimonail2,
	},
]

const HomePage = () => {
	const navigateAndScroll = useNavigateAndScroll()

	return (
		<>
			<Layout>
				{/* Hero Section */}
				<section className='relative text-white min-h-[calc(100vh-64px)] flex flex-col justify-between'>
					<div className='absolute inset-0 opacity-80'>
						<img src={bg_laser} alt='Laser technology in action' className='w-full h-full object-cover' />
					</div>
					<div className='container mx-auto px-4 relative flex-grow flex flex-col justify-center py-12'>
						<div className='max-w-4xl mx-auto text-center'>
							<h1 className='text-3xl md:text-5xl font-bold mb-10 leading-tight '>
								LASER MARKING & CUTTING & CLEANING SOLUTIONS
							</h1>
							<p className='text-xl mb-10'>
								Helionyx is a prominent and trusted leader in the laser technology industry, specializing in the
								development, manufacturing, and distribution of advanced laser marking systems. With a commitment to
								exce lence and innovation, Helionyx has established itself as a reliable partner for businesses seeking
								cutting-edge laser solutions.
							</p>
							<div className='flex justify-center space-x-[100px]'>
								<div className='text-center'>
									<LightbulbIcon className='w-16 h-16 mx-auto mb-2 ' />
									<p>INNOVATIVE PROCESS</p>
								</div>
								<div className='text-center'>
									<GiSewingMachine className='w-16 h-16 mx-auto mb-2' />
									<p>INLINE SOLUTIONS</p>
								</div>
								<div className='text-center'>
									<ShieldCheckIcon className='w-16 h-16 mx-auto mb-2' />
									<p>GUARANTEED SAFETY</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className='py-24 bg-gray-50'>
					<div className='container mx-auto px-4'>
						<h2 className='text-4xl font-bold text-center mb-16 text-[#F89D44]'>Why Choose Helionyx ?</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
							<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
								<img src={unmatchPrecision} alt='Reliability' className='h-20 w-auto mb-4' />
								<h3 className='text-2xl font-medium text-white mb-2'>Reliability</h3>
								<p className='text-white text-center'>
									Ensuring consistent performance and dependability in all our offerings.
								</p>
							</div>
							<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
								<img src={group} alt='Customer Focus' className='h-20 w-auto mb-4' />
								<h3 className='text-2xl font-medium text-white mb-2'>Customer Focus</h3>
								<p className='text-white text-center'>Prioritizing the needs and success of our clients.</p>
							</div>
							<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
								<img src={sustainability} alt='Sustainability' className='h-20 w-auto mb-4' />
								<h3 className='text-2xl font-medium text-white mb-2'>Sustainability</h3>
								<p className='text-white text-center'>
									Continuously pushing the boundaries of laser technology to offer state-of-the-art solutions.
								</p>
							</div>
							<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
								<img src={innovation} alt='Innovation' className='h-20 w-auto mb-4' />
								<h3 className='text-2xl font-medium text-white mb-2'>Innovation</h3>
								<p className='text-white text-center'>
									Committing to environmentally responsible practices in our operations.
								</p>
							</div>
							<div className='col-span-full flex justify-center mt-6'>
								<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center max-w-sm'>
									<img src={quality} alt='Quality' className='h-20 w-auto mb-4' />
									<h3 className='text-2xl font-medium text-white mb-2'>Quality</h3>
									<p className='text-white text-center'>
										Maintaining the highest standards in every aspect of our products and services.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Product Categories Section */}
				<section className='py-24 bg-[#F89D44]'>
					<div className='container mx-auto px-4 max-w-5xl'>
						<h2 className='text-4xl font-bold text-center mb-16 text-white'>Laser Machine Category</h2>
						<div className='flex justify-center'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
								{products.map((product) => (
									<Card
										key={product.id}
										className='overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white w-80'
									>
										<img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
										<CardHeader>
											<CardTitle className='text-xl font-bold text-[#F89D44]'>{product.title}</CardTitle>
										</CardHeader>
										<CardContent>
											<p className='text-gray-600'>{product.description}</p>
										</CardContent>
										<CardFooter>
											<Button
												variant='outline'
												onClick={() =>
													navigateAndScroll('/products', {
														search: { category: product.title.split('Laser')[1].trim().toLowerCase() },
													})
												}
												className='data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent transition-color duration-300 w-full text-zinc-950 border-solid border-2 border-[#F89D44] hover:text-[#F89D44]'
											>
												Learn More
											</Button>
										</CardFooter>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Testimonial Section */}
				<section className='py-24 bg-white'>
					<div className='container mx-auto px-4'>
						<h2 className='text-4xl font-bold text-center mb-16 text-[#F89D44]'>What Our Clients Say</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
							{testimonial.map((testimonial) => (
								<Card key={testimonial.id} className='bg-white shadow-lg border-l-4 border-[#F89D44]'>
									<CardContent className='pt-8'>
										<p className='text-gray-600 italic mb-4'>"{testimonial.quote}"</p>
										<div className='flex items-center'>
											<img src={testimonial.image} alt='Client' className='w-12 h-12 rounded-full mr-4' />
											<div>
												<p className='font-bold text-[#F89D44]'>{testimonial.name}</p>
												<p className='text-sm text-gray-500'>{testimonial.title}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default HomePage
