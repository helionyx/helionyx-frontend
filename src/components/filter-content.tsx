import { useCatalogsQuery } from '@/api/hooks.api'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { useStore } from '@/stores/store'
import { ProductFilters, ProductListQueryParams } from '@/types'
import { useNavigate } from '@tanstack/react-router'
import { TFunction } from 'i18next'
import { X } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useShallow } from 'zustand/react/shallow'

const FilterOptionsRenderer: React.FC<{
	t: TFunction<'translation', undefined>
	isPending: boolean
	type: keyof ProductFilters
	data: { id: string; name: string }[] | undefined
	selectedFilters: ProductFilters
	handleFilterChange: (type: keyof ProductFilters, value: string) => void
}> = React.memo(({ t, data, isPending, type, selectedFilters, handleFilterChange }) => (
	<div className='grid gap-2'>
		{isPending ? (
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
		) : (
			data?.map(({ id, name }) => (
				<Label key={`${type}-${id}`} className='flex items-center gap-2'>
					<Checkbox checked={selectedFilters[type].includes(id)} onCheckedChange={() => handleFilterChange(type, id)} />
					{t(name)}
				</Label>
			))
		)}
	</div>
))

FilterOptionsRenderer.displayName = 'FilterOptionsRenderer'

const FilterContent: React.FC<{ isOpen?: boolean; onClose?: () => void }> = ({ isOpen, onClose }) => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	const { selectedFilters, setSelectedFilters, setSearchTerm, updateFilter } = useStore(
		useShallow((state) => ({
			selectedFilters: state.selectedFilters,
			setSelectedFilters: state.setSelectedFilters,
			setSearchTerm: state.setSearchTerm,
			updateFilter: state.updateFilter
		}))
	)

	const { data: catalogs, isPending: isCatalogsPending } = useCatalogsQuery()

	const handleFilterChange = useCallback(
		(type: keyof ProductFilters, value: string) => {
			updateFilter(type, value)
		},
		[updateFilter]
	)

	const handleResetFilters = useCallback(() => {
		setSelectedFilters({ category: [] })
		setSearchTerm('')
		navigate({
			search: (prev: ProductListQueryParams) => ({
				...prev,
				search: undefined,
				category: undefined
			}),
			replace: true
		})
	}, [setSelectedFilters, setSearchTerm, navigate])

	const filterContent = (
		<Accordion type='multiple' defaultValue={['category']}>
			<AccordionItem value='category'>
				<AccordionTrigger className='text-lg font-medium capitalize'>Category</AccordionTrigger>
				<AccordionContent>
					<FilterOptionsRenderer
						t={t}
						type='category'
						data={catalogs}
						isPending={isCatalogsPending}
						selectedFilters={selectedFilters}
						handleFilterChange={handleFilterChange}
					/>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)

	if (isMobile) {
		return (
			<Sheet open={isOpen} onOpenChange={onClose}>
				<SheetContent side='left' className='w-full sm:max-w-md p-0'>
					<SheetHeader className='sticky top-0 bg-background z-10 px-4 py-2 border-b'>
						<div className='flex justify-between items-center'>
							<SheetClose asChild>
								<Button variant='ghost' size='icon'>
									<X className='h-4 w-4' />
								</Button>
							</SheetClose>
							<SheetTitle>Filters</SheetTitle>
							<Button variant='ghost' size='sm' onClick={handleResetFilters}>
								Reset
							</Button>
						</div>
						<SheetDescription>Adjust your product filters here.</SheetDescription>
					</SheetHeader>

					<ScrollArea className='h-[calc(100vh-9rem)] px-4 py-6'>{filterContent}</ScrollArea>

					<div className='sticky bottom-0 bg-background border-t p-4'>
						<Button className='w-full' onClick={onClose}>
							Apply Filters
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		)
	}

	return (
		<div className='bg-background p-6 rounded-lg shadow-md'>
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
			{filterContent}
		</div>
	)
}

export default React.memo(FilterContent)
