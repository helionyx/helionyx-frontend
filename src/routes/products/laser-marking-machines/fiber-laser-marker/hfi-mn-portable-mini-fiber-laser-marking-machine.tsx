import { useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import hfi_mn_1 from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-MN Portable Mini Fiber Laser Marking Machine/Hfi-mn-1.png'
import hfi_mn_2 from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-MN Portable Mini Fiber Laser Marking Machine/Hfi-mn-2.png'
import hfi_mn_3 from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-MN Portable Mini Fiber Laser Marking Machine/Hfi-mn-3.png'
import hfi_mn_4 from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-MN Portable Mini Fiber Laser Marking Machine/Hfi-mn-4.png'
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
	const productId = 'hfi-mn-portable-mini-fiber-laser-marking-machine'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending) return <ProductDetailPending />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const productName = t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.name').toUpperCase()
	const benefitsTitle = t('constants.name.appDesc') + ' ' + productName

	const benefits = [
		{
			title: t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.highProductivity.title'),
			description: t(
				'products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.highProductivity.description'
			),
			image: hfi_mn_1,
			imageAlt: 'HFI-MN Portable Mini Fiber Laser Marking Machine'
		},
		{
			title: t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.costEffective.title'),
			description: t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.costEffective.description'),
			image: hfi_mn_2,
			imageAlt: 'HFI-MN Portable Mini Fiber Laser Marking Machine'
		},
		{
			title: t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.canBeDisassembled.title'),
			description: t(
				'products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.canBeDisassembled.description'
			),
			image: hfi_mn_3,
			imageAlt: 'HFI-MN Portable Mini Fiber Laser Marking Machine'
		},
		{
			title: t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.highQuality.title'),
			description: t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.highQuality.description'),
			image: hfi_mn_4,
			imageAlt: 'HFI-MN Portable Mini Fiber Laser Marking Machine'
		},
		{
			title: t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.unmatchedPortability.title'),
			description: t(
				'products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.unmatchedPortability.description'
			)
		},
		{
			title: t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.superiorMarkingPrecision.title'),
			description: t(
				'products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.superiorMarkingPrecision.description'
			)
		},
		{
			title: t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.unbeatableDurability.title'),
			description: t(
				'products.hfi-mn-portable-mini-fiber-laser-marking-machine.advantages.unbeatableDurability.description'
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
							<div className='space-y-4'>
								<CardDescription>{t(product.descriptionKey)}</CardDescription>
								{product.subDescriptionKey && <CardDescription>{t(product.subDescriptionKey)}</CardDescription>}
							</div>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>{t('constants.name.prdSpec')}</CardTitle>
							<Table className='w-full border-collapse text-muted-foreground'>
								<TableHeader>
									<TableRow>
										<TableHead colSpan={2} className='w-1/4 text-center border'>
											Model series
										</TableHead>
										<TableHead colSpan={2} className='text-center border'>
											{t('products.hfi-mn-portable-mini-fiber-laser-marking-machine.name')}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead colSpan={2} className='w-1/4 text-center border bg-muted'>
											Model
										</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.hfiMN20.name')}</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.hfiMN30.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell rowSpan={7} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.hfiMN20.laserParameters')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiMN20.laserModel')}</TableCell>
										<TableCell className='text-center border'>{t('models.hfiMN20.laserModelValue')}</TableCell>
										<TableCell className='text-center border'>{t('models.hfiMN30.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.outputPowerKey')}
										</TableCell>
										<TableCell className='border bg-muted text-center'>
											{t('models.hfiMN20.outputPowerValue')}
										</TableCell>
										<TableCell className='border bg-muted text-center'>
											{t('models.hfiMN30.outputPowerValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiMN20.beamQualityKey')}</TableCell>
										<TableCell colSpan={2} className='border text-center'>
											{t('models.hfiMN20.beamQualityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.laserWaveLengthKey')}
										</TableCell>
										<TableCell colSpan={2} className='border bg-muted text-center'>
											{t('models.hfiMN20.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiMN20.pulseFrequencyKey')}</TableCell>
										<TableCell className='border text-center'>{t('models.hfiMN20.pulseFrequencyValue')}</TableCell>
										<TableCell className='border text-center'>{t('models.huvMW10.pulseFrequencyValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiMN20.outputPowerStabilityKey')}
										</TableCell>
										<TableCell colSpan={2} className='border text-center'>
											{t('models.hfiMN20.outputPowerStabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.workingLifeKey')}
										</TableCell>
										<TableCell colSpan={2} className='border bg-muted text-center'>
											{t('models.hfiMN20.workingLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={6} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.huvA20.opticalProperties')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiMN20.markingRangeKey')}</TableCell>
										<TableCell colSpan={2} className='border text-center'>
											{t('models.hfiMN20.markingRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.engravingDepthKey')}
										</TableCell>
										<TableCell colSpan={2} className='border bg-muted text-center'>
											{t('models.hfiMN20.engravingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiMN20.engravingSpeedKey')}</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiMN20.engravingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.repeatAccuracyKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiMN20.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiMN20.minimumMarkingLineWidthKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiMN20.minimumMarkingLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.minimumCharacterHeightKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiMN20.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={4} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.hfiMN20.useEnvironment')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiMN20.coolingWayKey')}</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiMN20.coolingWayValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.systemPowerSupplyKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiMN20.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiMN20.temperatureHumidityKey')}
										</TableCell>
										<TableCell className='border text-center' colSpan={2}>
											{t('models.hfiMN20.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.oilMistCondensationKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiMN20.oilMistCondensationValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={5} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.hfiMN20.otherParameters')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiMN20.supportSystemKey')}</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiMN20.supportSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.fileFormatKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiMN20.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiMN20.dimensionsKey')}</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiMN20.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.packingSizeKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiMN20.packingSizeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiMN20.totalWeightKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiMN20.totalWeightValue')}
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
	'/products/laser-marking-machines/fiber-laser-marker/hfi-mn-portable-mini-fiber-laser-marking-machine'
)({
	component: ProductDetail
})
