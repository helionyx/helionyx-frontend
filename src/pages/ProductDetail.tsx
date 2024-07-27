import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { productQueryOption } from '@/services/queries.service'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { Badge, ChevronRight, Download, Star } from 'lucide-react'
import { useState } from 'react'

const ProductDetail: React.FC = () => {
	const { productId } = useParams({ from: '/products/$productId' })
	const { data: product, isPending, isError } = useSuspenseQuery(productQueryOption(productId))

	const [activeImage, setActiveImage] = useState(0)

	return (
		<div className='container mx-auto px-4 py-8'>
			{isPending ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error...</div>
			) : product ? (
				<div className='container mx-auto px-4 py-8'>
					<div className='flex flex-col lg:flex-row gap-8'>
						<div className='lg:w-1/2'>
							<div className='relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden'>
								<img src={product.images[activeImage]} alt={product.name} className='w-full h-full object-cover' />
							</div>
							<div className='flex space-x-2 overflow-x-auto pb-2'>
								{product.images.map((image, index) => (
									<img
										key={image}
										src={image}
										onClick={() => setActiveImage(index)}
										alt={`${product.name} thumbnail ${index + 1}`}
										className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-all ${
											activeImage === index ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
										}`}
									/>
								))}
							</div>
						</div>
						<div className='lg:w-1/2'>
							<h1 className='text-4xl font-bold text-blue-900 mb-2'>{product.name}</h1>
							<div className='flex items-center mb-4'>
								<div className='flex text-yellow-400'>
									{[...Array(5)].map((_, i) => (
										<Star key={i} className='w-5 h-5 fill-current' />
									))}
								</div>
								<span className='ml-2 text-gray-600'>(4.8 out of 5)</span>
							</div>
							<p className='text-xl text-gray-700 mb-6'>{product.description}</p>
							<div className='flex flex-col sm:flex-row gap-4 mb-8'>
								<Button size='lg' className='flex-1 bg-blue-600 hover:bg-blue-700 text-white'>
									Get a Quote
								</Button>
								<Button size='lg' variant='outline' className='flex-1'>
									<Download className='mr-2 h-4 w-4' /> Download Brochure
								</Button>
							</div>
							<Card>
								<CardContent className='p-4'>
									<h3 className='font-semibold text-lg mb-2'>Key Features</h3>
									<ul className='list-disc pl-5 space-y-1'>
										{product.features.slice(0, 3).map((feature) => (
											<li key={feature}>{feature}</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>

					<Tabs defaultValue='features' className='mt-12'>
						<TabsList className='w-full justify-start'>
							<TabsTrigger value='features'>Features</TabsTrigger>
							<TabsTrigger value='specifications'>Specifications</TabsTrigger>
							<TabsTrigger value='applications'>Applications</TabsTrigger>
						</TabsList>
						<TabsContent value='features' className='mt-6'>
							<ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								{product.features.map((feature) => (
									<li key={feature} className='flex items-start'>
										<ChevronRight className='mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5' />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</TabsContent>
						<TabsContent value='specifications' className='mt-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
								{product.specifications.map((spec) => (
									<div key={spec.name} className='bg-gray-50 p-4 rounded-lg'>
										<h4 className='font-semibold text-gray-700'>{spec.name}</h4>
										<p className='text-gray-900'>{spec.value}</p>
									</div>
								))}
							</div>
						</TabsContent>
						<TabsContent value='applications' className='mt-6'>
							<div className='flex flex-wrap gap-2'>
								{product.applications.map((application) => (
									<Badge key={application} className='text-sm'>
										{application}
									</Badge>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			) : (
				<div>Not Found</div>
			)}
		</div>
	)
}

export default ProductDetail
