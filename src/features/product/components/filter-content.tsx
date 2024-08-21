import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { useStore } from '@/stores/store'
import { ProductFilters, ProductListQueryParams } from '@/types'
import { useNavigate } from '@tanstack/react-router'
import React, { useCallback, useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useCatalogsQuery } from '../api/queries.api'
import { useTranslation } from 'react-i18next'

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

	const { data: catalogs, isPending: isCatalogsPending } = useCatalogsQuery()

	const { t } = useTranslation()

	const handleFilterChange = useCallback(
		(type: keyof ProductFilters, value: string) => {
			updateFilter(type, value)
		},
		[updateFilter]
	)

	const resetFilters = useCallback(() => {
		setSelectedFilters({ category: [] })
		setSearchTerm('')
	}, [setSearchTerm, setSelectedFilters])

	const handleResetFilters = useCallback(() => {
		resetFilters()
		navigate({
			search: (prev: ProductListQueryParams) => ({
				...prev,
				search: undefined,
				category: undefined
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

			return data?.map((value) => {
				return (
					<Label key={`${type}-${value}`} className='flex items-center gap-2'>
						<Checkbox
							checked={selectedFilters[type].includes(value)}
							onCheckedChange={() => handleFilterChange(type, value)}
						/>
						{t(value)}
					</Label>
				)
			})
		},
		[handleFilterChange, selectedFilters, t]
	)

	return useMemo(
		() => (
			<>
				<div className='flex justify-between items-center mb-4'>
					<h2 className='text-xl font-bold'>Filters</h2>
					<Button
						variant='outline'
						onClick={handleResetFilters}
						size='sm'
						className='text-amber-500 border-amber-500 hover:bg-amber-50'
					>
						Reset Filters
					</Button>
				</div>
				<Accordion type='multiple' defaultValue={['category']}>
					<AccordionItem value='category'>
						<AccordionTrigger className='text-lg font-medium capitalize'>Category</AccordionTrigger>
						<AccordionContent>
							<div className='grid gap-2'>{renderFilterOptions(catalogs?.category, isCatalogsPending, 'category')}</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</>
		),
		[catalogs, isCatalogsPending, handleResetFilters, renderFilterOptions]
	)
})

FilterContent.displayName = 'FilterContent'

export default FilterContent
