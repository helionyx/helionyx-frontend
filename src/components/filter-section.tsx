import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { subCategories } from '@/databases'

interface FilterSectionProps {
	categoryId: string
	selectedSubCategories: string[]
	onSubCategoryChange: (subCategoryId: string) => void
	onResetFilters: () => void
}

const FilterSection: React.FC<FilterSectionProps> = ({
	categoryId,
	selectedSubCategories,
	onSubCategoryChange,
	onResetFilters
}) => {
	const { t } = useTranslation()

	// Filter subcategories for the current category
	const categorySubCategories = subCategories.filter((sc) => sc.categoryId === categoryId)

	return (
		<div className='hidden md:block bg-gray-100 p-6 rounded-lg'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-xl font-bold'>{t('filterSettings.title')}</h2>
				<Button
					variant='outline'
					size='sm'
					className='text-amber-500 border-amber-500 hover:bg-amber-50'
					onClick={onResetFilters}
				>
					<span>{t('filterSettings.btn')}</span>
				</Button>
			</div>
			<Accordion type='multiple' defaultValue={['category']}>
				<AccordionItem value='category'>
					<AccordionTrigger className='text-lg font-medium capitalize'>{t('filterSettings.types')}</AccordionTrigger>
					<AccordionContent>
						<div className='grid gap-2'>
							{categorySubCategories.map((subCategory) => (
								<Label key={subCategory.id} className='flex items-center gap-2'>
									<Checkbox
										checked={selectedSubCategories.includes(subCategory.id)}
										onCheckedChange={() => onSubCategoryChange(subCategory.id)}
									/>
									<span>{t(subCategory.name)}</span>
								</Label>
							))}
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default FilterSection
