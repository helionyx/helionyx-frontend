import { useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import image_1 from '@/assets/laser-marking-machines/co2-laser-marker/HCO-FC CO2 Flying Laser Marking Machine (COHERENT Laser Sorurce)/Hco-fc-Scope-pictures.png'
import image_2 from '@/assets/laser-marking-machines/co2-laser-marker/HCO-FC CO2 Flying Laser Marking Machine (COHERENT Laser Sorurce)/Hco-fc-Simple-of-application.png'
import CustomerSupport from '@/components/customer-support'
import ProductDetailPending from '@/components/product-detail-pending'
import ProductSample from '@/components/product-sample'
import ProductScopeApplication from '@/components/product-scope-application'
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
	const productId = 'hco-fc-co2-flying-laser-marking-machine-coherent-laser-source'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending) return <ProductDetailPending />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const advantages = t('products.hco-fc-co2-flying-laser-marking-machine-coherent-laser-source.advantages', {
		returnObjects: true
	})
	const advantagesList: { title: string; description: string }[] = Array.from(Object.values(advantages))

	const applicationImages = [
		{
			image: image_1,
			imageAlt: 'Scope of Application for HCO-FC CO2 Flying Laser Marking Machine (COHERENT Laser Sorurce)'
		}
	]

	const sampleImages = [
		{
			image: image_2,
			imageAlt: 'Sample Application for HCO-FC CO2 Flying Laser Marking Machine (COHERENT Laser Sorurce)'
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
								<CardDescription className='text-base'>{t(product.descriptionKey)}</CardDescription>
								{product.subDescriptionKey && (
									<CardDescription className='text-base'>{t(product.subDescriptionKey)}</CardDescription>
								)}
								<div>
									{advantagesList.map((advantage, index: number) => (
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
										<TableHead className='border bg-muted font-semibold'>Model Series</TableHead>
										<TableHead className='border bg-muted font-semibold' colSpan={2}>
											{t(product.nameKey)}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead className='border'>Model</TableHead>
										<TableHead className='border'>{t('models.hcoFC40.name')}</TableHead>
										<TableHead className='border'>{t('models.hcoFC70.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hcoFC40.laserModel')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoFC40.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoFC70.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.outputPowerKey')}</TableCell>
										<TableCell className='border'>{t('models.hcoFC40.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoFC70.outputPowerValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hcoFC40.beamQualityKey')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoFC40.beamQualityValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hcoFC70.beamQualityValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.laserWaveLengthKey')}</TableCell>
										<TableCell className='border'>{t('models.hcoFC40.laserWaveLengthValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoFC70.laserWaveLengthValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.pulseFrequencyKey')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.pulseFrequencyValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoFC70.pulseFrequencyValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.exitBeamDiameterKey')}</TableCell>
										<TableCell className='border'>{t('models.hcoFC40.exitBeamDiameterValue')}</TableCell>
										<TableCell className='border'>{t('models.hcoFC70.exitBeamDiameterValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.outputPowerStabilityKey')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.outputPowerStabilityValue')}</TableCell>
										<TableCell className='border bg-muted'>{t('models.hcoFC70.outputPowerStabilityValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.workingLifeKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hcoFC40.workingLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.markingRangeKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hcoFC40.markingRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.engravingDepthKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hcoFC40.engravingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.engravingSpeedKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hcoFC40.engravingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.repeatAccuracyKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hcoFC40.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.minimumMarkerLineWidthKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hcoFC40.minimumMarkerLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.minimumCharacterHeightKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hcoFC40.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.coolingWayKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hcoFC40.coolingWayValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.systemPowerSupplyKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hcoFC40.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.temperatureHumidityKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hcoFC40.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.oilMistCondensationKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hcoFC40.oilMistCondensationValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.operatingSystemKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hcoFC40.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.fileFormatKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hcoFC40.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.dimensionsKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hcoFC40.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hcoFC40.packingSizeKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hcoFC40.packingSizeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hcoFC40.totalWeightKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hcoFC40.totalWeightValue')}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</section>
					</div>
				</CardContent>
			</Card>

			{/* Application section */}
			<ProductScopeApplication title={t('constants.name.scope')} images={applicationImages} />

			{/* Sample images section */}
			<ProductSample title={t('constants.name.sample')} images={sampleImages} />

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
	'/products/laser-marking-machines/co2-laser-marker/hco-fc-co2-flying-laser-marking-machine-coherent-laser-source'
)({
	component: ProductDetail
})
