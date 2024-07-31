import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const RelatedProductPending: React.FC = () => {
	return (
		<div className='mt-8'>
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
				<CarouselPrevious className='hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2' />
				<CarouselNext className='hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2' />
			</Carousel>
		</div>
	)
}

export default RelatedProductPending
