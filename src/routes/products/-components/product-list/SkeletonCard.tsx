import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonCard: React.FC = () => {
	return (
		<Card className='bg-muted p-6 rounded-lg overflow-hidden'>
			<Skeleton className='relative w-full h-48 mb-4 bg-gray-300 rounded-lg'>
				<Skeleton className='absolute inset-0 skeleton-shine' />
			</Skeleton>
			<Skeleton className='h-6 w-3/4 mb-2 bg-gray-300 rounded' />
			<div className='space-y-1'>
				<Skeleton className='h-4 w-full bg-gray-200 rounded' />
				<Skeleton className='h-4 w-full bg-gray-200 rounded' />
				<Skeleton className='h-4 w-3/4 bg-gray-200 rounded' />
			</div>
			<div className='flex justify-end mt-4'>
				<Skeleton className='h-9 w-24 bg-gray-300 rounded' />
			</div>
		</Card>
	)
}

export default SkeletonCard
