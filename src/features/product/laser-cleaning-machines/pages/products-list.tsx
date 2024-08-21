import { useProductsRelatedSubcategory } from '@/api/hooks.api'
import FilterSection from '@/components/filter-section'
import PaginationSection from '@/components/pagination-section'
import RenderProductsCard from '@/components/render-products-card'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const subCategories = ['HCL Laser Cleaning Machine']

const LaserCleaningMachinesList: React.FC = () => {
	const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 6

	const { data, isPending } = useProductsRelatedSubcategory({
		category: 'Laser Cleaning Machines',
		subCategory: selectedSubCategories,
		page: currentPage,
		pageSize
	})

	const { t } = useTranslation()

	const handleSubCategoryChange = (subCategory: string) => {
		setSelectedSubCategories((prev) =>
			prev.includes(subCategory) ? prev.filter((sc) => sc !== subCategory) : [...prev, subCategory]
		)
		setCurrentPage(1)
	}

	const resetFilters = () => {
		setSelectedSubCategories([])
		setCurrentPage(1)
	}

	const totalPages = data?.totalPages || 1

	return (
		<>
			<div className='p-0 space-y-2'>
				<h1 className='text-4xl font-bold text-amber-500'>{t('laserCleaning.title')}</h1>
				<p className='text-muted-foreground'>{t('laserCleaning.description')}</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8'>
				<FilterSection
					title='Product Type'
					subCategories={subCategories}
					selectedSubCategories={selectedSubCategories}
					onSubCategoryChange={handleSubCategoryChange}
					onResetFilters={resetFilters}
				/>
				<div className='space-y-12'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[600px] auto-rows-fr'>
						<RenderProductsCard
							isPending={isPending}
							products={data?.products}
							slug='/products/laser-cleaning-machines'
						/>
					</div>
					<PaginationSection currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
				</div>
			</div>
			<div className='p-0 space-y-8'>
				<h1 className='text-4xl font-bold text-amber-500'>{t('laserCleaning.advantages.title')}</h1>
				<Card className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{t('laserCleaning.advantages.nonAbrasive.name')}</CardTitle>
					<CardDescription>{t('laserCleaning.advantages.nonAbrasive.description')}</CardDescription>
				</Card>
				<Card className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{t('laserCleaning.advantages.precision.name')}</CardTitle>
					<CardDescription>{t('laserCleaning.advantages.precision.description')}</CardDescription>
				</Card>
				<Card className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{t('laserCleaning.advantages.ecoFriendly.name')}</CardTitle>
					<CardDescription>{t('laserCleaning.advantages.ecoFriendly.description')}</CardDescription>
				</Card>
				<Card className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{t('laserCleaning.advantages.costEffective.name')}</CardTitle>
					<CardDescription>{t('laserCleaning.advantages.costEffective.description')}</CardDescription>
				</Card>
			</div>
		</>
	)
}

export default LaserCleaningMachinesList
