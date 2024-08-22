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
	const productId = 'hcl-laser-cleaning-machine'
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
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/1-8.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hcl-laser-cleaning-machine.advantages.ecoFriendly.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hcl-laser-cleaning-machine.advantages.ecoFriendly.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/2-7.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hcl-laser-cleaning-machine.advantages.easyToHandle.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hcl-laser-cleaning-machine.advantages.easyToHandle.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/3-8.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hcl-laser-cleaning-machine.advantages.highCleaningPrecision.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hcl-laser-cleaning-machine.advantages.highCleaningPrecision.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/4-7.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hcl-laser-cleaning-machine.advantages.systemStability.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hcl-laser-cleaning-machine.advantages.systemStability.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hcl-laser-cleaning-machine.advantages.sayGoodbyeToTraditionalCleaningMethods.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hcl-laser-cleaning-machine.advantages.sayGoodbyeToTraditionalCleaningMethods.description')}
							</CardDescription>
						</CardHeader>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hcl-laser-cleaning-machine.advantages.powerAndPrecisionInOneMachine.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hcl-laser-cleaning-machine.advantages.powerAndPrecisionInOneMachine.description')}
							</CardDescription>
						</CardHeader>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hcl-laser-cleaning-machine.advantages.experienceTheFutureOfCleaningTechnology.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t(
									'products.hcl-laser-cleaning-machine.advantages.experienceTheFutureOfCleaningTechnology.description'
								)}
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
	'/products/laser-cleaning-machines/_layout/hcl-laser-cleaning-machine/hcl-laser-cleaning-machine'
)({
	component: ProductDetail
})
