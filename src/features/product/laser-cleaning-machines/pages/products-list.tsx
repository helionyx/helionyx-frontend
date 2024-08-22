import { useProductsRelatedSubcategory } from '@/api/hooks.api'
import AdvantageCard from '@/components/advantage-card'
import FilterSection from '@/components/filter-section'
import PaginationSection from '@/components/pagination-section'
import RenderProductsCard from '@/components/render-products-card'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LaserCleaningMachinesList: React.FC = () => {
	const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 6

	const categoryId = 'laser-cleaning-machines'

	const { data, isPending } = useProductsRelatedSubcategory({
		category: categoryId,
		subCategory: selectedSubCategories,
		page: currentPage,
		pageSize
	})

	const { t } = useTranslation()

	const handleSubCategoryChange = (subCategoryId: string) => {
		setSelectedSubCategories((prev) =>
			prev.includes(subCategoryId) ? prev.filter((sc) => sc !== subCategoryId) : [...prev, subCategoryId]
		)
		setCurrentPage(1)
	}

	const resetFilters = () => {
		setSelectedSubCategories([])
		setCurrentPage(1)
	}

	const totalPages = data?.totalPages || 1

	const advantages = t('laserCutting.advantages', { returnObjects: true })
	const advantagesList: { name: string; description: string }[] = Array.from(Object.values(advantages))

	return (
		<>
			<div className='p-0 space-y-2'>
				<h1 className='text-4xl font-bold text-amber-500'>{t('laserCleaning.title')}</h1>
				<p className='text-muted-foreground'>{t('laserCleaning.description')}</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8'>
				<FilterSection
					categoryId={categoryId}
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
			<AdvantageCard title='laserCleaning.advantageTitle' advantagesList={advantagesList} />
		</>
	)
}

export default LaserCleaningMachinesList
