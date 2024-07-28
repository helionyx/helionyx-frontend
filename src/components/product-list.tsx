import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useNavigateAndScroll } from '@/hooks/useNavigateAndScroll'
import { useProducts } from '@/routes/products/-api/queries.api'
import { ProductSearch } from '@/routes/products/route'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { Filter, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

interface ProductFilters {
	category: string[]
	power: string[]
	wavelength: string[]
}

const categoryMap = {
	marking: 'Laser Marking Machines',
	cleaning: 'Laser Cleaning Machines',
	cutting: 'Laser Cutting Machines',
}

interface ProductSearchParam extends ProductSearch {
	search: string
	power: string[]
	wavelength: string[]
}

const skeletonStyles = `
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .skeleton-pulse {
    animation: pulse 1.5s ease-in-out 0.5s infinite;
  }

  .skeleton-shine {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    animation: shine 1.5s infinite;
  }

  @keyframes shine {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`

function SkeletonCard() {
	return (
		<Card className='bg-muted p-6 rounded-lg overflow-hidden'>
			<div className='relative w-full h-48 mb-4 bg-gray-300 rounded-lg skeleton-pulse'>
				<div className='absolute inset-0 skeleton-shine' />
			</div>
			<div className='h-6 w-3/4 mb-2 bg-gray-300 rounded skeleton-pulse' />
			<div className='h-4 w-full mb-4 bg-gray-300 rounded skeleton-pulse' />
			<div className='flex justify-end'>
				<div className='h-9 w-24 bg-gray-300 rounded skeleton-pulse' />
			</div>
		</Card>
	)
}

function SkeletonFilter() {
	return (
		<div className='space-y-6'>
			<div className='flex justify-between items-center'>
				<div className='h-8 w-1/3 bg-gray-300 rounded skeleton-pulse' />
				<div className='h-8 w-1/4 bg-gray-300 rounded skeleton-pulse' />
			</div>
			{[1, 2, 3].map((index) => (
				<div key={index} className='space-y-4'>
					<div className='h-6 w-1/2 bg-gray-300 rounded skeleton-pulse' />
					<div className='space-y-2'>
						{[1, 2, 3, 4].map((itemIndex) => (
							<div key={itemIndex} className='flex items-center space-x-2'>
								<div className='h-4 w-4 bg-gray-300 rounded skeleton-pulse' />
								<div className='h-4 w-2/3 bg-gray-300 rounded skeleton-pulse' />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export function ProductList() {
	const { category: uriCategory, search, power, wavelength } = useSearch({ from: '/products' }) as ProductSearchParam

	const { data: products, isLoading } = useProducts()

	const navigateAndScroll = useNavigateAndScroll()
	const navigate = useNavigate()

	const [searchTerm, setSearchTerm] = useState(search || '')
	const [selectedFilters, setSelectedFilters] = useState<ProductFilters>({
		category: uriCategory ? [categoryMap[uriCategory as keyof typeof categoryMap]] : [],
		power: power || [],
		wavelength: wavelength || [],
	})
	const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false)

	useEffect(() => {
		const newSearch: ProductSearchParam = {
			search: searchTerm,
			category: selectedFilters.category.length ? selectedFilters.category[0] : undefined,
			power: selectedFilters.power,
			wavelength: selectedFilters.wavelength,
		}
		navigate({ search: newSearch, replace: true })
	}, [selectedFilters, searchTerm, navigate])

	const handleFilterChange = (type: keyof ProductFilters, value: string) => {
		setSelectedFilters((prev) => ({
			...prev,
			[type]:
				value === 'All'
					? []
					: prev[type].includes(value)
						? prev[type].filter((item: string) => item !== value)
						: [...prev[type], value],
		}))
	}

	const resetFilters = () => {
		setSelectedFilters({
			category: [],
			power: [],
			wavelength: [],
		})
		setSearchTerm('')
	}

	const removeFilter = (type: keyof ProductFilters, value: string) => {
		setSelectedFilters((prev) => ({
			...prev,
			[type]: prev[type].filter((item: string) => item !== value),
		}))
	}

	const filteredProducts = useMemo(() => {
		if (isLoading) return []
		return products?.filter((product) => {
			const matchesSearch =
				product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.summarization.toLowerCase().includes(searchTerm.toLowerCase())
			const matchesCategory =
				selectedFilters.category.length === 0 || selectedFilters.category.includes(product.category)
			const matchesPower = selectedFilters.power.length === 0 || selectedFilters.power.includes(product.power)
			const matchesWavelength =
				selectedFilters.wavelength.length === 0 || selectedFilters.wavelength.includes(product.wavelength)
			return matchesSearch && matchesCategory && matchesPower && matchesWavelength
		})
	}, [products, selectedFilters, searchTerm, isLoading])

	const uniqueValues = useMemo(() => {
		if (isLoading) return { category: [], power: [], wavelength: [] }
		return {
			category: ['All', ...new Set(products?.map((p) => p.category))],
			power: ['All', ...new Set(products?.map((p) => p.power))],
			wavelength: ['All', ...new Set(products?.map((p) => p.wavelength))],
		}
	}, [products, isLoading])

	const activeFilters = useMemo(() => {
		return Object.entries(selectedFilters).flatMap(([type, values]) =>
			values.map((value: string) => ({ type: type as keyof ProductFilters, value }))
		)
	}, [selectedFilters])

	const FilterContent: React.FC = () => (
		<>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-2xl font-bold'>Filters</h2>
				<Button onClick={resetFilters} variant='outline' size='sm'>
					Reset Filters
				</Button>
			</div>
			<Accordion type='multiple' defaultValue={['category', 'power', 'wavelength']}>
				{(Object.keys(uniqueValues) as Array<keyof typeof uniqueValues>).map((filterType) => (
					<AccordionItem key={filterType} value={filterType}>
						<AccordionTrigger className='text-lg font-medium capitalize'>{filterType}</AccordionTrigger>
						<AccordionContent>
							<div className='grid gap-2'>
								{uniqueValues[filterType].map((value) => (
									<Label key={value} className='flex items-center gap-2'>
										<Checkbox
											checked={
												value === 'All'
													? selectedFilters[filterType].length === 0
													: selectedFilters[filterType].includes(value)
											}
											onCheckedChange={() => handleFilterChange(filterType, value)}
										/>
										{value}
									</Label>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</>
	)

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='flex items-center gap-4 mb-4'>
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
							Filters
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
			{activeFilters.length > 0 && (
				<div className='mb-4 flex flex-wrap gap-2'>
					{activeFilters.map(({ type, value }) => (
						<Badge key={`${type}-${value}`} variant='secondary' className='px-3 py-1'>
							{type}: {value}
							<Button variant='ghost' size='sm' className='ml-2 h-auto p-0' onClick={() => removeFilter(type, value)}>
								<X className='h-3 w-3' />
							</Button>
						</Badge>
					))}
					<Button variant='outline' size='sm' onClick={resetFilters}>
						Clear All
					</Button>
				</div>
			)}
			<div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8'>
				<div className='hidden md:block bg-muted p-6 rounded-lg'>
					{isLoading ? (
						<>
							<style>{skeletonStyles}</style>
							<SkeletonFilter />
						</>
					) : (
						<FilterContent />
					)}
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{isLoading
						? Array(9)
								.fill(0)
								.map((_, idx) => (
									<>
										<style>{skeletonStyles}</style>
										<SkeletonCard key={idx} />
									</>
								))
						: filteredProducts?.map((product) => (
								<Card key={product.id} className='bg-muted p-6 rounded-lg'>
									<div className='relative overflow-hidden rounded-lg'>
										<img
											src={product.mainImage}
											alt={product.name}
											width={400}
											height={300}
											className='w-full h-48 object-cover bg-transparent'
										/>
										<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent' />
									</div>
									<div className='mt-4'>
										<h3 className='text-xl font-bold'>{product.name}</h3>
										<p className='text-muted-foreground'>{product.summarization}</p>
										<div className='flex items-center justify-end mt-4 gap-2'>
											<Button
												variant='outline'
												className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
												onClick={() =>
													navigateAndScroll('/products/$productId', { params: { productId: product.id.toString() } })
												}
											>
												More Detail
											</Button>
										</div>
									</div>
								</Card>
							))}
				</div>
			</div>
		</div>
	)
}
