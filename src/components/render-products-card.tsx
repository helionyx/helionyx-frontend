import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Product } from '@/types'
import { formatEclipse } from '@/utils'
import { Link } from '@tanstack/react-router'
import React from 'react'
import { useTranslation } from 'react-i18next'

type RenderProductsCardProps = {
	isPending: boolean
	products: Product[] | null | undefined
	slug: string
}

const RenderProductsCard: React.FC<RenderProductsCardProps> = React.memo(({ isPending, products, slug }) => {
	const { t } = useTranslation()

	if (isPending)
		return Array(6)
			.fill(null)
			.map((_, idx) => (
				<Card key={idx} className='bg-muted p-6 rounded-lg overflow-hidden'>
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
					<CardFooter className='p-0 mt-4 flex justify-end'>
						<Skeleton className='h-9 w-24 bg-gray-300 rounded' />
					</CardFooter>
				</Card>
			))

	if (!products || products.length === 0) {
		return (
			<div className='col-span-full text-center py-8'>
				<p>No products found matching your criteria.</p>
			</div>
		)
	}

	return (
		<>
			{products.map((product) => (
				<Card
					key={product.id}
					className='bg-muted p-6 rounded-lg shadow-md overflow-hidden space-y-4 min-h-[450px] w-full hover:border-amber-500 hover:shadow-lg transition-shadow flex flex-col justify-between'
				>
					<CardHeader className='p-0 relative overflow-hidden rounded-lg flex justify-center items-center h-48'>
						<img
							src={product.imageUrl}
							width={400}
							height={300}
							className='w-48 h-48 object-contain bg-transparent'
							alt={product.nameKey}
						/>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
					</CardHeader>
					<CardContent className='p-0 mt-2 space-y-4'>
						<CardTitle className='text-lg'>{t(product.nameKey)}</CardTitle>
						<CardDescription>{formatEclipse(t(product.descriptionKey))}</CardDescription>
					</CardContent>
					<CardFooter className='p-0 flex items-center justify-end'>
						<Link to={`${slug}/${product.subCategoryId}/${product.id}`}>
							<Button
								variant='outline'
								className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
							>
								<span>{t('constants.buttons.viewDetails')}</span>
							</Button>
						</Link>
					</CardFooter>
				</Card>
			))}
		</>
	)
})

RenderProductsCard.displayName = 'render-products-list'

export default RenderProductsCard
