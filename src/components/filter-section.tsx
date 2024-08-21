import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface FilterSectionProps {
	title: string
	subCategories: string[]
	selectedSubCategories: string[]
	onSubCategoryChange: (subCategory: string) => void
	onResetFilters: () => void
}

const FilterSection: React.FC<FilterSectionProps> = ({
	title,
	subCategories,
	selectedSubCategories,
	onSubCategoryChange,
	onResetFilters
}) => {
	const { t } = useTranslation()

	return (
		<div className='hidden md:block bg-gray-100 p-6 rounded-lg'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-xl font-bold'>Category</h2>
				<Button
					variant='outline'
					size='sm'
					className='text-amber-500 border-amber-500 hover:bg-amber-50'
					onClick={onResetFilters}
				>
					<span>Reset</span>
				</Button>
			</div>
			<Accordion type='multiple' defaultValue={['category']}>
				<AccordionItem value='category'>
					<AccordionTrigger className='text-lg font-medium capitalize'>{title}</AccordionTrigger>
					<AccordionContent>
						<div className='grid gap-2'>
							{subCategories.map((subCategory) => (
								<Label key={subCategory} className='flex items-center gap-2'>
									<Checkbox
										checked={selectedSubCategories.includes(subCategory)}
										onCheckedChange={() => onSubCategoryChange(subCategory)}
									/>
									<span>{t(subCategory)}</span>
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
