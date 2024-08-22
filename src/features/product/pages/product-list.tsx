import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CategoryKey } from '@/stores/product-slice'
import { useStore } from '@/stores/store'
import { Product } from '@/types'
import { formatEclipse } from '@/utils'
import { Link, useSearch } from '@tanstack/react-router'
import { Filter, Loader2 } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useShallow } from 'zustand/react/shallow'
import FilterContent from '../components/filter-content'
import ProductListPendingCard from '../components/product-list-pending-card'
import SearchPopover from '@/components/SearchPopover'
import { useFilteredProductsQuery } from '@/api/hooks.api'

const ProductGridRenderer = React.memo(({ products, isPending }: { products: Product[]; isPending: boolean }) => {
	const { t } = useTranslation()

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{isPending ? (
				<>
					{Array(6)
						.fill(null)
						.map((_, idx) => (
							<ProductListPendingCard key={idx} />
						))}
				</>
			) : products.length === 0 ? (
				<div className='col-span-full text-center py-8'>
					<p>No products found matching your criteria.</p>
				</div>
			) : (
				<>
					{products.map((product: Product) => (
						<Card
							key={product.id}
							className='max-w-sm mx-auto bg-muted p-6 rounded-lg shadow-md overflow-hidden space-y-4 h-full hover:border-amber-500 hover:shadow-lg transition-shadow'
						>
							<CardHeader className='p-0 relative overflow-hidden rounded-lg flex justify-center items-center'>
								<img
									src={product.imageUrl}
									alt={product.nameKey}
									width={400}
									height={300}
									className='w-48 h-48 object-contain bg-transparent'
								/>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
							</CardHeader>
							<CardContent className='p-0 space-y-2'>
								<CardTitle className='text-lg'>{t(product.nameKey)}</CardTitle>
								<CardDescription>{formatEclipse(t(product.descriptionKey))}</CardDescription>
							</CardContent>
							<CardFooter className='p-0 flex items-center justify-end'>
								<Link to={`/products/${product.categoryId}/${product.subCategoryId}/${product.id}`}>
									<Button
										variant='outline'
										className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
									>
										{t('constants.buttons.viewDetails')}
									</Button>
								</Link>
							</CardFooter>
						</Card>
					))}
				</>
			)}
		</div>
	)
})

ProductGridRenderer.displayName = 'ProductsListRenderer'

const ProductList: React.FC = () => {
	const { category, search } = useSearch({ from: '/products/_product-layout/' })
	const { t } = useTranslation()
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	const { selectedFilters, initializeFilters } = useStore(
		useShallow((state) => ({
			selectedFilters: state.selectedFilters,
			initializeFilters: state.initializeFilters
		}))
	)

	useEffect(() => {
		initializeFilters({
			category: category as CategoryKey | null,
			search: search || ''
		})
	}, [category, search, initializeFilters])

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } = useFilteredProductsQuery({
		...selectedFilters,
		search: search || ''
	})

	const allProducts = useMemo(() => data?.pages.flatMap((page) => page.products) || [], [data])

	return (
		<div className='flex flex-col md:flex-row gap-8'>
			{isMobile && (
				<div className='md:hidden space-y-2'>
					<SearchPopover />
					<Button onClick={() => setIsFilterOpen(true)} className='w-full mb-4'>
						<Filter className='mr-2 h-4 w-4' />
						Filters
					</Button>
				</div>
			)}

			{!isMobile && (
				<div className='hidden md:block w-1/4'>
					<FilterContent />
				</div>
			)}

			<div className='flex-1'>
				<ProductGridRenderer products={allProducts} isPending={isPending} />
				{hasNextPage && (
					<div className='mt-8 flex justify-center'>
						<Button
							variant='outline'
							className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
							onClick={() => fetchNextPage()}
							disabled={isFetchingNextPage}
						>
							{isFetchingNextPage ? (
								<div className='flex items-center gap-2'>
									<Loader2 className='h-4 w-4 animate-spin' />
									<span>{t('learnMore')}...</span>
								</div>
							) : (
								<span>{t('learnMore')}</span>
							)}
						</Button>
					</div>
				)}
			</div>

			<div className='block md:hidden'>
				<FilterContent isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
			</div>
		</div>
	)
}

export default ProductList
