import { useProductsRelatedSubcategory } from '@/api/hooks.api'
import AdvantageSection from '@/components/advantage-section'
import FilterSection from '@/components/filter-section'
import PaginationSection from '@/components/pagination-section'
import RenderProductsCard from '@/components/render-products-card'
import React, { useState } from 'react'

const advantages = [
	{
		name: 'High-pressure chain steel base',
		describe: `good quality, heavy and strong, playing a stable role on industrial pneumatic marking machine;`
	},
	{
		name: 'Inlet filter pressure regulating valve',
		describe: `adjust the pressure level to fully reduce the impact of upstream pressure fluctuations and ensure the stability
				of the output pressure;`
	},
	{
		name: 'Carbide needles',
		describe: `Industrial pneumatic marking machines can print mechanical parts and signs of most materials;`
	},
	{
		name: 'Computer control and the new version of WINDOWS operating system',
		describe: `Chinese and English switching, powerful editing function, industrial pneumatic marking machine can arbitrarily
				arrange the required characters and graphics;`
	},
	{
		name: 'Automatically save the marked content',
		describe: `when the power is abnormally disconnected, the industrial pneumatic marking machine can automatically save the
				pattern being edited and marked;`
	},
	{
		name: 'Support multiple types of fonts',
		describe: `SHX font for Auto, CHR for Borland, TTF for Windows;`
	}
]

const subCategories = ['HDO Marking Machine']

const DotMarkingMachinesList: React.FC = () => {
	const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 6

	const { data, isPending } = useProductsRelatedSubcategory({
		category: 'Dot Marking Machines',
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
			<p></p>
			<div className='p-0 space-y-2'>
				<h1 className='text-4xl font-bold text-amber-500'>DOT MARKING MACHINES</h1>
				<p className='text-muted-foreground'>
					Industrial Dot marking machine can realize the long-term marking of patterns, text, letters, VIN code, serial
					number, date and graphics on the workpiece.
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
						<RenderProductsCard isPending={isPending} products={data?.products} slug='/products/dot-marking-machines' />
					</div>
					<PaginationSection currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
				</div>
			</div>
			<div className='p-0 space-y-8'>
				<AdvantageSection title='ADVANTAGES OF DOT MARKING MACHINES' advantages={advantages} />
			</div>
		</>
	)
}

export default DotMarkingMachinesList
