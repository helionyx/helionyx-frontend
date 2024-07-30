import cleaning from '@/assets/cleaning.jpg'
import cutting from '@/assets/cutting.jpg'
import mark2 from '@/assets/mark2.jpg'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import React from 'react'

const products = [
	{
		id: 1,
		title: 'Laser Marking',
		image: mark2,
		description: 'High-precision marking solutions for product identification and traceability.'
	},
	{
		id: 2,
		title: 'Laser Cutting',
		image: cutting,
		description: 'Powerful cutting systems for metal, plastic, and composite materials.'
	},
	{
		id: 3,
		title: 'Laser Cleaning',
		image: cleaning,
		description: 'Efficient and eco-friendly cleaning solutions for surface preparation.'
	}
]

const ProductCategory: React.FC = () => {
	return (
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
									<CardDescription className='text-gray-600'>{product.description}</CardDescription>
								</CardContent>
								<CardFooter>
									<Link to='/products' search={{ category: product.title.split('Laser')[1].trim().toLowerCase() }}>
										<Button
											variant='outline'
											className='data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent transition-color duration-300 w-full text-zinc-950 border-solid border-2 border-[#F89D44] hover:text-[#F89D44]'
										>
											Learn More
										</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductCategory
