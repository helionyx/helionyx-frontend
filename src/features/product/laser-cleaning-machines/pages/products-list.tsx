import { useProductsRelatedSubcategory } from '@/api/hooks.api'
import AdvantageSection from '@/components/advantage-section'
import FilterSection from '@/components/filter-section'
import PaginationSection from '@/components/pagination-section'
import RenderProductsCard from '@/components/render-products-card'
import React, { useState } from 'react'

const advantages = [
	{
		name: 'Non-abrasive',
		describe: `Laser cleaning machines use high-powered lasers to remove contaminants, rust, and other unwanted materials from
				surfaces. Unlike traditional methods like sandblasting or chemical cleaning, laser cleaning is a non-abrasive
				process that does not damage the underlying material.`
	},
	{
		name: 'Precision',
		describe: `Laser cleaning equipment are highly precise and can target specific areas or spots on a surface without
				affecting the surrounding material. This precision makes laser cleaning ideal for delicate or intricate surfaces
				that require careful cleaning.`
	},
	{
		name: 'Eco-friendly',
		describe: `Laser cleaning is an eco-friendly cleaning process that does not require the use of harsh chemicals or solvents
				that can harm the environment. It also produces minimal waste, making it a sustainable cleaning solution.`
	},
	{
		name: 'Cost-effective',
		describe: `While the initial investment in a laser cleaning device may be higher than other cleaning methods, it can save
				money in the long run. Laser cleaning is a faster and more efficient cleaning process that can reduce labor
				costs and increase productivity, resulting in overall cost savings.`
	}
]

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
				<h1 className='text-4xl font-bold text-amber-500'>LASER CLEANING MACHINES</h1>
				<p className='text-muted-foreground'>
					Laser cleaning machines are a non-abrasive cleaning solution that uses high-powered lasers to remove
					contaminants and unwanted materials from surfaces. This eco-friendly and precise process is ideal for delicate
					or intricate surfaces, as it can target specific areas without damaging the underlying material. Laser
					cleaning is also a cost-effective solution, as it can reduce labor costs and increase productivity. The
					process does not require the use of harsh chemicals or solvents, making it a sustainable cleaning solution.
					Laser cleaning machines are commonly used in industries such as automotive, aerospace, and manufacturing for
					applications such as rust removal and surface preparation.
				</p>
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
				<AdvantageSection title='ADVANTAGES OF LASER CLEANING MACHINES' advantages={advantages} />
			</div>
		</>
	)
}

export default LaserCleaningMachinesList
