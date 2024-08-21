import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { Product } from '@/types'
import { Link } from '@tanstack/react-router'
import React from 'react'
import { useTranslation } from 'react-i18next'

type RelatedProductsProps = {
	isRelatedPending: boolean
	relatedProducts: Product[] | undefined
	slug: string
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ isRelatedPending, relatedProducts, slug }) => {
	const { t } = useTranslation()

	return (
		<>
			{isRelatedPending ? (
				<>
					<Skeleton className='h-10 w-64 mb-6 bg-gray-300' />
					<Carousel className='w-full relative' opts={{ align: 'start' }}>
						<CarouselContent>
							{[...Array(4)].map((_, index) => (
								<CarouselItem key={index} className='w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4'>
									<Card className='max-w-sm mx-auto bg-muted p-4 rounded-lg shadow-md overflow-hidden space-y-4 h-full'>
										<CardHeader className='p-4 relative overflow-hidden rounded-lg flex justify-center'>
											<Skeleton className='relative w-full h-48 bg-gray-300 rounded-t-lg'>
												<Skeleton className='absolute inset-0 skeleton-shine' />
											</Skeleton>
										</CardHeader>
										<CardContent className='p-4'>
											<Skeleton className='h-6 w-3/4 mb-2 bg-gray-300' />
											<Skeleton className='h-4 w-full bg-gray-300' />
											<Skeleton className='h-4 w-5/6 mt-2 bg-gray-300' />
										</CardContent>
										<CardFooter className='p-4'>
											<Skeleton className='h-10 w-full bg-gray-300' />
										</CardFooter>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</>
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
								<span>Browse All Products</span>
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
									<div className='h-full'>
										<Card className='max-w-sm mx-auto bg-muted p-4 rounded-lg shadow-md overflow-hidden space-y-4 h-full hover:border-amber-500 hover:shadow-2xl transition-shadow'>
											<CardHeader className='p-4 relative overflow-hidden rounded-lg flex justify-center'>
												<img
													src={relatedProduct.imageUrl}
													alt={relatedProduct.nameKey}
													className='w-full h-48 object-contain rounded-t-lg bg-transparent'
												/>
												<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
											</CardHeader>
											<CardContent className='p-4'>
												<CardTitle className='text-lg mb-2'>{t(relatedProduct.nameKey)}</CardTitle>
												<CardDescription className='text-sm'>
													{t(relatedProduct.descriptionKey).slice(0, 100)}...
												</CardDescription>
											</CardContent>
											<CardFooter className='p-4'>
												<Link to={`${slug}/${relatedProduct.subCategoryId}/${relatedProduct.id}`}>
													<Button
														variant='outline'
														className='w-full hover:bg-amber-100 hover:text-amber-500 hover:border-amber-500 transition-colors'
													>
														<span>Learn More</span>
													</Button>
												</Link>
											</CardFooter>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</>
			)}
		</>
	)
}

export default RelatedProducts
