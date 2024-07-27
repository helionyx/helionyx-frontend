import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { ProductSearch } from '@/routes/products'
import { productsQueryOptions } from '@/services/queries.service'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link, useSearch } from '@tanstack/react-router'
import { useState } from 'react'

const categories = ['All', 'Laser Marking', 'Laser Cutting', 'Laser Cleaning', 'Laser Welding']

const ProductList: React.FC = () => {
	const { category } = useSearch({ from: '/products' }) as ProductSearch

	const productsQuery = useSuspenseQuery(productsQueryOptions)

	const [selectedCategory, setSelectedCategory] = useState('All')

	const filteredProducts =
		selectedCategory === 'All'
			? productsQuery.data
			: productsQuery.data.filter((product) => product.category === selectedCategory)

	return (
		<div className='bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl font-bold text-blue-900 mb-8'>Our Products</h1>

				{/* Category filter */}
				<div className='mb-8 flex flex-wrap gap-2'>
					{categories.map((category) => (
						<Button
							key={category}
							variant={selectedCategory === category ? 'default' : 'outline'}
							onClick={() => setSelectedCategory(category)}
							className='bg-emerald-600 text-white hover:bg-emerald-700'
						>
							{category}
						</Button>
					))}
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredProducts.map((product) => (
						<Card key={product.id} className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<img src={product.images[0]} alt={product.name} className='w-full h-48 object-cover' />
							<CardHeader>
								<CardTitle className='text-xl font-bold text-blue-900'>{product.name}</CardTitle>
								<CardDescription className='text-emerald-600'>{product.category}</CardDescription>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600'>
									High-performance {product.category.toLowerCase()} solution for industrial applications.
								</p>
							</CardContent>
							<CardFooter>
								<Link to='/products/$productId' params={{ productId: product.id }} className='w-full'>
									<Button variant='outline' className='w-full text-emerald-700 border-emerald-700 hover:bg-emerald-50'>
										View Details
									</Button>
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductList
