import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useNavigateAndScroll } from '@/hooks/useNavigateAndScroll'
import type { ProductSearch } from '@/routes/products'
import { productsQueryOptions } from '@/services/queries.service'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useSearch } from '@tanstack/react-router'
import { useState } from 'react'

const categories = ['All', 'Laser Marking Machines', 'Laser Cutting Machines', 'Laser Cleaning Machines']

const ProductList: React.FC = () => {
	const { category } = useSearch({ from: '/products' }) as ProductSearch

	console.log(category)

	const productsQuery = useSuspenseQuery(productsQueryOptions)

	const [selectedCategory, setSelectedCategory] = useState('All')

	const navigateAndScroll = useNavigateAndScroll()

	const filteredProducts =
		selectedCategory === 'All'
			? productsQuery.data
			: productsQuery.data.filter((product) => product.category === selectedCategory)

	return (
		<div className='bg-gradient-to-r from-emerald-50 to-blue-50 py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl font-bold text-amber-500 mb-8'>Our Products</h1>

				{/* Category filter */}
				<div className='mb-8 flex flex-wrap gap-2'>
					{categories.map((category) => (
						<Button
							key={category}
							variant={selectedCategory === category ? 'default' : 'outline'}
							onClick={() => setSelectedCategory(category)}
							className='bg-amber-600 text-white hover:text-white hover:bg-amber-700'
						>
							{category}
						</Button>
					))}
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
					{filteredProducts.map((product) => (
						<Card key={product.id} className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<img src={product.mainImage} alt={product.name} className='w-full h-48 object-cover' />
							<CardHeader>
								<CardTitle className='text-xl font-bold text-blue-900'>{product.name}</CardTitle>
								<CardDescription className='text-emerald-600'>{product.category}</CardDescription>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600'>{product.summarization}</p>
							</CardContent>
							<CardFooter>
								<Button
									variant='outline'
									className='w-full bg-transparent text-amber-700 hover:text-amber-700 border-amber-700 hover:bg-amber-50'
									onClick={() =>
										navigateAndScroll('/products/$productId', { params: { productId: product.id.toString() } })
									}
								>
									View Details
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductList
