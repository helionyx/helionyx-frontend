import { useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import CustomerSupport from '@/components/customer-support'
import ProductDetailPending from '@/components/product-detail-pending'
import RelatedProducts from '@/components/related-products'
import RenderProductImage from '@/components/render-product-image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { createFileRoute } from '@tanstack/react-router'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductDetail: React.FC = () => {
	const productId = 'hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending) return <ProductDetailPending />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const features = t(product.featuresKey, { returnObjects: true }) as string[]

	const advantages = t('products.hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source.advantages', {
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
							<CardTitle className='text-2xl md:text-3xl font-bold mb-4'>{t(product.nameKey)}</CardTitle>
							<div className='space-y-4'>
								<CardDescription className='text-base'>
									{t('products.hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source.description')}
								</CardDescription>
								<CardDescription className='text-base'>
									{t('products.hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source.subDescription')}
								</CardDescription>
							</div>
							<div className='my-6'>
								<CardTitle className='text-xl font-semibold mb-3'>Key Features:</CardTitle>
								<ul className='space-y-2'>
									{features.map((feature: string, index: number) => (
										<li key={index} className='flex items-center'>
											<Badge className='mr-2 mt-1 bg-green-500 flex-shrink-0'>{index + 1}</Badge>
											<CardDescription>{feature}</CardDescription>
										</li>
									))}
								</ul>
							</div>
							<Button className='w-full text-xl bg-amber-500 hover:bg-amber-600 transition-colors'>
								<ShoppingCart className='w-6 h-6 mr-2' />
								<span>Get a Quote</span>
							</Button>
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
								<CardDescription className='text-base'>
									{t('products.hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source.description')}
								</CardDescription>
								<CardDescription className='text-base'>
									{t('products.hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source.subDescription')}
								</CardDescription>
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
										<TableHead className='border bg-muted font-semibold'>Model Series</TableHead>
										<TableHead className='border bg-muted font-semibold' colSpan={3}>
											{t(product.nameKey)}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead className='border'>Model</TableHead>
										<TableHead className='border'>{t('models.hfiF20.name')}</TableHead>
										<TableHead className='border'>{t('models.hfiF30.name')}</TableHead>
										<TableHead className='border'>{t('models.hfiF50.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hfiF20.laserModel')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hfiF20.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hfiF30.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hfiF50.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.outputPowerKey')}</TableCell>
										<TableCell className='border'>{t('models.hfiF20.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hfiF30.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hfiF50.outputPowerValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hfiF20.beamQualityKey')}</TableCell>
										<TableCell className='bg-muted border' colSpan={3}>
											{t('models.hfiF20.beamQualityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.pulseFrequencyKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiF20.pulseFrequencyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiF20.laserWaveLengthKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiF20.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.outputPowerStabilityKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiF20.outputPowerStabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiF20.designLifeKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiF20.designLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.markingRangeKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiF20.markingRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiF20.markingDepthKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiF20.markingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.markingSpeedKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiF20.markingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiF20.repeatAccuracyKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiF20.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.minimumLineWidthKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiF20.minimumLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiF20.minimumCharacterHeightKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiF20.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.coolingModeKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiF20.coolingModeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiF20.systemPowerSupplyKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiF20.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.temperatureHumidityKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiF20.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiF20.oilMistCondensationKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiF20.oilMistCondensationValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.operatingSystemKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiF20.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiF20.fileFormatKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiF20.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiF20.packingSizeKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiF20.packingSizeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiF20.totalWeightKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiF20.totalWeightValue')}
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
							src='https://www.mac-laser.com/wp-content/uploads/2022/04/KX-C-Fiber-laser_02.jpg'
							className='w-full h-full object-cover'
						/>
						<img
							src='https://www.mac-laser.com/wp-content/uploads/2022/04/KX-C-Fiber-laser_03.jpg'
							className='w-full h-full object-cover'
						/>
					</section>
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
	'/products/laser-marking-machines/_layout/fiber-laser-marker/hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source'
)({
	component: ProductDetail
})
