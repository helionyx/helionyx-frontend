import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Model, Product } from '@/types'
import React from 'react'

type RenderTableProps = {
	product: Product
	models: Model[]
}

type SpecValue = string | number | string[]
type SpecGroup = Record<string, SpecValue>
type Specifications = Record<string, SpecGroup | SpecValue>

const RenderTable: React.FC<RenderTableProps> = ({ product, models }) => {
	const isGrouped = (specs: Specifications): specs is Record<string, SpecGroup> => {
		return Object.values(specs).some((value) => typeof value === 'object' && value !== null && !Array.isArray(value))
	}

	const flattenSpecs = (specs: Specifications): Record<string, SpecGroup> => {
		if (isGrouped(specs)) return specs
		return { Specifications: specs as SpecGroup }
	}

	const groupValues = (values: SpecValue[]): { value: SpecValue; colspan: number }[] => {
		const result: { value: SpecValue; colspan: number }[] = []
		let currentValue = values[0]
		let colspan = 1

		for (let i = 1; i <= values.length; i++) {
			if (i < values.length && values[i] === currentValue) {
				colspan++
			} else {
				result.push({ value: currentValue, colspan })
				if (i < values.length) {
					currentValue = values[i]
					colspan = 1
				}
			}
		}

		return result
	}

	const renderHeader = () => {
		return (
			<TableHeader>
				<TableRow>
					<TableHead className='text-center border' colSpan={2}>
						Model series
					</TableHead>
					<TableHead colSpan={models.length} className='text-center border'>
						{product.nameKey}
					</TableHead>
				</TableRow>
				<TableRow>
					<TableHead className='text-center border bg-muted' colSpan={2}>
						Model
					</TableHead>
					{models.map((model) => (
						<TableHead key={model.id} className='text-center border bg-muted'>
							{model.name}
						</TableHead>
					))}
				</TableRow>
			</TableHeader>
		)
	}

	const renderBody = () => {
		const groupedSpecs = models.map((model) =>
			isGrouped(model.specifications) ? model.specifications : flattenSpecs(model.specifications)
		)

		const allGroups = Array.from(new Set(groupedSpecs.flatMap((spec) => Object.keys(spec))))

		return (
			<TableBody>
				{allGroups.map((groupName) => {
					const group = groupedSpecs[0][groupName] || {}
					return (
						<React.Fragment key={groupName}>
							<TableRow>
								<TableCell className='font-medium border' rowSpan={Object.keys(group).length + 1}>
									{groupName}
								</TableCell>
							</TableRow>
							{Object.entries(group).map(([key]) => {
								const values = models.map((model) => {
									const specs = isGrouped(model.specifications)
										? model.specifications
										: flattenSpecs(model.specifications)
									return specs[groupName]?.[key]
								})
								const groupedValues = groupValues(values)

								return (
									<TableRow key={`${groupName}-${key}`}>
										<TableCell className='font-medium border'>{key}</TableCell>
										{groupedValues.map(({ value, colspan }, index) => (
											<TableCell key={index} className='border text-center' colSpan={colspan}>
												{value !== undefined ? (Array.isArray(value) ? value.join(', ') : value) : '-'}
											</TableCell>
										))}
									</TableRow>
								)
							})}
						</React.Fragment>
					)
				})}
			</TableBody>
		)
	}

	return (
		<>
			<Table className='border'>
				{renderHeader()}
				{renderBody()}
				<TableCaption className='caption-bottom'>
					Specifications for {product.nameKey} - {models.map((m) => m.name).join(', ')}
				</TableCaption>
			</Table>
		</>
	)
}

export default RenderTable
