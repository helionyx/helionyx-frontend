import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { useCategoriesQuery, usePowersQuery, useWaveLengthsQuery } from '@/routes/products/-api/queries.api'
import { ProductFilters } from '@/routes/products/-types/product'
import React, { useCallback, useMemo } from 'react'

interface FilterContentProps {
	selectedFilters: ProductFilters
	setSelectedFilters: React.Dispatch<React.SetStateAction<ProductFilters>>
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const FilterContent: React.FC<FilterContentProps> = React.memo(
	({ selectedFilters, setSelectedFilters, setSearchTerm }) => {
		const { data: categories, isLoading: isCategoriesLoading } = useCategoriesQuery()
		const { data: powers, isLoading: isPowersLoading } = usePowersQuery()
		const { data: wavelengths, isLoading: isWavelengthsLoading } = useWaveLengthsQuery()

		const handleFilterChange = useCallback(
			(type: keyof ProductFilters, value: string) => {
				setSelectedFilters((prev) => ({
					...prev,
					[type]:
						value === 'All'
							? []
							: prev[type]?.includes(value)
								? prev[type]?.filter((item: string) => item !== value)
								: [...prev[type], value]
				}))
			},
			[setSelectedFilters]
		)

		const resetFilters = useCallback(() => {
			setSelectedFilters({ category: [], power: [], wavelength: [] })
			setSearchTerm('')
		}, [setSearchTerm, setSelectedFilters])

		return useMemo(
			() => (
				<>
					<div className='flex justify-between items-center mb-4'>
						<h2 className='text-2xl font-bold'>Filters</h2>
						<Button onClick={resetFilters} variant='outline' size='sm'>
							Reset Filters
						</Button>
					</div>
					<Accordion type='multiple' defaultValue={['category', 'power', 'wavelength']}>
						<AccordionItem value='category'>
							<AccordionTrigger className='text-lg font-medium capitalize'>Category</AccordionTrigger>
							<AccordionContent>
								<div className='grid gap-2'>
									{isCategoriesLoading ? (
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
									) : (
										['All', ...(categories || [])].map((value) => (
											<Label key={value} className='flex items-center gap-2'>
												<Checkbox
													checked={
														value === 'All'
															? selectedFilters.category.length === 0
															: selectedFilters.category.includes(value)
													}
													onCheckedChange={() => handleFilterChange('category', value)}
												/>
												{value}
											</Label>
										))
									)}
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='power'>
							<AccordionTrigger className='text-lg font-medium capitalize'>Power</AccordionTrigger>
							<AccordionContent>
								<div className='grid gap-2'>
									{isPowersLoading ? (
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
									) : (
										['All', ...(powers || [])].map((value) => (
											<Label key={value} className='flex items-center gap-2'>
												<Checkbox
													checked={
														value === 'All' ? selectedFilters.power.length === 0 : selectedFilters.power.includes(value)
													}
													onCheckedChange={() => handleFilterChange('power', value)}
												/>
												{value}
											</Label>
										))
									)}
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='wavelength'>
							<AccordionTrigger className='text-lg font-medium capitalize'>Wavelength</AccordionTrigger>
							<AccordionContent>
								<div className='grid gap-2'>
									{isWavelengthsLoading ? (
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
									) : (
										['All', ...(wavelengths || [])].map((value) => (
											<Label key={value} className='flex items-center gap-2'>
												<Checkbox
													checked={
														value === 'All'
															? selectedFilters.wavelength.length === 0
															: selectedFilters.wavelength.includes(value)
													}
													onCheckedChange={() => handleFilterChange('wavelength', value)}
												/>
												{value}
											</Label>
										))
									)}
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</>
			),
			[
				resetFilters,
				isCategoriesLoading,
				categories,
				isPowersLoading,
				powers,
				isWavelengthsLoading,
				wavelengths,
				selectedFilters,
				handleFilterChange
			]
		)
	}
)

FilterContent.displayName = 'FilterContent'

export default FilterContent
