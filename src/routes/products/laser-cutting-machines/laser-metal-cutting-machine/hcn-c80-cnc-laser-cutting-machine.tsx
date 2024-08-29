import { useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import hcn_c80_1 from '@/assets/laser-cutting-machines/HCN-C80 CNC Laser Cutting Machine/Hcn-c80-1.png'
import hcn_c80_2 from '@/assets/laser-cutting-machines/HCN-C80 CNC Laser Cutting Machine/Hcn-c80-2.png'
import hcn_c80_3 from '@/assets/laser-cutting-machines/HCN-C80 CNC Laser Cutting Machine/Hcn-c80-3.png'
import hcn_c80_4 from '@/assets/laser-cutting-machines/HCN-C80 CNC Laser Cutting Machine/Hcn-c80-4.png'
import CustomerSupport from '@/components/customer-support'
import ProductBenefits from '@/components/product-benefit'
import ProductDetailPending from '@/components/product-detail-pending'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { createFileRoute } from '@tanstack/react-router'
import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

const ProductDetail: React.FC = () => {
	const productId = 'hcn-c80-cnc-laser-cutting-machine'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending) return <ProductDetailPending />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const cuttingSpeedValues = (translationKey: string): string[] => {
		const formattedValues = t(translationKey, { returnObjects: true }) as string[]
		return formattedValues.map((value) =>
			value
				.split('-')
				.map((part) => part.trim())
				.join('\n- ')
		)
	}

	const productName = t('products.hcn-c80-cnc-laser-cutting-machine.name').toUpperCase()
	const benefitsTitle = t('constants.name.appDesc') + ' ' + productName

	const benefits = [
		{
			title: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.highProductivity.title'),
			description: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.highProductivity.description'),
			image: hcn_c80_1,
			imageAlt: 'High Productivity'
		},
		{
			title: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.costEffective.title'),
			description: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.costEffective.description'),
			image: hcn_c80_2,
			imageAlt: 'Cost Effective'
		},
		{
			title: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.canBeDisassembled.title'),
			description: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.canBeDisassembled.description'),
			image: hcn_c80_3,
			imageAlt: 'Can Be Disassembled'
		},
		{
			title: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.highQuality.title'),
			description: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.highQuality.description'),
			image: hcn_c80_4,
			imageAlt: 'High Quality'
		},
		{
			title: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.precisionMarking.title'),
			description: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.precisionMarking.description')
		},
		{
			title: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.userFriendly.title'),
			description: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.userFriendly.description')
		},
		{
			title: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.highSpeed.title'),
			description: t('products.hcn-c80-cnc-laser-cutting-machine.advantages.highSpeed.description')
		}
	]

	return (
		<>
			<Card className='mb-8'>
				<CardContent className='p-6'>
					<div className='flex flex-col lg:flex-row gap-8'>
						{/* Product images section */}
						<div className='lg:w-1/2'>
							<RenderProductImage product={product} />
						</div>

						{/* Product details section */}
						<div className='lg:w-1/2'>
							<RenderProductDetail product={product} />
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Product content section */}
			<Card className='mb-8 border-x-0'>
				<CardContent className='p-6'>
					<div className='space-y-8'>
						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>{t('constants.name.prdDesc')}</CardTitle>
							<CardDescription>{t(product.descriptionKey)}</CardDescription>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>{t('constants.name.prdSpec')}</CardTitle>
							<Table className='w-full border-collapse text-muted-foreground'>
								<TableHeader>
									<TableRow>
										<TableHead className='border bg-muted font-semibold'>Model Series</TableHead>
										<TableHead className='border bg-muted font-semibold' colSpan={5}>
											{t(product.nameKey)}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead className='border'>Model</TableHead>
										<TableHead className='border'>{t('models.hcnC801000.name')}</TableHead>
										<TableHead className='border'>{t('models.hcnC801500.name')}</TableHead>
										<TableHead className='border'>{t('models.hcnC802000.name')}</TableHead>
										<TableHead className='border'>{t('models.hcnC803000.name')}</TableHead>
										<TableHead className='border'>{t('models.hcnC806000.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.outputPowerKey')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.outputPowerValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcnC801500.outputPowerValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcnC802000.outputPowerValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcnC803000.outputPowerValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcnC806000.outputPowerValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcnC801000.type')}</TableCell>
										<TableCell className='border' colSpan={5}>
											{t('models.hcnC801000.typeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.cuttingProductKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={5}>
											{t('models.hcnC801000.cuttingProducValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcnC801000.cutThroughHoleKey')}</TableCell>
										<TableCell className='border' colSpan={5}>
											{t('models.hcnC801000.cutThroughHoleValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.processingMaterialKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={5}>
											{t('models.hcnC801000.processingMaterialValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcnC801000.effectiveCuttingSizeKey')}</TableCell>
										<TableCell className='border' colSpan={5}>
											{t('models.hcnC801000.effectiveCuttingSizeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.aFixedKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={5}>
											{t('models.hcnC801000.aFixedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcnC801000.driveSystemKey')}</TableCell>
										<TableCell className='border' colSpan={5}>
											{t('models.hcnC801000.driveSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.positioningAccuracyKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={5}>
											{t('models.hcnC801000.positioningAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcnC801000.repeatabilityKey')}</TableCell>
										<TableCell className='border' colSpan={5}>
											{t('models.hcnC801000.repeatabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.ccdAlignmentAccuracyKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={5}>
											{t('models.hcnC801000.ccdAlignmentAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcnC801000.cuttingGasSourceKey')}</TableCell>
										<TableCell className='border' colSpan={5}>
											{t('models.hcnC801000.cuttingGasSourceValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.cuttinglineWidthKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={5}>
											{t('models.hcnC801000.cuttinglineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcnC801000.cutSurfaceKey')}</TableCell>
										<TableCell className='border' colSpan={5}>
											{t('models.hcnC801000.cutSurfaceValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.overallWarrantyKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={5}>
											{t('models.hcnC801000.overallWarrantyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcnC801000.totalWeightKey')}</TableCell>
										<TableCell className='border' colSpan={5}>
											{t('models.hcnC801000.totalWeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcnC801000.cuttingSpeed')}</TableCell>
										<TableCell className='border bg-muted'>
											{cuttingSpeedValues('models.hcnC801000.cuttingSpeedValue').map((value, index) => (
												<Fragment key={index}>
													{value.split('\n').map((line, lineIndex) => (
														<Fragment key={lineIndex}>
															{line}
															{lineIndex < value.split('\n').length - 1 && <br />}
														</Fragment>
													))}
													{index < value.length - 1 && <br />}
												</Fragment>
											))}
										</TableCell>
										<TableCell className='border bg-muted'>
											{cuttingSpeedValues('models.hcnC801500.cuttingSpeedValue').map((value, index) => (
												<Fragment key={index}>
													{value.split('\n').map((line, lineIndex) => (
														<Fragment key={lineIndex}>
															{line}
															{lineIndex < value.split('\n').length - 1 && <br />}
														</Fragment>
													))}
													{index < value.length - 1 && <br />}
												</Fragment>
											))}
										</TableCell>
										<TableCell className='border bg-muted'>
											{cuttingSpeedValues('models.hcnC802000.cuttingSpeedValue').map((value, index) => (
												<Fragment key={index}>
													{value.split('\n').map((line, lineIndex) => (
														<Fragment key={lineIndex}>
															{line}
															{lineIndex < value.split('\n').length - 1 && <br />}
														</Fragment>
													))}
													{index < value.length - 1 && <br />}
												</Fragment>
											))}
										</TableCell>
										<TableCell className='border bg-muted'>
											{cuttingSpeedValues('models.hcnC803000.cuttingSpeedValue').map((value, index) => (
												<Fragment key={index}>
													{value.split('\n').map((line, lineIndex) => (
														<Fragment key={lineIndex}>
															{line}
															{lineIndex < value.split('\n').length - 1 && <br />}
														</Fragment>
													))}
													{index < value.length - 1 && <br />}
												</Fragment>
											))}
										</TableCell>
										<TableCell className='border bg-muted'>
											{cuttingSpeedValues('models.hcnC806000.cuttingSpeedValue').map((value, index) => (
												<Fragment key={index}>
													{value.split('\n').map((line, lineIndex) => (
														<Fragment key={lineIndex}>
															{line}
															{lineIndex < value.split('\n').length - 1 && <br />}
														</Fragment>
													))}
													{index < value.length - 1 && <br />}
												</Fragment>
											))}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</section>
					</div>
				</CardContent>
			</Card>

			{/* Product benefits section */}
			<ProductBenefits title={benefitsTitle} benefits={benefits} />

			{/* Customer support section */}
			<CustomerSupport name={product.nameKey} className='mt-8' />

			{/* Related products section */}
			<RelatedProducts
				className='mt-8'
				isRelatedPending={isRelatedPending}
				relatedProducts={relatedProducts}
				slug='/products/laser-cutting-machines'
			/>
		</>
	)
}

export const Route = createFileRoute(
	'/products/laser-cutting-machines/laser-metal-cutting-machine/hcn-c80-cnc-laser-cutting-machine'
)({
	component: ProductDetail
})
