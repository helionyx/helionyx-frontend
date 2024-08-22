import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import ProductListPendingCard from './product-list-pending-card'

const FilterSkeleton: React.FC = () => {
	return (
		<>
			<div className='flex justify-between items-center mb-4'>
				<Skeleton className='h-8 w-2/4 bg-gray-300' />
				<Skeleton className='h-8 w-1/4 bg-gray-300' />
			</div>
			<Accordion type='multiple' defaultValue={['category', 'power', 'wavelength']}>
				{['category', 'power', 'wavelength'].map((item) => (
					<AccordionItem key={item} value={item}>
						<AccordionTrigger className='text-lg font-medium capitalize'>
							<Skeleton className='h-6 w-1/2 bg-gray-300 rounded' />
						</AccordionTrigger>
						<AccordionContent>
							<div className='grid gap-2'>
								<div className='space-y-2'>
									{[...Array(4)].map((_, j) => (
										<div key={j} className='flex items-center space-x-2'>
											<Skeleton className='h-4 w-4 bg-gray-300 rounded' />
											<Skeleton className='h-4 w-2/3 bg-gray-300 rounded' />
										</div>
									))}
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</>
	)
}

const ProductListPending: React.FC = () => {
	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='flex items-center justify-end gap-4 mb-4 md:hidden'>
				<Skeleton className='h-10 w-32 bg-gray-200' />
				<Skeleton className='h-10 w-24 bg-gray-200' />
			</div>

			<div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8'>
				<div className='hidden md:block bg-muted p-6 rounded-lg'>
					<FilterSkeleton />
				</div>
				<div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{[...Array(6)].map((_, i) => (
							<ProductListPendingCard key={i} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductListPending
