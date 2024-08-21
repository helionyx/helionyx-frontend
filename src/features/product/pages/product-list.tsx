import SearchPopover from '@/components/SearchPopover'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CategoryKey } from '@/stores/product-slice'
import { useStore } from '@/stores/store'
import { Product } from '@/types'
import { formatEclipse } from '@/utils'
import { Link, useSearch } from '@tanstack/react-router'
import { Filter, Loader2 } from 'lucide-react'
import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useShallow } from 'zustand/react/shallow'
import { useFilteredProductsQuery } from '../api/queries.api'
import FilterContent from '../components/filter-content'
import ProductListPendingCard from '../components/product-list-pending-card'

const ProductList: React.FC = () => {
	const { category, search } = useSearch({ from: '/products/_product-layout/' })

	const { t } = useTranslation()

	const { selectedFilters, isFilterSheetOpen, setIsFilterSheetOpen, initializeFilters } = useStore(
		useShallow((state) => ({
			selectedFilters: state.selectedFilters,
			isFilterSheetOpen: state.isFilterSheetOpen,
			setIsFilterSheetOpen: state.setIsFilterSheetOpen,
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

	const renderProducts = useMemo(() => {
		if (isPending) {
			return Array(6)
				.fill(null)
				.map((_, idx) => <ProductListPendingCard key={idx} />)
		}

		if (allProducts.length === 0) {
			return (
				<div className='col-span-full text-center py-8'>
					<p>No products found matching your criteria.</p>
				</div>
			)
		}

		return allProducts.map((product: Product) => (
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
		))
	}, [isPending, allProducts, t])

	return (
		<div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8'>
			<div className='hidden md:block bg-gray-100 p-6 rounded-lg'>
				<FilterContent />
			</div>
			<div>
				<div className='flex items-center justify-end gap-4 mb-4 md:hidden'>
					<SearchPopover />
					<Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
						<SheetTrigger asChild>
							<Button variant='outline' className='md:hidden'>
								<Filter className='mr-2 h-4 w-4' />
								<span className='hidden sm:inline'>Filters</span>
							</Button>
						</SheetTrigger>
						<SheetContent side='left' className='w-[300px] sm:w-[400px]'>
							<FilterContent />
						</SheetContent>
					</Sheet>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>{renderProducts}</div>
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
									<span>Loading More...</span>
								</div>
							) : (
								<span>Load More</span>
							)}
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductList
