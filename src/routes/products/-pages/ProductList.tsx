import SearchPopover from '@/components/SearchPopover'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useFilteredProductsQuery } from '@/routes/products/-api/queries.api'
import FilterContent from '@/routes/products/-components/product-list/FilterContent'
import SkeletonCard from '@/routes/products/-components/product-list/SkeletonCard'
import { CategoryKey } from '@/stores/product-slice'
import { useStore } from '@/stores/store'
import { Link, useSearch } from '@tanstack/react-router'
import { Filter, Loader2 } from 'lucide-react'
import React, { useEffect, useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'

const ProductList: React.FC = () => {
	const { category, search, power, wavelength } = useSearch({ from: '/products/_products-layout/' })

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
			power: power || [],
			wavelength: wavelength || [],
			search: search || ''
		})
	}, [category, power, search, wavelength, initializeFilters])

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } = useFilteredProductsQuery({
		...selectedFilters,
		search: search || ''
	})

	const allProducts = useMemo(() => data?.pages.flatMap((page) => page.products) || [], [data])

	const renderProducts = useMemo(() => {
		if (isPending) {
			return Array(6)
				.fill(null)
				.map((_, idx) => <SkeletonCard key={idx} />)
		}

		return allProducts.map((product) => (
			<Card
				key={product.id}
				className='max-w-sm mx-auto bg-muted p-6 rounded-lg shadow-md overflow-hidden space-y-4 h-full hover:border-amber-500 hover:shadow-lg transition-shadow'
			>
				<CardHeader className='p-0 relative overflow-hidden rounded-lg flex justify-center items-center'>
					<img
						src={product.mainImage}
						alt={product.name}
						width={400}
						height={300}
						className='w-48 h-48 object-contain bg-transparent'
					/>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
				</CardHeader>
				<CardContent className='p-0 space-y-2'>
					<CardTitle className='text-lg'>{product.name}</CardTitle>
					<CardDescription>{product.summarization.slice(0, 50)}...</CardDescription>
				</CardContent>
				<CardFooter className='p-0 flex items-center justify-end gap-2'>
					<Link to='/products/$productId' params={{ productId: product.id.toString() }}>
						<Button
							variant='outline'
							className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
						>
							More Detail
						</Button>
					</Link>
				</CardFooter>
			</Card>
		))
	}, [isPending, allProducts])

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='flex items-center justify-end gap-4 mb-4 md:hidden'>
				<div className='relative'>
					<SearchPopover />
				</div>
				<Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
					<SheetTrigger asChild>
						<Button variant='outline' className='md:hidden'>
							<Filter className='mr-2 h-4 w-4' />
							<p className='hidden sm:block'>Filters</p>
						</Button>
					</SheetTrigger>
					<SheetContent side='left' className='w-[300px] sm:w-[400px]'>
						<SheetHeader className='mb-8'>
							<SheetTitle></SheetTitle>
						</SheetHeader>
						<FilterContent />
					</SheetContent>
				</Sheet>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8'>
				<div className='hidden md:block bg-muted p-6 rounded-lg'>
					<FilterContent />
				</div>
				<div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>{renderProducts}</div>
					{!isPending && allProducts.length === 0 && (
						<div className='col-span-full text-center py-8'>
							<p>No products found matching your criteria.</p>
						</div>
					)}
					{hasNextPage && (
						<div className='mt-8 text-center'>
							<Button
								variant='outline'
								className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
								onClick={() => fetchNextPage()}
								disabled={isFetchingNextPage}
							>
								{isFetchingNextPage ? (
									<div className='flex items-center gap-2'>
										<Loader2 className='h-4 w-4 animate-spin' />
										<p>Load More...</p>
									</div>
								) : (
									<p>Load More</p>
								)}
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductList
