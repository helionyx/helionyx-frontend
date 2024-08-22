import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import CustomerSupport from '@/components/customer-support'
import ProductDetailPending from '@/components/product-detail-pending'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Separator } from '@radix-ui/react-separator'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductDetail: React.FC = () => {
	const productId = 'huv-integrated-fiber-laser-marking-machine'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: models, isPending: isModelsPending } = useModelsQuery(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending || isModelsPending) return <ProductDetailPending />
	if (!product || !models) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

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
									<TableRow className='border'>
										<TableHead colSpan={2} className='w-1/4 text-center border'>
											Model series
										</TableHead>
										<TableHead colSpan={2} className='w-3/4 text-center'>
											{t('products.huv-integrated-fiber-laser-marking-machine.name')}
										</TableHead>
									</TableRow>
									<TableRow className='border'>
										<TableHead colSpan={2} className='w-1/4 text-center border'>
											Model
										</TableHead>
										<TableHead className='w-auto text-center border'>{t('models.huvA20.name')}</TableHead>
										<TableHead className='w-auto text-center border'>{t('models.huvA30.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow className='border'>
										<TableCell rowSpan={7} className='font-medium w-1/4 border text-center'>
											{t('models.huvA20.laserParameters')}
										</TableCell>
										<TableCell className='w-1/4 border'>{t('models.huvA20.laserModelKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.laserModelValue')}
										</TableCell>
									</TableRow>
									<TableRow className='border'>
										<TableCell className='w-1/4 border'>{t('models.huvA20.outputPowerKey')}</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.huvA20.outputPowerValue')}</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.huvA30.outputPowerValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.beamQualityKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 border text-center'>
											{t('models.huvA20.beamQualityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.pulseFrequencyKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 border text-center'>
											{t('models.huvA20.pulseFrequencyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.laserWaveLengthKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 border text-center'>
											{t('models.huvA20.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.outputPowerStabilityKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 border text-center'>
											{t('models.huvA20.outputPowerStabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.workingLifeKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 border text-center'>
											{t('models.huvA20.workingLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={6} className='font-medium w-1/4 border text-center'>
											{t('models.huvA20.opticalProperties')}
										</TableCell>
										<TableCell className='w-1/4 border'>{t('models.huvA20.markingRangeKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 border text-center'>
											{t('models.huvA20.markingRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.engravingDepthKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 border text-center'>
											{t('models.huvA20.engravingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.engravingSpeedKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.engravingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.repeatAccuracyKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.minimumLineWidthKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.minimumLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.minimumCharacterHeightKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={4} className='font-medium w-1/4 border text-center'>
											{t('models.huvA20.useEnvironment')}
										</TableCell>
										<TableCell className='w-1/4 border'>{t('models.huvA20.coolingMethodKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.coolingMethodValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.systemPowerSupplyKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.temperatureHumidityKey')}</TableCell>
										<TableCell className='w-1/4 border text-center'>
											{t('models.huvA20.temperatureHumidityValue')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>
											{t('models.huvA30.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.oilMistKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.oilMistValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={7} className='font-medium w-1/4 border text-center'>
											{t('models.huvA20.otherParameters')}
										</TableCell>
										<TableCell className='w-1/4 border'>{t('models.huvA20.operatingSystemKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.fileFormatKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.dimensionsKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.packingSizeKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.packingSizeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.hostWeightKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.hostWeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border'>{t('models.huvA20.overWeightKey')}</TableCell>
										<TableCell colSpan={2} className='w-1/2 text-center border'>
											{t('models.huvA20.overWeightValue')}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</section>
					</div>
				</CardContent>
			</Card>

			<Separator />

			<Card className='border-t-amber-500 bg-muted rounded-none py-8 border-x-0 border-b-0'>
				<CardHeader className='text-center space-y-8'>
					<CardTitle className='text-2xl text-amber-500'>
						{t('products.huv-integrated-fiber-laser-marking-machine.advantages.fastAndAccurateLaserMarking.title')}
					</CardTitle>
					<CardDescription className='text-base'>
						{t(
							'products.huv-integrated-fiber-laser-marking-machine.advantages.fastAndAccurateLaserMarking.description'
						)}
					</CardDescription>
				</CardHeader>
			</Card>

			<Card className='border-t-amber-500 bg-muted rounded-none py-8 border-x-0 border-b-0'>
				<CardHeader className='text-center space-y-8'>
					<CardTitle className='text-2xl text-amber-500'>
						{t('products.huv-integrated-fiber-laser-marking-machine.advantages.versatileAndDurableMarking.title')}
					</CardTitle>
					<CardDescription className='text-base'>
						{t('products.huv-integrated-fiber-laser-marking-machine.advantages.versatileAndDurableMarking.description')}
					</CardDescription>
				</CardHeader>
			</Card>

			<Card className='border-t-amber-500 bg-muted rounded-none py-8 border-x-0 border-b-0'>
				<CardHeader className='text-center space-y-8'>
					<CardTitle className='text-2xl text-amber-500'>
						{t('products.huv-integrated-fiber-laser-marking-machine.advantages.costEffectiveAndEcoFriendly.title')}
					</CardTitle>
					<CardDescription className='text-base'>
						{t(
							'products.huv-integrated-fiber-laser-marking-machine.advantages.costEffectiveAndEcoFriendly.description'
						)}
					</CardDescription>
				</CardHeader>
			</Card>

			<Separator />

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
	'/products/laser-marking-machines/_layout/uv-laser-marker/huv-integrated-fiber-laser-marking-machine'
)({
	component: ProductDetail
})
