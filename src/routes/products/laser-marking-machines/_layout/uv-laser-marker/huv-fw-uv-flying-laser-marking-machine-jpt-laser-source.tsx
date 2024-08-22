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
	const productId = 'huv-fw-uv-flying-laser-marking-machine-jpt-laser-source'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: models, isPending: isModelsPending } = useModelsQuery(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending || isModelsPending) return <ProductDetailPending />
	if (!product || !models) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const advantages = t('products.huv-fw-uv-flying-laser-marking-machine-jpt-laser-source.advantages', {
		returnObjects: true
	})
	const advantagesList = Array.from(Object.values(advantages))

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
									{advantagesList.map((advantage: { title: string; description: string }, index: number) => (
										<CardDescription key={index} className='text-base my-2'>
											<div className='space-y-2'>
												<p className='text-amber-500'>&gt;&gt; {advantage.title}</p>
												<p>{advantage.description}</p>
											</div>
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
										<TableHead className='border bg-muted font-semibold text-muted-foreground'>Model Series</TableHead>
										<TableHead className='border bg-muted font-semibold text-muted-foreground' colSpan={6}>
											{t(product.nameKey)}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead className='border text-muted-foreground'>Model</TableHead>
										<TableHead className='border text-muted-foreground'>{t('models.huvFW3A.name')}</TableHead>
										<TableHead className='border text-muted-foreground'>{t('models.huvFW5A.name')}</TableHead>
										<TableHead className='border text-muted-foreground'>{t('models.huvFW3E.name')}</TableHead>
										<TableHead className='border text-muted-foreground'>{t('models.huvFW355C.name')}</TableHead>
										<TableHead className='border text-muted-foreground'>{t('models.huvFW555C.name')}</TableHead>
										<TableHead className='border text-muted-foreground'>{t('models.huvFW1055C.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className='bg-muted border text-muted-foreground'>
											{t('models.huvFW3A.laserModel')}
										</TableCell>
										<TableCell className='bg-muted border text-muted-foreground'>
											{t('models.huvFW3A.laserModelValue')}
										</TableCell>
										<TableCell className='bg-muted border text-muted-foreground'>
											{t('models.huvFW5A.laserModelValue')}
										</TableCell>
										<TableCell className='bg-muted border text-muted-foreground'>
											{t('models.huvFW3E.laserModelValue')}
										</TableCell>
										<TableCell className='bg-muted border text-muted-foreground'>
											{t('models.huvFW355C.laserModelValue')}
										</TableCell>
										<TableCell className='bg-muted border text-muted-foreground'>
											{t('models.huvFW555C.laserModelValue')}
										</TableCell>
										<TableCell className='bg-muted border text-muted-foreground'>
											{t('models.huvFW1055C.laserModelValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>{t('models.huvFW3A.outputPowerKey')}</TableCell>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW3A.outputPowerValue')}
										</TableCell>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW5A.outputPowerValue')}
										</TableCell>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW3E.outputPowerValue')}
										</TableCell>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW355C.outputPowerValue')}
										</TableCell>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW555C.outputPowerValue')}
										</TableCell>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW1055C.outputPowerValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='bg-muted border text-muted-foreground'>
											{t('models.huvFW3A.beamQualityKey')}
										</TableCell>
										<TableCell className='bg-muted border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.beamQualityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW3A.laserWaveLengthKey')}
										</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.pulseFrequencyKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={3}>
											{t('models.huvFW3A.pulseFrequencyValue')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={2}>
											{t('models.huvFW355C.pulseFrequencyValue')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={1}>
											{t('models.huvFW1055C.pulseFrequencyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW3A.outputBeamDiameterKey')}
										</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={5}>
											{t('models.huvFW3A.outputBeamDiameterValue')}
										</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={1}>
											{t('models.huvFW1055C.outputBeamDiameterValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.outputPowerStabilityKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.outputPowerStabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>{t('models.huvFW3A.workingLifeKey')}</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.workingLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.markingRangeKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.markingRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW3A.engravingDepthKey')}
										</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.engravingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.engravingSpeedKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.engravingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW3A.repeatAccuracyKey')}
										</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.minimumMarkerLineWidthKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.minimumMarkerLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW3A.minimumCharacterHeightKey')}
										</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.coolingWayKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={2}>
											{t('models.huvFW3A.coolingWayValue')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={4}>
											{t('models.huvFW3E.coolingWayValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>
											{t('models.huvFW3A.systemPowerSupplyKey')}
										</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.temperatureHumidityKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>{t('models.huvFW3A.oilMistKey')}</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.oilMistValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.operatingSystemKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>{t('models.huvFW3A.fileFormatKey')}</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.dimensionsKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-muted-foreground'>{t('models.huvFW3A.packingSizeKey')}</TableCell>
										<TableCell className='border text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.packingSizeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-muted-foreground'>
											{t('models.huvFW3A.totalWeightKey')}
										</TableCell>
										<TableCell className='border bg-muted text-muted-foreground' colSpan={6}>
											{t('models.huvFW3A.totalWeightValue')}
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
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-Sample-pictures.jpg' alt='' />
					</section>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className='text-amber-500'>{t('constants.name.sample')}</CardTitle>
				</CardHeader>
				<CardContent>
					<section className='flex flex-col'>
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-Scope-of-application.jpg' alt='' />
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
	'/products/laser-marking-machines/_layout/uv-laser-marker/huv-fw-uv-flying-laser-marking-machine-jpt-laser-source'
)({
	component: ProductDetail
})
