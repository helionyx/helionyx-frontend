import { useProductsRelatedSubcategory } from '@/api/hooks.api'
import AdvantageSection from '@/components/advantage-section'
import FilterSection from '@/components/filter-section'
import PaginationSection from '@/components/pagination-section'
import RenderProductsCard from '@/components/render-products-card'
import React, { useState } from 'react'

const advantages = [
	{
		name: 'Precision',
		describe: `Laser cutting equipments use a highly focused beam of light to cut materials with extreme precision. This means
				that the cuts are clean and accurate, and there is minimal material wastage. This level of precision is
				especially useful in industries such as aerospace, where even the slightest deviation in measurements can lead
				to catastrophic consequences.`
	},
	{
		name: 'Versatility',
		describe: `Laser cutting machines can cut through a wide range of materials, including metals, plastics, wood, and
				ceramics. They can also cut through thick materials, which would be difficult to do with other cutting tools.
				This versatility makes laser cutting machines a useful tool in many industries, from automotive to
				jewelry-making.`
	},
	{
		name: 'Speed',
		describe: `Laser cutting technology are fast and efficient. They can cut through materials at a high speed, which means
				that projects can be completed quickly. This speed is particularly useful in industries that require large
				volumes of materials to be cut, such as mass production facilities.`
	},
	{
		name: 'Automation',
		describe: `Mac Laser's laser cutting machines can be automated, which means that they can run continuously without the need
				for constant supervision. This not only increases efficiency but also reduces labor costs. Additionally,
				automation allows for the creation of complex designs and patterns, which would be difficult to do by hand.`
	}
]

const subCategories = ['Waiting new name']

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
				<h1 className='text-4xl font-bold text-amber-500'>LASER CUTTING MACHINES</h1>
				<p className='text-muted-foreground'>
					Laser cutting machines are versatile tools used in various industries to cut and shape a wide range of
					materials. They work by using a highly focused laser beam to melt or vaporize the material, creating precise
					and clean cuts. The benefits of laser cutting machines include their ability to provide extreme precision,
					versatility in cutting various materials, high speed, and automation. They are widely used in industries such
					as automotive, aerospace, jewelry-making, and mass production facilities. Laser cutting machines have
					revolutionized the manufacturing industry by providing a faster, more efficient, and cost-effective way of
					cutting and shaping materials.
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
							slug='/laser-marking-machines/$productId'
						/>
					</div>
					<PaginationSection currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
				</div>
			</div>
			<div className='p-0 space-y-8'>
				<AdvantageSection title='ADVANTAGES OF LASER CUTTING MACHINES' advantages={advantages} />
			</div>
		</>
	)
}

export default LaserCuttingMachinesList
