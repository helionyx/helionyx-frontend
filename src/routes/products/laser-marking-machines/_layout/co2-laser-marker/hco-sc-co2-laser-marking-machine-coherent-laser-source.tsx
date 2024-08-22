import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import CustomerSupport from '@/components/customer-support'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import ProductDetailPending from '@/features/product/components/product-detail-pending'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductDetail: React.FC = () => {
	const productId = 'hco-sc-co2-laser-marking-machine-coherent-laser-source'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: models, isPending: isModelsPending } = useModelsQuery(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending || isModelsPending) return <ProductDetailPending />
	if (!product || !models) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const features = t(product.featuresKey, { returnObjects: true }) as string[]

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
								<CardDescription className='text-base'>{t(product.descriptionKey)}</CardDescription>
								{product.subDescriptionKey && (
									<CardDescription className='text-base'>{t(product.subDescriptionKey)}</CardDescription>
								)}
								<div>
									{features.map((feature, index) => (
										<CardDescription key={index} className='text-base'>
											<span className='text-amber-500'>&gt;&gt;</span> {feature}
										</CardDescription>
									))}
								</div>
							</div>
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
										<TableHead className='border'>{t('models.hcoSC40.name')}</TableHead>
										<TableHead className='border'>{t('models.hcoSC25.name')}</TableHead>
										<TableHead className='border'>{t('models.hcoSC70.name')}</TableHead>
										<TableHead className='border'>{t('models.hcoSC55.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hcoSC40.laserModel')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoSC40.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoSC25.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoSC70.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoSC55.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.outputPowerKey')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC40.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC25.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC70.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC55.outputPowerValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hcoSC40.beamQualityKey')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoSC40.beamQualityValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoSC25.beamQualityValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoSC70.beamQualityValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoSC55.beamQualityValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.laserWaveLengthKey')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC40.laserWaveLengthValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC25.laserWaveLengthValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC70.laserWaveLengthValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC55.laserWaveLengthValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.pulseFrequencyKey')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.pulseFrequencyValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoSC25.pulseFrequencyValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoSC70.pulseFrequencyValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoSC55.pulseFrequencyValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.exitBeamDiameterKey')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC40.exitBeamDiameterValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC25.exitBeamDiameterValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC70.exitBeamDiameterValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoSC55.exitBeamDiameterValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.outputPowerStabilityKey')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.outputPowerStabilityValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoSC25.outputPowerStabilityValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoSC70.outputPowerStabilityValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoSC55.outputPowerStabilityValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.workingLifeKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcoSC40.workingLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.markingRangeKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcoSC40.markingRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.engravingDepthKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcoSC40.engravingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.engravingSpeedKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcoSC40.engravingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.repeatAccuracyKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcoSC40.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.minimumMarkingLineWidthKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcoSC40.minimumMarkingLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.minimumCharacterHeightKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcoSC40.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.coolingWayKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcoSC40.coolingWayValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.systemPowerSupplyKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcoSC40.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.temperatureHumidityKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcoSC40.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.oilMistCondensationKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcoSC40.oilMistCondensationValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.operatingSystemKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcoSC40.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.fileFormatKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcoSC40.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.dimensionsKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcoSC40.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoSC40.packingdimensionsKey')}</TableCell>
										<TableCell className='border' colSpan={4}>
											{t('models.hcoSC40.packingdimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoSC40.totalWeightKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={4}>
											{t('models.hcoSC40.totalWeightValue')}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</section>
					</div>
				</CardContent>
			</Card>

			{/* Application section */}
			<Card>
				<CardHeader>
					<CardTitle className='text-amber-500'>{t('constants.name.scope')}</CardTitle>
				</CardHeader>
				<CardContent>
					<section className='flex flex-col'>
						<img
							src='https://www.mac-laser.com/wp-content/uploads/2022/04/KX-C-Fiber-laser_01.jpg'
							className='w-full h-full object-cover'
						/>
					</section>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className='text-amber-500'>{t('constants.name.sample')}</CardTitle>
				</CardHeader>
				<CardContent>
					<section className='flex flex-col'>
						<img
							src='https://www.mac-laser.com/wp-content/uploads/2022/04/CO2-laser-marking-machine-2.jpg'
							className='w-full h-full object-cover'
						/>
						<img
							src='https://www.mac-laser.com/wp-content/uploads/2022/04/CO2-laser-marking-machine-3.jpg'
							className='w-full h-full object-cover'
						/>
						<img
							src='https://www.mac-laser.com/wp-content/uploads/2022/04/CO2-laser-marking-machine-4.jpg'
							className='w-full h-full object-cover'
						/>
						<img
							src='https://www.mac-laser.com/wp-content/uploads/2022/04/CO2-laser-marking-machine-5.jpg'
							className='w-full h-full object-cover'
						/>
					</section>
				</CardContent>
			</Card>

			{/* Customer support section */}
			<CustomerSupport name={product.nameKey} className='mt-8' />

			{/* Related products section */}
			<div className='mt-8'>
				<RelatedProducts
					isRelatedPending={isRelatedPending}
					relatedProducts={relatedProducts}
					slug='/products/laser-marking-machines'
				/>
			</div>
		</>
	)
}

export const Route = createFileRoute(
	'/products/laser-marking-machines/_layout/co2-laser-marker/hco-sc-co2-laser-marking-machine-coherent-laser-source'
)({
	component: ProductDetail
})
