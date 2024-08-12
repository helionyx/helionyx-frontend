import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { Product } from '@/types'
import { Link, useParams } from '@tanstack/react-router'
import { Mailbox, Phone, ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useModelsQuery, useProductId, useRelatedProductsQuery } from '../api/queries.api'
import ProductDetailPending from '../components/product-detail-pending'
import ProductSpecificationTable from '../components/product-specification-table'
import RelatedProductPending from '../components/relate-product-pending'

const ProductDetail: React.FC = () => {
	const { productId } = useParams({ from: '/products/_product-layout/$productId' })
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: models, isPending: isModelsPending } = useModelsQuery(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const [currentImage, setCurrentImage] = useState(0)
	const [carouselApi, setCarouselApi] = useState<CarouselApi>()

	useEffect(() => {
		if (carouselApi) {
			carouselApi.scrollTo(currentImage)

			const onSelect = () => {
				setCurrentImage(carouselApi.selectedScrollSnap())
			}

			carouselApi.on('select', onSelect)

			return () => {
				carouselApi.off('select', onSelect)
			}
		}
	}, [carouselApi, currentImage])

	const handleClickCarousel = (index: number) => {
		setCurrentImage(index)
		carouselApi?.scrollTo(index)
	}

	if (isProductPending || isModelsPending) return <ProductDetailPending />
	if (!product || !models) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	return (
		<>
			<Card className='mb-8'>
				<CardContent className='p-6'>
					<div className='flex flex-col lg:flex-row gap-8'>
						{/* Product images section */}
						<div className='lg:w-1/2'>
							<Carousel className='w-full max-w-xl mx-auto' setApi={setCarouselApi}>
								<CarouselContent>
									{[product.imageUrl, ...product.additionalImages].map((image, index) => (
										<CarouselItem key={index}>
											<img
												src={image}
												alt={`${product.name} ${index + 1}`}
												className='w-full h-[300px] object-contain rounded-lg'
											/>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
							<div className='flex justify-start mt-4 overflow-x-auto pb-2'>
								{[product.imageUrl, ...product.additionalImages].map((image, index) => (
									<img
										key={index}
										src={image}
										alt={`Thumbnail ${index + 1}`}
										className={`w-16 h-16 object-cover rounded-md mr-2 flex-shrink-0 cursor-pointer ${
											currentImage === index ? 'border-2 border-amber-500' : ''
										}`}
										onClick={() => handleClickCarousel(index)}
									/>
								))}
							</div>
						</div>

						{/* Product details section */}
						<div className='lg:w-1/2'>
							<CardTitle className='text-2xl md:text-3xl font-bold mb-4'>{product.name}</CardTitle>
							<CardDescription className='text-lg mb-6'>{product.description}</CardDescription>
							<div className='mb-6'>
								<CardTitle className='text-xl font-semibold mb-3'>Key Features:</CardTitle>
								<ul className='space-y-2'>
									{product.features.map((feature, index) => (
										<li key={index} className='flex items-start'>
											<Badge className='mr-2 mt-1 bg-green-500 flex-shrink-0'>{index + 1}</Badge>
											<CardDescription>{feature}</CardDescription>
										</li>
									))}
								</ul>
							</div>
							<Button className='w-full text-xl bg-amber-500 hover:bg-amber-600 transition-colors'>
								<ShoppingCart className='w-6 h-6 mr-2' />
								Get a Quote
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className='mb-8 border-x-0'>
				<CardContent className='p-6'>
					<div className='space-y-8'>
						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Description</CardTitle>
							<CardDescription>{product.description}</CardDescription>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Specifications</CardTitle>
							<ProductSpecificationTable product={product} models={models} />
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Customer Support</CardTitle>
							<CardDescription className='mb-4'>
								Our team of experts is ready to assist you with any questions or concerns you may have about the{' '}
								{product.name}.
							</CardDescription>
							<div className='flex flex-wrap gap-4'>
								<Button variant='outline' className='flex items-center'>
									<Mailbox className='w-5 h-5 mr-2' />
									Email Support
								</Button>
								<Button variant='outline' className='flex items-center'>
									<Phone className='w-5 h-5 mr-2' />
									Phone Support
								</Button>
							</div>
						</section>
					</div>
				</CardContent>
			</Card>

			{/* Related products section */}
			<div className='mt-8'>
				{isRelatedPending ? (
					<RelatedProductPending />
				) : !relatedProducts || relatedProducts.length === 0 ? (
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
				) : (
					<>
						<h2 className='text-2xl md:text-3xl font-bold mb-6'>Related Products</h2>
						<Carousel className='w-full relative' opts={{ align: 'start' }}>
							<CarouselContent>
								{relatedProducts.map((relatedProduct: Product) => (
									<CarouselItem key={relatedProduct.id} className='w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4'>
										<Link to='/products/$productId' params={{ productId: relatedProduct.id }}>
											<Card className='max-w-sm mx-auto bg-muted p-4 rounded-lg shadow-md overflow-hidden space-y-4 h-full hover:border-amber-500 hover:shadow-2xl transition-shadow'>
												<CardHeader className='p-4 relative overflow-hidden rounded-lg flex justify-center'>
													<img
														src={relatedProduct.imageUrl}
														alt={relatedProduct.name}
														className='w-full h-48 object-contain rounded-t-lg bg-transparent'
													/>
													<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
												</CardHeader>
												<CardContent className='p-4'>
													<CardTitle className='text-lg mb-2'>{relatedProduct.name}</CardTitle>
													<CardDescription className='text-sm'>{relatedProduct.description}</CardDescription>
												</CardContent>
												<CardFooter className='p-4'>
													<Button
														variant='outline'
														className='w-full hover:bg-amber-100 hover:text-amber-500 hover:border-amber-500 transition-colors'
													>
														Learn More
													</Button>
												</CardFooter>
											</Card>
										</Link>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</>
				)}
			</div>
		</>
	)
}

export default ProductDetail
