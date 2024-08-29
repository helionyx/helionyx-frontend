import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const ProductListPendingCard: React.FC = () => {
	return (
		<Card className='bg-muted p-6 rounded-lg overflow-hidden'>
			<CardHeader className='p-0'>
				<Skeleton className='relative w-full h-48 mb-4 bg-gray-300 rounded-lg'>
					<Skeleton className='absolute inset-0 skeleton-shine' />
				</Skeleton>
			</CardHeader>
			<CardContent className='p-0'>
				<Skeleton className='h-6 w-3/4 mb-2 bg-gray-300 rounded' />
				<div className='space-y-1'>
					<Skeleton className='h-4 w-full bg-gray-200 rounded' />
					<Skeleton className='h-4 w-full bg-gray-200 rounded' />
					<Skeleton className='h-4 w-3/4 bg-gray-200 rounded' />
				</div>
			</CardContent>
			<CardFooter className='p-0 mt-4'>
				<Skeleton className='h-9 w-24 bg-gray-300 rounded' />
			</CardFooter>
		</Card>
	)
}

export default ProductListPendingCard
