import { useProductsRelatedSubcategory } from '@/api/hooks.api'
import FilterSection from '@/components/filter-section'
import PaginationSection from '@/components/pagination-section'
import RenderProductsCard from '@/components/render-products-card'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const subCategories = ['Laser Metal Cutting Machine']

const LaserCuttingMachinesList: React.FC = () => {
	const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 6

	const { data, isPending } = useProductsRelatedSubcategory({
		category: 'Laser Cutting Machines',
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
				<h1 className='text-4xl font-bold text-amber-500'>{t('laserCutting.title')}</h1>
				<p className='text-muted-foreground'>{t('laserCutting.description')}</p>
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
							slug='/products/laser-cutting-machines'
						/>
					</div>
					<PaginationSection currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
				</div>
			</div>
			<div className='p-0 space-y-8'>
				<h1 className='text-4xl font-bold text-amber-500'>{t('laserCutting.advantages.title')}</h1>
				<Card className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{t('laserCutting.advantages.highPrecision.name')}</CardTitle>
					<CardDescription>{t('laserCutting.advantages.highPrecision.description')}</CardDescription>
				</Card>
				<Card className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{t('laserCutting.advantages.materialVersatility.name')}</CardTitle>
					<CardDescription>{t('laserCutting.advantages.materialVersatility.description')}</CardDescription>
				</Card>
				<Card className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{t('laserCutting.advantages.highSpeed.name')}</CardTitle>
					<CardDescription>{t('laserCutting.advantages.highSpeed.description')}</CardDescription>
				</Card>
				<Card className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{t('laserCutting.advantages.automationCapability.name')}</CardTitle>
					<CardDescription>{t('laserCutting.advantages.automationCapability.description')}</CardDescription>
				</Card>
			</div>
		</>
	)
}

export default LaserCuttingMachinesList
