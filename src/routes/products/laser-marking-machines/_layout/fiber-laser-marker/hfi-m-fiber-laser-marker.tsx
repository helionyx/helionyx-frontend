import { useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
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
	const productId = 'hfi-m-fiber-laser-marker'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending) return <ProductDetailPending />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

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
								<CardDescription>{t(product.descriptionKey)}</CardDescription>
								{product.subDescriptionKey && <CardDescription>{t(product.subDescriptionKey)}</CardDescription>}
							</div>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Specifications</CardTitle>
							<Table className='w-full border-collapse text-muted-foreground'>
								<TableHeader>
									<TableRow>
										<TableHead colSpan={2} className='w-1/4 text-center border'>
											Model series
										</TableHead>
										<TableHead colSpan={2} className='text-center border'>
											{t('products.huv-integrated-fiber-laser-marking-machine.name')}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead colSpan={2} className='w-1/4 text-center border bg-muted'>
											Model
										</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.hfiM20.name')}</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.hfiM20.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell rowSpan={7} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.hfiM20.laserParameters')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiM20.laserModel')}</TableCell>
										<TableCell className='text-center border'>{t('models.hfiM20.laserModelValue')}</TableCell>
										<TableCell className='text-center border'>{t('models.huvMW5.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.outputPowerKey')}
										</TableCell>
										<TableCell className='border bg-muted text-center'>{t('models.hfiM20.outputPowerValue')}</TableCell>
										<TableCell className='border bg-muted text-center'>{t('models.huvMW5.outputPowerValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiM20.beamQualityKey')}</TableCell>
										<TableCell colSpan={2} className='border text-center'>
											{t('models.hfiM20.beamQualityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.laserWaveLengthKey')}
										</TableCell>
										<TableCell colSpan={2} className='border bg-muted text-center'>
											{t('models.hfiM20.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiM20.pulseFrequencyKey')}</TableCell>
										<TableCell className='border text-center'>{t('models.hfiM20.pulseFrequencyValue')}</TableCell>
										<TableCell className='border text-center'>{t('models.huvMW10.pulseFrequencyValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiM20.outputPowerStabilityKey')}
										</TableCell>
										<TableCell colSpan={2} className='border text-center'>
											{t('models.hfiM20.outputPowerStabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.workingLifeKey')}
										</TableCell>
										<TableCell colSpan={2} className='border bg-muted text-center'>
											{t('models.hfiM20.workingLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={6} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.huvA20.opticalProperties')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiM20.markingAreaKey')}</TableCell>
										<TableCell colSpan={2} className='border text-center'>
											{t('models.hfiM20.markingAreaValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.engravingDepthKey')}
										</TableCell>
										<TableCell colSpan={2} className='border bg-muted text-center'>
											{t('models.hfiM20.engravingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiM20.engravingSpeedKey')}</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiM20.engravingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.repeatAccuracyKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiM20.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiM20.minimumLineWidthKey')}</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiM20.minimumLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.minimumCharacterHeightKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiM20.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={4} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.hfiM20.useEnvironment')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiM20.coolingMethodKey')}</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiM20.coolingMethodValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.systemPowerSupplyKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiM20.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.hfiM20.temperatureHumidityKey')}
										</TableCell>
										<TableCell className='border text-center' colSpan={2}>
											{t('models.hfiM20.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.oilMistCondensationKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiM20.oilMistCondensationValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={5} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.hfiM20.otherParameters')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiM20.operatingSystemKey')}</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiM20.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.fileFormatKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiM20.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.hfiM20.dimensionsKey')}</TableCell>
										<TableCell colSpan={2} className='text-center border'>
											{t('models.hfiM20.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.packingSizeKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiM20.packingSizeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.hfiM20.totalWeightKey')}
										</TableCell>
										<TableCell colSpan={2} className='text-center border bg-muted'>
											{t('models.hfiM20.totalWeightValue')}
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
					<CardTitle>ADVANTAGES OF {t(product.nameKey).toUpperCase()}</CardTitle>
				</CardHeader>
				<CardContent className='grid md:grid-cols-2 gap-8 '>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/B1.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-m-fiber-laser-marker.advantages.portable.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-m-fiber-laser-marker.advantages.portable.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/B2.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-m-fiber-laser-marker.advantages.costEffective.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-m-fiber-laser-marker.advantages.costEffective.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/B3.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-m-fiber-laser-marker.advantages.canBeDisassembled.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-m-fiber-laser-marker.advantages.canBeDisassembled.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/B4.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-m-fiber-laser-marker.advantages.highQuality.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-m-fiber-laser-marker.advantages.highQuality.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-m-fiber-laser-marker.advantages.precisionMarking.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-m-fiber-laser-marker.advantages.precisionMarking.description')}
							</CardDescription>
						</CardHeader>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-m-fiber-laser-marker.advantages.speed.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-m-fiber-laser-marker.advantages.speed.description')}
							</CardDescription>
						</CardHeader>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hfi-m-fiber-laser-marker.advantages.easyToUse.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hfi-m-fiber-laser-marker.advantages.easyToUse.description')}
							</CardDescription>
						</CardHeader>
					</Card>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className='text-2xl font-semibold mb-4'>Customer Support</CardTitle>
					<CardDescription className='mb-4'>
						Our team of experts is ready to assist you with any questions or concerns you may have about the{' '}
						{t(product.nameKey)}.
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
	'/products/laser-marking-machines/_layout/fiber-laser-marker/hfi-m-fiber-laser-marker'
)({
	component: ProductDetail
})
