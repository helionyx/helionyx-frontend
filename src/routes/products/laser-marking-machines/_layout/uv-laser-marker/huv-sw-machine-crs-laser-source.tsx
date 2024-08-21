import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import ProductDetailPending from '@/features/product/components/product-detail-pending'
import { createFileRoute } from '@tanstack/react-router'
import { Mailbox, Phone } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductDetail: React.FC = () => {
	const productId = 'huv-sw-machine-crs-laser-source'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: models, isPending: isModelsPending } = useModelsQuery(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending || isModelsPending) return <ProductDetailPending />
	if (!product || !models) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const features = t('products.huv-sw-machine-crs-laser-source.features', { returnObjects: true }) as string[]

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
							<CardTitle className='text-2xl font-semibold mb-4'>Product Description</CardTitle>
							<div className='space-y-4'>
								<CardDescription className='text-base'>{t(product.descriptionKey)}</CardDescription>
								{product.subDescriptionKey && (
									<CardDescription className='text-base'>{t(product.subDescriptionKey)}</CardDescription>
								)}
								<div>
									{features.map((feature: string, index: number) => (
										<CardDescription key={index} className='text-base'>
											<span className='text-amber-500'>&gt;&gt;</span> {feature}
										</CardDescription>
									))}
								</div>
							</div>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Specifications</CardTitle>
							<Table className='w-full border-collapse text-muted-foreground'>
								<TableHeader>
									<TableRow>
										<TableHead className='border bg-muted font-semibold text-center'>Model Series</TableHead>
										<TableHead className='border bg-muted font-semibold text-center' colSpan={6}>
											{t('products.huv-sw-machine-crs-laser-source.name')}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead className='border text-center'>Model</TableHead>
										<TableHead className='border text-center'>{t('models.huvSW3.name')}</TableHead>
										<TableHead className='border text-center'>{t('models.huvSW5.name')}</TableHead>
										<TableHead className='border text-center'>{t('models.huvSW8.name')}</TableHead>
										<TableHead className='border text-center'>{t('models.huvSW10.name')}</TableHead>
										<TableHead className='border text-center'>{t('models.huvSW15.name')}</TableHead>
										<TableHead className='border text-center'>{t('models.huvSW20.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className='bg-muted border text-center'>{t('models.huvSW3.laserModel')}</TableCell>
										<TableCell className='bg-muted border text-center'>{t('models.huvSW3.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border text-center'>{t('models.huvSW5.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border text-center'>{t('models.huvSW8.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border text-center'>{t('models.huvSW10.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border text-center'>{t('models.huvSW15.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border text-center'>{t('models.huvSW20.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.outputPowerKey')}</TableCell>
										<TableCell className='border text-center'>{t('models.huvSW3.outputPowerValue')}</TableCell>
										<TableCell className='border text-center'>{t('models.huvSW5.outputPowerValue')}</TableCell>
										<TableCell className='border text-center'>{t('models.huvSW8.outputPowerValue')}</TableCell>
										<TableCell className='border text-center'>{t('models.huvSW10.outputPowerValue')}</TableCell>
										<TableCell className='border text-center'>{t('models.huvSW15.outputPowerValue')}</TableCell>
										<TableCell className='border text-center'>{t('models.huvSW20.outputPowerValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='bg-muted border text-center'>{t('models.huvSW3.beamQualityKey')}</TableCell>
										<TableCell className='bg-muted border text-center' colSpan={6}>
											{t('models.huvSW3.beamQualityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.laserWaveLengthKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>
											{t('models.huvSW3.pulseFrequencyKey')}
										</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.pulseFrequencyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.outputBeamDiameterKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.outputBeamDiameterValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>
											{t('models.huvSW3.outputPowerStabilityKey')}
										</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.outputPowerStabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.workingLifeKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.workingLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>{t('models.huvSW3.markingRangeKey')}</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.markingRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.engravingDepthKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.engravingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>
											{t('models.huvSW3.engravingSpeedKey')}
										</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.engravingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.repeatAccuracyKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>
											{t('models.huvSW3.minimumLineWidthKey')}
										</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.minimumLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.minimumCharacterHeightKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>{t('models.huvSW3.coolingMethodKey')}</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.coolingMethodValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.systemPowerSupplyKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>
											{t('models.huvSW3.temperatureHumidityKey')}
										</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.oilMistKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.oilMistValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>
											{t('models.huvSW3.operatingSystemKey')}
										</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.fileFormatKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>{t('models.huvSW3.dimensionsKey')}</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border text-center'>{t('models.huvSW3.packingSizeKey')}</TableCell>
										<TableCell className='border text-center' colSpan={6}>
											{t('models.huvSW3.packingSizeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted text-center'>{t('models.huvSW3.totalWeightKey')}</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={6}>
											{t('models.huvSW3.totalWeightValue')}
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
					<CardTitle>Application field</CardTitle>
				</CardHeader>
				<CardContent>
					<section className='flex flex-col justify-center'>
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-1.jpg' alt='' />
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-2.jpg' alt='' />
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-3.jpg' alt='' />
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-4.jpg' alt='' />
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-5.jpg' alt='' />
					</section>
				</CardContent>
			</Card>

			{/* Customer support section */}
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl font-semibold mb-4'>Customer Support</CardTitle>
					<CardDescription className='mb-4'>
						Our team of experts is ready to assist you with any questions or concerns you may have about the{' '}
						{product.nameKey}.
					</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-wrap gap-4'>
					<Button variant='outline' className='flex items-center'>
						<Mailbox className='w-5 h-5 mr-2' />
						<span>Email Support</span>
					</Button>
					<Button variant='outline' className='flex items-center'>
						<Phone className='w-5 h-5 mr-2' />
						<span>Phone Support</span>
					</Button>
				</CardContent>
			</Card>

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
	'/products/laser-marking-machines/_layout/uv-laser-marker/huv-sw-machine-crs-laser-source'
)({
	component: ProductDetail,
	pendingComponent: ProductDetailPending
})
