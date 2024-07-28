import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { products } from '@/db'
import { useNavigateAndScroll } from '@/hooks/useNavigateAndScroll'
import { useProductId } from '@/routes/products/-api/queries.api'
import { useParams } from '@tanstack/react-router'
import { Mailbox, Phone, ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const skeletonStyles = `
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .skeleton-pulse {
    animation: pulse 1.5s ease-in-out 0.5s infinite;
  }

  .skeleton-shine {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    animation: shine 1.5s infinite;
  }

  @keyframes shine {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`

function ProductDetailSkeleton() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<Card>
				<CardContent className='p-6'>
					<div className='md:flex'>
						<div className='md:w-1/2 p-6'>
							<div className='relative w-full h-[300px] mb-4 bg-gray-300 rounded-lg skeleton-pulse'>
								<div className='absolute inset-0 skeleton-shine' />
							</div>
							<div className='flex mt-4 space-x-2'>
								{[1, 2, 3].map((_, index) => (
									<div key={index} className='relative w-1/3 h-24 bg-gray-300 rounded-md skeleton-pulse'>
										<div className='absolute inset-0 skeleton-shine' />
									</div>
								))}
							</div>
						</div>
						<div className='md:w-1/2 p-6'>
							<div className='h-10 w-3/4 mb-8 bg-gray-300 rounded skeleton-pulse' />
							<div className='h-4 w-full mb-8 bg-gray-300 rounded skeleton-pulse' />
							<div className='space-y-8'>
								<div className='h-6 w-1/2 mb-2 bg-gray-300 rounded skeleton-pulse' />
								{[1, 2, 3].map((_, index) => (
									<div key={index} className='flex items-center mb-2'>
										<div className='h-6 w-6 mr-2 bg-gray-300 rounded-full skeleton-pulse' />
										<div className='h-4 w-3/4 bg-gray-300 rounded skeleton-pulse' />
									</div>
								))}
							</div>
							<div className='h-12 w-full mt-8 bg-gray-300 rounded skeleton-pulse' />
						</div>
					</div>
				</CardContent>
				<Separator className='md:mt-24' />
				<CardContent className='p-6'>
					<div className='h-10 w-full mb-4 bg-gray-300 rounded skeleton-pulse' />
					<div className='h-48 w-full bg-gray-300 rounded skeleton-pulse' />
				</CardContent>
			</Card>
			<div className='mt-12'>
				<div className='h-8 w-1/4 mb-6 bg-gray-300 rounded skeleton-pulse' />
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{[1, 2, 3].map((_, index) => (
						<Card key={index}>
							<CardContent className='p-0'>
								<div className='relative w-full h-48 bg-gray-300 rounded-t-lg skeleton-pulse'>
									<div className='absolute inset-0 skeleton-shine' />
								</div>
							</CardContent>
							<CardHeader>
								<div className='h-6 w-3/4 mb-2 bg-gray-300 rounded skeleton-pulse' />
								<div className='h-4 w-full bg-gray-300 rounded skeleton-pulse' />
							</CardHeader>
							<CardFooter>
								<div className='h-4 w-1/4 bg-gray-300 rounded skeleton-pulse' />
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

const ProductDetail: React.FC = () => {
	const { productId } = useParams({ from: '/products/$productId' })
	const { data: product, isPending } = useProductId(Number(productId))
	const navigateAndScroll = useNavigateAndScroll()

	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) return

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	if (isPending) {
		return (
			<>
				<style>{skeletonStyles}</style>
				<ProductDetailSkeleton />
			</>
		)
	}

	if (!product) return <div>Product not found</div>

	const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 6)

	return (
		<div className='container mx-auto px-4 py-8'>
			<Card>
				<CardContent className='p-6'>
					<div className='md:flex'>
						<div className='md:w-1/2 p-6'>
							<Carousel setApi={setApi} className='w-full max-w-md'>
								<CarouselContent>
									{product.imagesList.map((image, index) => (
										<CarouselItem key={index}>
											<img
												src={image}
												alt={`${product.name} ${index + 1}`}
												className='w-full h-full object-cover rounded-lg'
											/>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
							<div className='py-2 text-center text-sm text-muted-foreground'>
								Image {current} of {count}
							</div>
						</div>

						<div className='md:w-1/2 p-6'>
							<CardTitle className='text-3xl mb-8'>{product.name}</CardTitle>
							<CardDescription className='mb-8'>{product.summarization}</CardDescription>

							<div className='space-y-8'>
								<h3 className='text-xl font-semibold mb-2'>Key Features:</h3>
								<ul>
									{product.features.map((feature, index) => (
										<li key={index} className='flex items-center mb-2'>
											<Badge className='mr-2 rounded-full bg-green-500 hover:bg-green-500'>✓</Badge>
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className='flex space-x-8 mt-8 justify-center'>
								<Button className='flex items-center text-xl bg-amber-500 hover:bg-amber-600 transition-colors w-full'>
									<ShoppingCart className='w-6 h-6 mr-2' />
									Get a Quote
								</Button>
							</div>
						</div>
					</div>
				</CardContent>

				<Separator className='md:mt-24' />

				<CardContent className='p-6'>
					<Tabs defaultValue='overalls'>
						<TabsList>
							<TabsTrigger value='overalls'>Over All</TabsTrigger>
							<TabsTrigger value='descriptions'>Descriptions</TabsTrigger>
							<TabsTrigger value='specifications'>Specifications</TabsTrigger>
							<TabsTrigger value='applications'>Applications</TabsTrigger>
							<TabsTrigger value='support'>Support</TabsTrigger>
						</TabsList>

						<TabsContent value='overalls'>
							<div className='space-y-8'>
								<h3 className='text-xl font-semibold'>Product Overview</h3>
								<p>{product.summarization}</p>
								<div className='space-y-8'>
									<h3 className='text-xl font-semibold'>Key Features:</h3>
									<ul className='list-disc pl-6'>
										{product.features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</ul>
								</div>
								<div className='space-y-8'>
									<h3 className='text-xl font-semibold'>Product Description</h3>
									<p>{product.description}</p>
								</div>
								<div className='space-y-8'>
									<h3 className='text-xl font-semibold'>Product Specification</h3>
									<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
										{product.specifications.map((spec, index) => (
											<div key={index}>
												<h5 className='font-semibold text-muted-foreground'>{spec.name}:</h5>
												<p>{spec.value}</p>
											</div>
										))}
									</div>
								</div>
								<div className='space-y-8'>
									<h3 className='text-xl font-semibold'>Product Applications</h3>
									<ul className='list-disc pl-6'>
										{product.applications.map((application, index) => (
											<li key={index}>{application}</li>
										))}
									</ul>
								</div>
								<div className='space-y-8'>
									<h3 className='text-xl font-semibold mb-4'>Customer Support</h3>
									<p className='mb-4'>
										Our team of experts is ready to assist you with any questions or concerns you may have about the{' '}
										{product.name}.
									</p>
									<div className='flex items-center space-x-4'>
										<Button variant='link' className='p-0 transition-colors duration-150 hover:text-amber-500'>
											<Mailbox className='w-4 h-4 mr-2' />
											Email Support
										</Button>
										<Button variant='link' className='p-0 transition-colors duration-150 hover:text-amber-500'>
											<Phone className='w-4 h-4 mr-2' />
											Phone Support
										</Button>
									</div>
								</div>
							</div>
						</TabsContent>

						<TabsContent value='descriptions'>
							<div className='space-y-4'>
								<h3 className='text-xl font-semibold'>Product Description</h3>
								<p>{product.description}</p>
							</div>
						</TabsContent>

						<TabsContent value='specifications'>
							<div className='space-y-4'>
								<h3 className='text-xl font-semibold'>Product Specification</h3>
								<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
									{product.specifications.map((spec, index) => (
										<div key={index}>
											<h5 className='font-semibold text-muted-foreground'>{spec.name}:</h5>
											<p>{spec.value}</p>
										</div>
									))}
								</div>
							</div>
						</TabsContent>

						<TabsContent value='applications'>
							<div className='space-y-4'>
								<h3 className='text-xl font-semibold'>Product Applications</h3>
								<ul className='list-disc pl-6'>
									{product.applications.map((application, index) => (
										<li key={index}>{application}</li>
									))}
								</ul>
							</div>
						</TabsContent>

						<TabsContent value='support'>
							<h3 className='text-xl font-semibold mb-4'>Customer Support</h3>
							<p className='mb-4'>
								Our team of experts is ready to assist you with any questions or concerns you may have about the{' '}
								{product.name}.
							</p>
							<div className='flex items-center space-x-4'>
								<Button variant='link' className='p-0 '>
									<Mailbox className='w-4 h-4 mr-2' />
									Email Support
								</Button>
								<Button variant='link' className='p-0'>
									<Phone className='w-4 h-4 mr-2' />
									Phone Support
								</Button>
							</div>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>

			{relatedProducts.length > 0 ? (
				<div className='mt-12'>
					<h2 className='text-2xl font-bold mb-6'>Related Products</h2>
					<Carousel
						opts={{
							align: 'start',
						}}
						className='w-full'
					>
						<CarouselContent>
							{relatedProducts.map((relatedProduct) => (
								<CarouselItem key={relatedProduct.id} className='md:basis-1/2 lg:basis-1/3'>
									<div className='p-1'>
										<Card>
											<CardContent className='p-0'>
												<img
													src={relatedProduct.mainImage}
													alt={relatedProduct.name}
													className='w-full h-48 object-cover rounded-t-lg'
												/>
											</CardContent>
											<CardHeader>
												<CardTitle>{relatedProduct.name}</CardTitle>
												<CardDescription>{relatedProduct.summarization}</CardDescription>
											</CardHeader>
											<CardFooter>
												<Button
													variant='link'
													className='p-0 transition-colors duration-150 hover:text-amber-500'
													onClick={() =>
														navigateAndScroll('/products/$productId', {
															params: { productId: relatedProduct.id.toString() },
														})
													}
												>
													Learn More →
												</Button>
											</CardFooter>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			) : (
				<div className='mt-12'>
					<Card>
						<CardContent className='p-6'>
							<h2 className='text-2xl font-bold mb-4'>No Related Products</h2>
							<p>There are currently no related products for this item.</p>
							<Button
								variant='outline'
								className='mt-4 border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
								onClick={() => navigateAndScroll('/products')}
							>
								Browse All Products
							</Button>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	)
}

export default ProductDetail
