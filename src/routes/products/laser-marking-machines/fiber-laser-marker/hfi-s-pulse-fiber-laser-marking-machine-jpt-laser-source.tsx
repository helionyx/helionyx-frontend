import { useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import hfi_s_1 from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-S Pulse Fiber Laser Marking Machine (JPT Laser Source)/Hfi-s-1.png'
import hfi_s_2 from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-S Pulse Fiber Laser Marking Machine (JPT Laser Source)/Hfi-s-2.png'
import hfi_s_3 from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-S Pulse Fiber Laser Marking Machine (JPT Laser Source)/Hfi-s-3.png'
import CustomerSupport from '@/components/customer-support'
import ProductDetailPending from '@/components/product-detail-pending'
import ProductSample from '@/components/product-sample'
import ProductScopeApplication from '@/components/product-scope-application'
import RelatedProducts from '@/components/related-products'
import RenderProductImage from '@/components/render-product-image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { createFileRoute } from '@tanstack/react-router'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductDetail: React.FC = () => {
	const productId = 'hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending) return <ProductDetailPending />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const features = t(product.featuresKey, { returnObjects: true }) as string[]

	const advantages = t('products.hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source.advantages', {
		returnObjects: true
	})
	const advantagesList = Array.from(Object.values(advantages))

	const applicationImages = [
		{
			image: hfi_s_1,
			imageAlt: 'HFI-S Pulse Fiber Laser Marking Machine (JPT Laser Source)'
		}
	]

	const sampleImages = [
		{
			image: hfi_s_2,
			imageAlt: 'HFI-S Pulse Fiber Laser Marking Machine (JPT Laser Source)'
		},
		{
			image: hfi_s_3,
			imageAlt: 'HFI-S Pulse Fiber Laser Marking Machine (JPT Laser Source)'
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
							<CardTitle className='text-2xl md:text-3xl font-bold mb-4'>{t(product.nameKey)}</CardTitle>
							<div className='space-y-4'>
								<CardDescription className='text-base'>
									{t('products.hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source.description')}
								</CardDescription>
								<CardDescription className='text-base'>
									{t('products.hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source.subDescription')}
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
									{t('products.hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source.description')}
								</CardDescription>
								<CardDescription className='text-base'>
									{t('products.hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source.subDescription')}
								</CardDescription>
								<div>
									{advantagesList.map((advantage: { title: string; description: string }, index: number) => (
										<CardDescription key={index} className='text-base'>
											<span className='text-amber-500'>&gt;&gt;</span>{' '}
											<span>
												{advantage.title}: {advantage.description}
											</span>
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
										<TableHead className='border'>{t('models.hfiS20.name')}</TableHead>
										<TableHead className='border'>{t('models.hfiS30.name')}</TableHead>
										<TableHead className='border'>{t('models.hfiS50.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hfiS20.laserModel')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hfiS20.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hfiS30.laserModelValue')}</TableCell>
										<TableCell className='bg-muted border'>{t('models.hfiS50.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.outputPowerKey')}</TableCell>
										<TableCell className='border'>{t('models.hfiS20.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hfiS30.outputPowerValue')}</TableCell>
										<TableCell className='border'>{t('models.hfiS50.outputPowerValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hfiS20.beamQualityKey')}</TableCell>
										<TableCell className='bg-muted border' colSpan={3}>
											{t('models.hfiS20.beamQualityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.pulseFrequencyKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiS20.pulseFrequencyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiS20.laserWaveLengthKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiS20.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.outputPowerStabilityKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiS20.outputPowerStabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiS20.designLifeKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiS20.designLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.markingRangeKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiS20.markingRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiS20.markingDepthKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiS20.markingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.markingSpeedKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiS20.markingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiS20.repeatAccuracyKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiS20.repeatAccuracyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.minimumLineWidthKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiS20.minimumLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiS20.minimumCharacterHeightKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiS20.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.coolingModeKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiS20.coolingModeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiS20.systemPowerSupplyKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiS20.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.temperatureHumidityKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiS20.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiS20.oilMistCondensationKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiS20.oilMistCondensationValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.operatingSystemKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiS20.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiS20.fileFormatKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiS20.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hfiS20.packingSizeKey')}</TableCell>
										<TableCell className='border' colSpan={3}>
											{t('models.hfiS20.packingSizeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hfiS20.totalWeightKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={3}>
											{t('models.hfiS20.totalWeightValue')}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</section>
					</div>
				</CardContent>
			</Card>

			{/* Application section */}
			<ProductScopeApplication title={t('constants.name.app')} images={applicationImages} />

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
	'/products/laser-marking-machines/fiber-laser-marker/hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source'
)({
	component: ProductDetail
})
