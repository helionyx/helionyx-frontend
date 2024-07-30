import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useProductId, useRelatedProductsQuery } from '@/routes/products/-api/queries.api'
import ProductDetailSkeleton from '@/routes/products/-components/product-detail/ProductDetailSkeleton'
import { Link, useParams } from '@tanstack/react-router'
import { Mailbox, Phone, ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ProductDetail: React.FC = () => {
	const { productId } = useParams({ from: '/products/_products-layout/$productId' })
	const { data: product, isPending } = useProductId(Number(productId))
	const { data: relatedProducts } = useRelatedProductsQuery(Number(product?.id), product?.category)

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

	if (isPending) return <ProductDetailSkeleton />
	if (!product) return <div>Product not found</div>

	return (
		<div className='container mx-auto px-4 py-8'>
			<Card>
				<CardHeader className='p-6'>
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
							<CardDescription className='py-2 text-center text-sm text-muted-foreground'>
								Image {current} of {count}
							</CardDescription>
						</div>

						<div className='md:w-1/2 p-6'>
							<CardHeader className='p-0'>
								<CardTitle className='text-3xl mb-8'>{product.name}</CardTitle>
								<CardDescription className='mb-8'>{product.summarization}</CardDescription>
							</CardHeader>

							<CardContent className='p-0 space-y-8 mt-8'>
								<CardTitle className='text-xl font-semibold'>Key Features:</CardTitle>
								<ul className='space-y-2'>
									{product.features.map((feature, index) => (
										<li key={index} className='flex items-center'>
											<Badge className='mr-2 rounded-full bg-green-500 hover:bg-green-500'>✓</Badge>
											<CardDescription>{feature}</CardDescription>
										</li>
									))}
								</ul>
							</CardContent>

							<CardFooter className='p-0 flex space-x-8 mt-8 justify-center'>
								<Button className='flex items-center text-xl bg-amber-500 hover:bg-amber-600 transition-colors w-full'>
									<ShoppingCart className='w-6 h-6 mr-2' />
									Get a Quote
								</Button>
							</CardFooter>
						</div>
					</div>
				</CardHeader>

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

						<TabsContent value='overalls' className='space-y-4'>
							<CardContent className='p-0 space-y-4'>
								<CardTitle className='text-xl font-semibold'>Product Overview</CardTitle>
								<CardDescription>{product.summarization}</CardDescription>
							</CardContent>
							<CardContent className='p-0 space-y-4'>
								<CardTitle className='text-xl font-semibold'>Key Features:</CardTitle>
								<ul className='list-disc pl-6'>
									{product.features.map((feature, index) => (
										<li key={index}>
											<CardDescription>{feature}</CardDescription>
										</li>
									))}
								</ul>
							</CardContent>
							<CardContent className='p-0 space-y-4'>
								<CardTitle className='text-xl font-semibold'>Product Description</CardTitle>
								<CardDescription>{product.description}</CardDescription>
							</CardContent>
							<CardContent className='p-0 space-y-4'>
								<CardTitle className='text-xl font-semibold'>Product Specification</CardTitle>
							</CardContent>
							<CardContent className='grid grid-cols-2 md:grid-cols-3 gap-4 p-0'>
								{product.specifications.map((spec, index) => (
									<CardHeader className='p-0' key={index}>
										<CardTitle className='text-sm font-semibold text-muted-foreground'>{spec.name}:</CardTitle>
										<CardDescription>{spec.value}</CardDescription>
									</CardHeader>
								))}
							</CardContent>
							<CardContent className='p-0 space-y-4'>
								<CardTitle className='text-xl font-semibold'>Product Applications</CardTitle>
								<ul className='list-disc pl-6'>
									{product.applications.map((application, index) => (
										<li key={index}>
											<CardDescription>{application}</CardDescription>
										</li>
									))}
								</ul>
							</CardContent>
							<CardContent className='p-0 space-y-4'>
								<CardTitle className='text-xl font-semibold mb-4'>Customer Support</CardTitle>
								<CardDescription className='mb-4'>
									Our team of experts is ready to assist you with any questions or concerns you may have about the{' '}
									{product.name}.
								</CardDescription>
							</CardContent>
							<CardContent className='flex items-center p-0 space-x-4 space-y-4'>
								<Button variant='link' className='p-0'>
									<Mailbox className='w-4 h-4 mr-2' />
									Email Support
								</Button>
								<Button variant='link' className='p-0'>
									<Phone className='w-4 h-4 mr-2' />
									Phone Support
								</Button>
							</CardContent>
						</TabsContent>

						<TabsContent value='descriptions' className='space-y-4'>
							<CardHeader className='p-0 space-y-4'>
								<CardTitle className='text-xl font-semibold'>Product Description</CardTitle>
								<CardDescription>{product.description}</CardDescription>
							</CardHeader>
						</TabsContent>

						<TabsContent value='specifications' className='space-y-4'>
							<CardHeader className='p-0'>
								<CardTitle className='text-xl font-semibold'>Product Specification</CardTitle>
							</CardHeader>
							<CardContent className='grid grid-cols-2 md:grid-cols-3 gap-4 p-0'>
								{product.specifications.map((spec, index) => (
									<CardHeader className='p-0' key={index}>
										<CardTitle className='text-sm font-semibold text-muted-foreground'>{spec.name}:</CardTitle>
										<CardDescription>{spec.value}</CardDescription>
									</CardHeader>
								))}
							</CardContent>
						</TabsContent>

						<TabsContent value='applications' className='space-y-4'>
							<CardHeader className='p-0'>
								<CardTitle className='text-xl font-semibold'>Product Applications</CardTitle>
								<ul className='list-disc pl-6'>
									{product.applications.map((application, index) => (
										<li key={index}>
											<CardDescription>{application}</CardDescription>
										</li>
									))}
								</ul>
							</CardHeader>
						</TabsContent>

						<TabsContent value='support' className='space-y-4'>
							<CardHeader className='p-0'>
								<CardTitle className='text-xl font-semibold mb-4'>Customer Support</CardTitle>
								<CardDescription className='mb-4'>
									Our team of experts is ready to assist you with any questions or concerns you may have about the{' '}
									{product.name}.
								</CardDescription>
							</CardHeader>
							<CardFooter className='flex items-center p-0 space-x-4'>
								<Button variant='link' className='p-0 '>
									<Mailbox className='w-4 h-4 mr-2' />
									Email Support
								</Button>
								<Button variant='link' className='p-0'>
									<Phone className='w-4 h-4 mr-2' />
									Phone Support
								</Button>
							</CardFooter>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>

			<div className='mt-4'>
				{relatedProducts && relatedProducts.length > 0 ? (
					<>
						<h2 className='text-2xl font-bold mb-6'>Related Products</h2>
						<Carousel opts={{ align: 'start' }} className='w-full'>
							<CarouselContent>
								{relatedProducts.map((relatedProduct) => (
									<CarouselItem key={relatedProduct.id} className='md:basis-1/3 lg:basis-1/4'>
										<Link to='/products/$productId' params={{ productId: relatedProduct.id.toString() }}>
											<Card className='max-w-sm mx-auto bg-muted p-6 rounded-lg shadow-md overflow-hidden space-y-4'>
												<CardHeader className='p-0 relative overflow-hidden rounded-lg flex justify-center'>
													<img
														src={relatedProduct.mainImage}
														alt={relatedProduct.name}
														width={400}
														height={300}
														className='w-48 h-48 object-contain bg-transparent'
													/>
													<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
												</CardHeader>
												<CardContent className='p-0 space-y-2'>
													<CardTitle className='text-lg'>{relatedProduct.name}</CardTitle>
													<CardDescription>{relatedProduct.summarization}</CardDescription>
												</CardContent>
												<CardFooter className='p-0 flex items-center justify-start gap-2'>
													<Link to='/products/$productId' params={{ productId: relatedProduct.id.toString() }}>
														<Button variant='link' className='p-0 transition-colors duration-150 hover:text-amber-500'>
															Learn More →
														</Button>
													</Link>
												</CardFooter>
											</Card>
										</Link>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</>
				) : (
					<Card>
						<CardHeader>
							<CardTitle>No Related Products</CardTitle>
							<CardDescription>There are currently no related products for this item.</CardDescription>
						</CardHeader>
						<CardFooter>
							<Link to='/products'>
								<Button
									variant='outline'
									className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
								>
									Browse All Products
								</Button>
							</Link>
						</CardFooter>
					</Card>
				)}
			</div>
		</div>
	)
}

export default ProductDetail
