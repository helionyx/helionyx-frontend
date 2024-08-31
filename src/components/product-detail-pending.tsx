import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const sections = [
	'Product Overview',
	'Product Description',
	'Product Specifications',
	'Product Applications',
	'Customer Support'
]

const ProductImagesPending: React.FC = () => {
	return (
		<div className='lg:w-1/2'>
			<Skeleton className='relative w-full h-[300px] rounded-lg mb-4 bg-gray-300'>
				<Skeleton className='absolute inset-0 skeleton-shine' />
			</Skeleton>
			<div className='flex gap-2 mt-4'>
				{Array(4)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className='relative w-16 h-16 rounded-md bg-gray-300'>
							<Skeleton className='absolute inset-0 skeleton-shine' />
						</Skeleton>
					))}
			</div>
		</div>
	)
}

const ProductDetailsPending: React.FC = () => {
	return (
		<div className='lg:w-1/2'>
			<Skeleton className='h-8 w-3/4 mb-4 bg-gray-200' />
			<Skeleton className='h-4 w-1/4 mb-4 bg-gray-200' />
			<Skeleton className='h-4 w-full mb-6 bg-gray-200' />
			<Skeleton className='h-6 w-1/2 mb-3 bg-gray-200' />
			{Array(3)
				.fill(0)
				.map((_, index) => (
					<div key={index} className='flex items-start mb-2'>
						<Skeleton className='w-6 h-6 rounded-full mr-2 bg-gray-200' />
						<Skeleton className='h-4 w-full bg-gray-200' />
					</div>
				))}
			<Skeleton className='h-12 w-full mt-6 bg-gray-200' />
		</div>
	)
}

const SpecificationsPending: React.FC = () => (
	<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
		{Array(6)
			.fill(0)
			.map((_, index) => (
				<div key={index} className='bg-gray-100 p-4 rounded-lg'>
					<Skeleton className='h-4 w-3/4 mb-2 bg-gray-200' />
					<Skeleton className='h-6 w-full bg-gray-200' />
				</div>
			))}
	</div>
)

const CustomerSupportPending: React.FC = () => (
	<>
		<Skeleton className='h-4 w-full mb-4 bg-gray-200' />
		<div className='flex flex-wrap gap-4 bg-gray-200'>
			<Skeleton className='h-10 w-32 bg-gray-200' />
			<Skeleton className='h-10 w-32 bg-gray-200' />
		</div>
	</>
)

const DefaultSectionPending: React.FC = () => (
	<>
		<Skeleton className='h-4 w-full mb-2 bg-gray-200' />
		<Skeleton className='h-4 w-full mb-2 bg-gray-200' />
		<Skeleton className='h-4 w-3/4 bg-gray-200' />
	</>
)

const ProductSectionsPending: React.FC = () => {
	return (
		<div className='space-y-8'>
			{sections.map((section, index) => (
				<React.Fragment key={section}>
					<section>
						<Skeleton className='h-8 w-1/2 mb-4 bg-gray-200' />
						{section === 'Product Specifications' ? (
							<SpecificationsPending />
						) : section === 'Customer Support' ? (
							<CustomerSupportPending />
						) : (
							<DefaultSectionPending />
						)}
					</section>
					{index < sections.length - 1 && <Separator />}
				</React.Fragment>
			))}
		</div>
	)
}

const ProductDetailPending: React.FC = () => {
	return (
		<>
			<Card className='mb-8 bg-muted'>
				<CardContent className='p-6'>
					<div className='flex flex-col lg:flex-row gap-8'>
						<ProductImagesPending />
						<ProductDetailsPending />
					</div>
				</CardContent>
			</Card>

			<Card className='mb-8 bg-muted'>
				<CardContent className='p-6'>
					<ProductSectionsPending />
				</CardContent>
			</Card>
		</>
	)
}

export default ProductDetailPending
