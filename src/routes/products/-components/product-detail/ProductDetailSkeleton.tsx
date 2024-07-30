import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'

const ProductDetailSkeleton: React.FC = () => {
	return (
		<div className='container mx-auto px-4 py-8'>
			<Card>
				<CardContent className='p-6'>
					<div className='md:flex'>
						<div className='md:w-1/2 p-6'>
							<Skeleton className='relative w-full h-[300px] mb-4 bg-gray-300 rounded-lg'>
								<Skeleton className='absolute inset-0 skeleton-shine' />
							</Skeleton>
							<div className='flex mt-4 space-x-2'>
								{Array(3)
									.fill(0)
									.map((_, index) => (
										<Skeleton key={index} className='relative w-1/3 h-24 bg-gray-300 rounded-md'>
											<Skeleton className='absolute inset-0 skeleton-shine' />
										</Skeleton>
									))}
							</div>
						</div>
						<div className='md:w-1/2 p-6'>
							<Skeleton className='h-10 w-3/4 mb-8 bg-gray-300 rounded' />
							<Skeleton className='h-4 w-full mb-8 bg-gray-300 rounded' />
							<div className='space-y-8'>
								<Skeleton className='h-6 w-1/2 mb-2 bg-gray-300 rounded' />
								{Array(3)
									.fill(0)
									.map((_, index) => (
										<div key={index} className='flex items-center mb-2'>
											<Skeleton className='h-6 w-6 mr-2 bg-gray-300 rounded-full' />
											<Skeleton className='h-4 w-3/4 bg-gray-300 rounded' />
										</div>
									))}
							</div>
							<Skeleton className='h-12 w-full mt-8 bg-gray-300 rounded' />
						</div>
					</div>
				</CardContent>

				<Separator />

				<CardContent className='p-6'>
					<Skeleton className='h-10 w-full mb-4 bg-gray-300 rounded' />
					<Skeleton className='h-48 w-full bg-gray-300 rounded' />
				</CardContent>
			</Card>

			<div className='mt-6'>
				<Skeleton className='h-8 w-1/4 mb-6 bg-gray-300 rounded' />
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{Array(3)
						.fill(0)
						.map((_, index) => (
							<Card key={index}>
								<CardContent className='p-0'>
									<Skeleton className='relative w-full h-48 bg-gray-300 rounded-t-lg'>
										<Skeleton className='absolute inset-0 skeleton-shine' />
									</Skeleton>
								</CardContent>
								<CardHeader>
									<Skeleton className='h-6 w-3/4 mb-2 bg-gray-300 rounded' />
									<Skeleton className='h-4 w-full bg-gray-300 rounded' />
								</CardHeader>
								<CardFooter>
									<Skeleton className='h-4 w-1/4 bg-gray-300 rounded' />
								</CardFooter>
							</Card>
						))}
				</div>
			</div>
		</div>
	)
}

export default ProductDetailSkeleton
