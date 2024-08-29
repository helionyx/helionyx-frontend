import { useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import hcl_laser_1 from '@/assets/laser-cleaning-machines/HCL Laser Cleaning Machine/Hcl-laser-1.png'
import hcl_laser_2 from '@/assets/laser-cleaning-machines/HCL Laser Cleaning Machine/Hcl-laser-2.png'
import hcl_laser_3 from '@/assets/laser-cleaning-machines/HCL Laser Cleaning Machine/Hcl-laser-3.png'
import hcl_laser_4 from '@/assets/laser-cleaning-machines/HCL Laser Cleaning Machine/Hcl-laser-4.png'
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
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductDetail: React.FC = () => {
	const productId = 'hcl-laser-cleaning-machine'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending) return <ProductDetailPending />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const productName = t('products.hcl-laser-cleaning-machine.name').toUpperCase()
	const benefitsTitle = t('constants.name.appDesc') + ' ' + productName

	const benefits = [
		{
			title: t('products.hcl-laser-cleaning-machine.advantages.ecoFriendly.title'),
			description: t('products.hcl-laser-cleaning-machine.advantages.ecoFriendly.description'),
			image: hcl_laser_1,
			imageAlt: 'Eco Friendly'
		},
		{
			title: t('products.hcl-laser-cleaning-machine.advantages.easyToHandle.title'),
			description: t('products.hcl-laser-cleaning-machine.advantages.easyToHandle.description'),
			image: hcl_laser_2,
			imageAlt: 'Easy To Handle'
		},
		{
			title: t('products.hcl-laser-cleaning-machine.advantages.highCleaningPrecision.title'),
			description: t('products.hcl-laser-cleaning-machine.advantages.highCleaningPrecision.description'),
			image: hcl_laser_3,
			imageAlt: 'High Cleaning Precision'
		},
		{
			title: t('products.hcl-laser-cleaning-machine.advantages.systemStability.title'),
			description: t('products.hcl-laser-cleaning-machine.advantages.systemStability.description'),
			image: hcl_laser_4,
			imageAlt: 'System Stability'
		},
		{
			title: t('products.hcl-laser-cleaning-machine.advantages.sayGoodbyeToTraditionalCleaningMethods.title'),
			description: t(
				'products.hcl-laser-cleaning-machine.advantages.sayGoodbyeToTraditionalCleaningMethods.description'
			)
		},
		{
			title: t('products.hcl-laser-cleaning-machine.advantages.powerAndPrecisionInOneMachine.title'),
			description: t('products.hcl-laser-cleaning-machine.advantages.powerAndPrecisionInOneMachine.description')
		},
		{
			title: t('products.hcl-laser-cleaning-machine.advantages.experienceTheFutureOfCleaningTechnology.title'),
			description: t(
				'products.hcl-laser-cleaning-machine.advantages.experienceTheFutureOfCleaningTechnology.description'
			)
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
										<TableHead className='border bg-muted font-semibold' colSpan={4}>
											{t(product.nameKey)}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead className='border'>Model</TableHead>
										<TableHead className='border'>{t('models.hcl200.name')}</TableHead>
										<TableHead className='border'>{t('models.hcl300.name')}</TableHead>
										<TableHead className='border'>{t('models.hcl500.name')}</TableHead>
										<TableHead className='border'>{t('models.hcl1000.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hcl200.laserModel')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcl200.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcl300.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcl500.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcl1000.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcl200.outputPowerKey')}</TableCell>
										<TableCell className='border'>{t('models.hcl200.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hcl300.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hcl500.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hcl1000.outputPowerValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hcl200.laserWaveLengthKey')}</TableCell>
										<TableCell className='bg-muted border' colSpan={4}>
											{t('models.hcl200.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcl200.repetitionFrequencyRangeKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hcl200.repetitionFrequencyRangeValue')}
										</TableCell>
										<TableCell className='border'>{t('models.hcl1000.repetitionFrequencyRangeValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcl200.outputPowerStabilityKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hcl200.outputPowerStabilityValue')}
										</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcl1000.outputPowerStabilityValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcl200.pluseWidthRangeKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcl200.pluseWidthRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcl200.outputCoreDiameterKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcl200.outputCoreDiameterValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcl200.outputFiberLengthKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcl200.outputFiberLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcl200.coolingWayKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcl200.coolingWayValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcl200.operationModeKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcl200.operationModeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcl200.inputPowerKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcl200.inputPowerValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcl200.operatingTemperatureKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcl200.operatingTemperatureValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcl200.dimensionsKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcl200.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcl200.totalWeightKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcl200.totalWeightValue')}
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
	'/products/laser-cleaning-machines/hcl-laser-cleaning-machine/hcl-laser-cleaning-machine'
)({
	component: ProductDetail
})
