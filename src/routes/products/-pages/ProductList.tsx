import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useFilteredProductsQuery } from '@/routes/products/-api/queries.api'
import FilterContent from '@/routes/products/-components/product-list/FilterContent'
import SkeletonCard from '@/routes/products/-components/product-list/SkeletonCard'
import { ProductFilters } from '@/routes/products/-types/product'
import { Link, useSearch } from '@tanstack/react-router'
import { Filter, Loader2 } from 'lucide-react'
import React, { useState } from 'react'

const categoryMap = {
	marking: 'Laser Marking Machines',
	cleaning: 'Laser Cleaning Machines',
	cutting: 'Laser Cutting Machines'
}

const ProductList: React.FC = () => {
	const { category: uriCategory, search, power, wavelength } = useSearch({ from: '/products/_products-layout/' })

	const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false)
	const [searchTerm, setSearchTerm] = useState<string>(search || '')
	const [selectedFilters, setSelectedFilters] = useState<ProductFilters>({
		category: uriCategory ? [categoryMap[uriCategory as keyof typeof categoryMap]] : [],
		power: power || [],
		wavelength: wavelength || []
	})

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useFilteredProductsQuery({
		...selectedFilters,
		search: searchTerm
	})

	const allProducts = data?.pages.flatMap((page) => page.products) || []

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='flex items-center gap-4 mb-4 md:hidden'>
				<Input
					type='text'
					placeholder='Search products...'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className='flex-grow'
				/>
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
						<FilterContent
							selectedFilters={selectedFilters}
							setSelectedFilters={setSelectedFilters}
							setSearchTerm={setSearchTerm}
						/>
					</SheetContent>
				</Sheet>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8'>
				<div className='hidden md:block bg-muted p-6 rounded-lg'>
					<FilterContent
						selectedFilters={selectedFilters}
						setSelectedFilters={setSelectedFilters}
						setSearchTerm={setSearchTerm}
					/>
				</div>
				<div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						<div className='hidden md:block md:col-span-full'>
							<Input
								type='text'
								placeholder='Search products...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='flex-grow'
							/>
						</div>
						{isLoading
							? Array(6)
									.fill(0)
									.map((_, idx) => <SkeletonCard key={idx} />)
							: allProducts.map((product) => (
									<Link key={product.id} to='/products/$productId' params={{ productId: product.id.toString() }}>
										<Card className='max-w-sm mx-auto bg-muted p-6 rounded-lg shadow-md overflow-hidden space-y-4'>
											<CardHeader className='p-0 relative overflow-hidden rounded-lg flex justify-center'>
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
												<CardDescription>{product.summarization}</CardDescription>
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
									</Link>
								))}
					</div>
					{!isLoading && allProducts.length === 0 && (
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
