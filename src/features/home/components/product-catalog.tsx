import cleaning from '/laser-cleaning-machines/HCL.png'
import cutting from '/laser-cutting-machines/HCN-C80.png'
import mark2 from '/laser-marking-machines/co2-laser-marker/HCO-SC.png'
import dotMark from '/laser-marking-machines/dot-marking/HDO-12.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import React from 'react'

const products = [
	{
		id: 1,
		category: 'laser-marking-machines',
		title: 'Laser Marking',
		image: mark2,
		description: 'High-precision marking solutions for product identification and traceability.'
	},
	{
		id: 2,
		category: 'laser-cutting-machines',
		title: 'Laser Cutting',
		image: cutting,
		description: 'Powerful cutting systems for metal, plastic, and composite materials.'
	},
	{
		id: 3,
		category: 'laser-cleaning-machines',
		title: 'Laser Cleaning',
		image: cleaning,
		description: 'Efficient and eco-friendly cleaning solutions for surface preparation.'
	},
	{
		id: 4,
		category: 'dot-marking-machines',
		title: 'Dot Marking',
		image: dotMark,
		description: 'Efficient and eco-friendly cleaning solutions for surface preparation.'
	}
]

const ProductCatalog: React.FC = () => {
	return (
		<section className='py-24 bg-[#F89D44]'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-16 text-white'>Laser Machine Category</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{products.map((product) => (
						<Card
							key={product.id}
							className='overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col justify-between h-full'
						>
							<CardHeader className='p-0 relative overflow-hidden rounded-lg flex justify-center items-center h-48'>
								<img src={product.image} alt={product.title} className='w-full h-48 object-contain bg-transparent' />
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
							</CardHeader>
							<CardContent className='p-4 mb-4'>
								<CardTitle className='text-xl font-bold text-[#F89D44]'>{product.title}</CardTitle>
								<CardDescription className='text-gray-600'>{product.description}</CardDescription>
							</CardContent>
							<CardFooter className='mt-auto'>
								<Link to={`/products/${product.category}`} className='w-full'>
									<Button
										variant='outline'
										className='w-full data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent transition-color duration-300 text-zinc-950 border-solid border-2 border-[#F89D44] hover:text-[#F89D44]'
									>
										Learn More
									</Button>
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProductCatalog
