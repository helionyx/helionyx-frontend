import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { useCategoriesQuery, usePowersQuery, useWaveLengthsQuery } from '@/routes/products/-api/queries.api'
import { ProductFilters } from '@/routes/products/-types/product'
import { useStore } from '@/stores/store'
import { useNavigate } from '@tanstack/react-router'
import React, { useCallback, useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'

const FilterContent: React.FC = React.memo(() => {
	const navigate = useNavigate()

	const { selectedFilters, setSelectedFilters, setSearchTerm, updateFilter } = useStore(
		useShallow((state) => ({
			selectedFilters: state.selectedFilters,
			setSelectedFilters: state.setSelectedFilters,
			setSearchTerm: state.setSearchTerm,
			updateFilter: state.updateFilter
		}))
	)

	const { data: categories, isPending: isCategoriesPending } = useCategoriesQuery()
	const { data: powers, isPending: isPowersPending } = usePowersQuery()
	const { data: wavelengths, isPending: isWavelengthsPending } = useWaveLengthsQuery()

	const handleFilterChange = useCallback(
		(type: keyof ProductFilters, value: string) => {
			updateFilter(type, value)
		},
		[updateFilter]
	)

	const resetFilters = useCallback(() => {
		setSelectedFilters({ category: [], power: [], wavelength: [] })
		setSearchTerm('')
	}, [setSearchTerm, setSelectedFilters])

	const handleResetFilters = useCallback(() => {
		resetFilters()
		navigate({
			search: (prev) => ({
				search: prev.search
			}),
			replace: true
		})
	}, [resetFilters, navigate])

	const renderFilterOptions = useCallback(
		(data: string[] | undefined, isPending: boolean, type: keyof ProductFilters) => {
			if (isPending) {
				return (
					<div className='space-y-2'>
						{Array(4)
							.fill(null)
							.map((_, index) => (
								<div key={`skeleton-${type}-${index}`} className='flex items-center space-x-2'>
									<Skeleton className='h-4 w-4 bg-gray-300 rounded' />
									<Skeleton className='h-4 w-2/3 bg-gray-300 rounded' />
								</div>
							))}
					</div>
				)
			}

			return ['All', ...(data || [])].map((value) => (
				<Label key={`${type}-${value}`} className='flex items-center gap-2'>
					<Checkbox
						checked={value === 'All' ? selectedFilters[type].length === 0 : selectedFilters[type].includes(value)}
						onCheckedChange={() => handleFilterChange(type, value)}
					/>
					{value}
				</Label>
			))
		},
		[handleFilterChange, selectedFilters]
	)

	return useMemo(
		() => (
			<>
				<div className='flex justify-between items-center mb-4'>
					<h2 className='text-2xl font-bold'>Filters</h2>
					<Button onClick={handleResetFilters} variant='outline' size='sm'>
						Reset Filters
					</Button>
				</div>
				<Accordion type='multiple' defaultValue={['category', 'power', 'wavelength']}>
					<AccordionItem value='category'>
						<AccordionTrigger className='text-lg font-medium capitalize'>Category</AccordionTrigger>
						<AccordionContent>
							<div className='grid gap-2'>{renderFilterOptions(categories, isCategoriesPending, 'category')}</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='power'>
						<AccordionTrigger className='text-lg font-medium capitalize'>Power</AccordionTrigger>
						<AccordionContent>
							<div className='grid gap-2'>{renderFilterOptions(powers, isPowersPending, 'power')}</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='wavelength'>
						<AccordionTrigger className='text-lg font-medium capitalize'>Wavelength</AccordionTrigger>
						<AccordionContent>
							<div className='grid gap-2'>{renderFilterOptions(wavelengths, isWavelengthsPending, 'wavelength')}</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</>
		),
		[
			handleResetFilters,
			isCategoriesPending,
			categories,
			isPowersPending,
			powers,
			isWavelengthsPending,
			wavelengths,
			renderFilterOptions
		]
	)
})

FilterContent.displayName = 'FilterContent'

export default FilterContent
