import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { Product } from '@/types'
import { Link } from '@tanstack/react-router'
import React from 'react'
import { useTranslation } from 'react-i18next'

const RelatedProductPending: React.FC = () => {
	return (
		<>
			<Skeleton className='h-10 w-64 mb-6 bg-gray-300' /> {/* Title skeleton */}
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
	)
}

const NoRelatedProducts = () => {
	const { t } = useTranslation()

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t('noRelatedProducts.title')}</CardTitle>
				<CardDescription>{t('noRelatedProducts.desc')}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Link to='/products'>
					<Button
						variant='outline'
						className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
					>
						<span>{t('noRelatedProducts.viewDetails')}</span>
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}

type RelatedProductsProps = {
	isRelatedPending: boolean
	relatedProducts: Product[] | undefined
	slug: string
	className?: string
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ isRelatedPending, relatedProducts, slug, className }) => {
	const { t } = useTranslation()

	return (
		<div className={className ? className : ''}>
			{isRelatedPending ? (
				<RelatedProductPending />
			) : !relatedProducts || relatedProducts.length === 0 ? (
				<NoRelatedProducts />
			) : (
				<>
					<h2 className='text-2xl md:text-3xl font-bold mb-6'>{t('relatedProducts.title')}</h2>
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
												<Button
													asChild
													variant='outline'
													className='w-full hover:bg-amber-100 hover:text-amber-500 hover:border-amber-500 transition-colors'
												>
													<Link to={`${slug}/${relatedProduct.subCategoryId}/${relatedProduct.id}`}>
														<span>{t('relatedProducts.viewDetails')}</span>
													</Link>
												</Button>
											</CardFooter>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</>
			)}
		</div>
	)
}

export default RelatedProducts
