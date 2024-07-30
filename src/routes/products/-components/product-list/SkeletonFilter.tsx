import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonFilter: React.FC = () => {
	return (
		<div className='space-y-6'>
			<div className='flex justify-between items-center'>
				<Skeleton className='h-8 w-1/3 bg-gray-300 rounded' />
				<Skeleton className='h-8 w-1/4 bg-gray-300 rounded' />
			</div>
			{Array(3)
				.fill(0)
				.map((index) => (
					<div key={index} className='space-y-4'>
						<Skeleton className='h-6 w-1/2 bg-gray-300 rounded' />
						<div className='space-y-2'>
							{Array(4)
								.fill(0)
								.map((itemIndex) => (
									<div key={itemIndex} className='flex items-center space-x-2'>
										<Skeleton className='h-4 w-4 bg-gray-300 rounded' />
										<Skeleton className='h-4 w-2/3 bg-gray-300 rounded' />
									</div>
								))}
						</div>
						<Separator />
					</div>
				))}
		</div>
	)
}

export default SkeletonFilter
