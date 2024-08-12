import { useProductsRelatedSubcategory } from '@/api/hooks.api'
import AdvantageSection from '@/components/advantage-section'
import FilterSection from '@/components/filter-section'
import PaginationSection from '@/components/pagination-section'
import RenderProductsCard from '@/components/render-products-card'
import React, { useState } from 'react'

const advantages = [
	{
		name: 'High Speed and Precision',
		describe: `Laser technology can mark materials quickly and accurately, making them ideal for high-volume production
		environments. They can also produce intricate designs and fine details with high precision and accuracy.`
	},
	{
		name: 'Non-Contact Process',
		describe: `Our machines use a non-contact process, which means that there is no physical contact between the machine
		and the material being marked. This eliminates the risk of damage to the material and reduces the need for
		costly repairs and maintenance.`
	},
	{
		name: 'Versatile and Flexible',
		describe: `Laser marking machines can mark a wide range of materials, including metals, plastics, ceramics, glass, and
		more. They are also versatile in terms of the types of markings they can produce, such as text, logos,
		barcodes, and graphics.`
	},
	{
		name: 'Permanent and Durable Marking',
		describe: `Laser markings are permanent and durable, making them resistant to wear, corrosion, and fading. This makes
		laser marking ideal for applications where the marking needs to remain visible and legible over a long
		period of time.`
	}
]

const subCategories = ['UV Laser Marker', 'Fiber Laser Marker', 'CO2 Laser Marker', 'Portable Laser Marker']

const LaserMarkingMachinesList: React.FC = () => {
	const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 6

	const { data, isPending } = useProductsRelatedSubcategory({
		category: 'Laser Marking Machines',
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
				<h1 className='text-4xl font-bold text-amber-500'>LASER MARKING MACHINES</h1>
				<p className='text-muted-foreground'>
					Helionyx is a leading supplier of laser marking machines, offering a wide range of solutions for various
					industries. Our high-speed lasers provide precise and accurate marking, making them ideal for challenging
					marking requirements. Helionyx is laser marking machines are known for their versatility as they can be used
					on a variety of materials including metal, nameplate, plastic and glass. Whether you are looking for a machine
					for machining small parts or for larger industrial scale applications, Helionyx has you covered. And our
					devices provide quick and easy setting and operation. Choose Helionyx for all your laser marking needs and
					experience the difference in quality and performance.
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
				<AdvantageSection title='ADVANTAGES OF LASER MARKING MACHINES' advantages={advantages} />
			</div>
		</>
	)
}

export default LaserMarkingMachinesList
