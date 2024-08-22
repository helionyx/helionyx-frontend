import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import CustomerSupport from '@/components/customer-support'
import ProductDetailPending from '@/components/product-detail-pending'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductDetail: React.FC = () => {
	const productId = 'hfi-h-model-hanheld-laser-marking-machine'
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
							<CardDescription>{t(product.descriptionKey)}</CardDescription>
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
										<TableHead colSpan={3} className='text-center border'>
											{t(product.nameKey)}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead colSpan={2} className='w-1/4 text-center border bg-muted'>
											Model
										</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.hfiH2030A.name')}</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.hfiH2030S.name')}</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.hfiH2030R.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell rowSpan={7} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.hfiH2030A.laserParameters')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiH2030A.laserModel')}</TableCell>
										<TableCell className='w-1/6 text-center border'>{t('models.hfiH2030A.laserModelValue')}</TableCell>
										<TableCell className='w-1/6 text-center border'>{t('models.hfiH2030S.laserModelValue')}</TableCell>
										<TableCell className='w-1/6 text-center border'>{t('models.hfiH2030R.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiH2030A.outputPowerKey')}
										</TableCell>
										<TableCell className='w-1/6 border bg-muted text-center'>
											{t('models.hfiH2030A.outputPowerValue')}
										</TableCell>
										<TableCell className='w-1/6 border bg-muted text-center'>
											{t('models.hfiH2030S.outputPowerValue')}
										</TableCell>
										<TableCell className='w-1/6 border bg-muted text-center'>
											{t('models.hfiH2030R.outputPowerValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiH2030A.beamQualityKey')}</TableCell>
										<TableCell colSpan={3} className='border text-center'>
											{t('models.hfiH2030A.beamQualityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiH2030A.laserWaveLengthKey')}
										</TableCell>
										<TableCell colSpan={3} className='border bg-muted text-center'>
											{t('models.hfiH2030A.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiH2030A.pulseFrequencyKey')}
										</TableCell>
										<TableCell className='border text-center' colSpan={3}>
											{t('models.hfiH2030A.pulseFrequencyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiH2030A.outputPowerStabilityKey')}
										</TableCell>
										<TableCell colSpan={3} className='border text-center'>
											{t('models.hfiH2030A.outputPowerStabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiH2030A.workingLifeKey')}
										</TableCell>
										<TableCell colSpan={3} className='border bg-muted text-center'>
											{t('models.hfiH2030A.workingLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={6} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.huvA20.opticalProperties')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiH2030A.markingAreaKey')}</TableCell>
										<TableCell colSpan={3} className='border text-center'>
											{t('models.hfiH2030A.markingAreaValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiH2030A.engravingDepthKey')}
										</TableCell>
										<TableCell colSpan={3} className='border bg-muted text-center'>
											{t('models.hfiH2030A.engravingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiH2030A.engravingSpeedKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.hfiH2030A.engravingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiH2030A.repeatAccuracyKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.hfiH2030A.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiH2030A.minimumMarkingLineWidthKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.hfiH2030A.minimumMarkingLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiH2030A.minimumCharacterHeightKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.hfiH2030A.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={3} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.hfiH2030A.useEnvironment')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiH2030A.batteryLifeKey')}</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.hfiH2030A.batteryLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiH2030A.coolingWayKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.hfiH2030A.coolingWayValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiH2030A.systemPowerSupplyKey')}
										</TableCell>
										<TableCell className='border text-center' colSpan={3}>
											{t('models.hfiH2030A.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={4} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.hfiH2030A.otherParameters')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiH2030A.operatingSystemKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.hfiH2030A.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiH2030A.fileFormatKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.hfiH2030A.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiH2030A.dimensionsKey')}</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.hfiH2030A.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiH2030A.machineWeightKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.hfiH2030A.machineWeightValue')}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</section>
					</div>
				</CardContent>
			</Card>

			<Card className='border-x-0'>
				<CardHeader>
					<CardTitle>
						{t('constants.name.appDesc')} {t(product.nameKey).toUpperCase()}
					</CardTitle>
				</CardHeader>
				<CardContent className='grid md:grid-cols-2 gap-8 '>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/01/1675304175162.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.longBatteryLife.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.longBatteryLife.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/01/1675304196166.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.lightAndPortable.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.lightAndPortable.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/01/1675304211243.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.advancedFiberOptic.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.advancedFiberOptic.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/01/1675304225940.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.playingWhileCharging.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.playingWhileCharging.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.unmatchedPrecisionAndSpeed.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t(
									'products.hfi-h-model-hanheld-laser-marking-machine.advantages.unmatchedPrecisionAndSpeed.description'
								)}
							</CardDescription>
						</CardHeader>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.versatileMarkingCapabilities.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t(
									'products.hfi-h-model-hanheld-laser-marking-machine.advantages.versatileMarkingCapabilities.description'
								)}
							</CardDescription>
						</CardHeader>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.easyToUseAndMaintain.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-h-model-hanheld-laser-marking-machine.advantages.easyToUseAndMaintain.description')}
							</CardDescription>
						</CardHeader>
					</Card>
				</CardContent>
			</Card>

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
	'/products/laser-marking-machines/_layout/portable-laser-marker/hfi-h-model-hanheld-laser-marking-machine'
)({
	component: ProductDetail
})
