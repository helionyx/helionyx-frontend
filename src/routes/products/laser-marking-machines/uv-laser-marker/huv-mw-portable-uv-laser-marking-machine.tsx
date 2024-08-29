import { useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import image_3 from '@/assets/laser-marking-machines/uv-laser-marker/HUV-MW Portable UV Laser Marking Machine/Can-be-3.png'
import image_2 from '@/assets/laser-marking-machines/uv-laser-marker/HUV-MW Portable UV Laser Marking Machine/Cost-eff-2.png'
import image_1 from '@/assets/laser-marking-machines/uv-laser-marker/HUV-MW Portable UV Laser Marking Machine/High-pro-1.png'
import image_4 from '@/assets/laser-marking-machines/uv-laser-marker/HUV-MW Portable UV Laser Marking Machine/High-qua-4.png'
import CustomerSupport from '@/components/customer-support'
import ProductBenefits from '@/components/product-benefit'
import ProductDetailPending from '@/components/product-detail-pending'
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
	const productId = 'huv-mw-portable-uv-laser-marking-machine'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending) return <ProductDetailPending />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const productName = t('products.huv-mw-portable-uv-laser-marking-machine.name').toUpperCase()
	const benefitsTitle = t('constants.name.appDesc') + ' ' + productName

	const features = t('products.huv-mw-portable-uv-laser-marking-machine.features', { returnObjects: true }) as string[]

	const benefits = [
		{
			title: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.highProductivity.title'),
			description: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.highProductivity.description'),
			image: image_1,
			imageAlt: 'High-pro-1.png'
		},
		{
			title: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.costEffective.title'),
			description: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.costEffective.description'),
			image: image_2,
			imageAlt: 'Cost-eff-2.png'
		},
		{
			title: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.canBeDisassembled.title'),
			description: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.canBeDisassembled.description'),
			image: image_3,
			imageAlt: 'Can-be-3.png'
		},
		{
			title: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.highQualityLightSource.title'),
			description: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.highQualityLightSource.description'),
			image: image_4,
			imageAlt: 'High-qua-4.png'
		},
		{
			title: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.highPrecisionMarking.title'),
			description: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.highPrecisionMarking.description')
		},
		{
			title: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.portabilityAndVersatility.title'),
			description: t(
				'products.huv-mw-portable-uv-laser-marking-machine.advantages.portabilityAndVersatility.description'
			)
		},
		{
			title: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.userFriendlyDesign.title'),
			description: t('products.huv-mw-portable-uv-laser-marking-machine.advantages.userFriendlyDesign.description')
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
							<CardTitle className='text-2xl font-semibold mb-4'>{t('constants.name.prdSpec')}</CardTitle>
							<Table className='w-full border-collapse text-muted-foreground'>
								<TableHeader>
									<TableRow>
										<TableHead colSpan={2} className='w-1/4 text-center border'>
											Model series
										</TableHead>
										<TableHead colSpan={3} className='text-center border'>
											{t('products.huv-integrated-fiber-laser-marking-machine.name')}
										</TableHead>
									</TableRow>
									<TableRow>
										<TableHead colSpan={2} className='w-1/4 text-center border bg-muted'>
											Model
										</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.huvMW3.name')}</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.huvMW5.name')}</TableHead>
										<TableHead className='text-center border bg-muted'>{t('models.huvMW10.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell rowSpan={8} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.huvMW3.laserParameters')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.huvMW3.laserModelKey')}</TableCell>
										<TableCell className='w-1/6 text-center border'>{t('models.huvMW3.laserModelValue')}</TableCell>
										<TableCell className='w-1/6 text-center border'>{t('models.huvMW5.laserModelValue')}</TableCell>
										<TableCell className='w-1/6 text-center border'>{t('models.huvMW10.laserModelValue')}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.outputPowerKey')}
										</TableCell>
										<TableCell className='w-1/6 border bg-muted text-center'>
											{t('models.huvMW3.outputPowerValue')}
										</TableCell>
										<TableCell className='w-1/6 border bg-muted text-center'>
											{t('models.huvMW5.outputPowerValue')}
										</TableCell>
										<TableCell className='w-1/6 border bg-muted text-center'>
											{t('models.huvMW10.outputPowerValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.huvMW3.beamQualityKey')}</TableCell>
										<TableCell colSpan={3} className='border text-center'>
											{t('models.huvMW3.beamQualityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.laserWaveLengthKey')}
										</TableCell>
										<TableCell colSpan={3} className='border bg-muted text-center'>
											{t('models.huvMW3.laserWaveLengthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.huvMW3.pulseFrequencyKey')}</TableCell>
										<TableCell className='border text-center' colSpan={2}>
											{t('models.huvMW3.pulseFrequencyValue')}
										</TableCell>
										<TableCell className='border text-center' colSpan={2}>
											{t('models.huvMW10.pulseFrequencyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.exitBeamDiameterKey')}
										</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={2}>
											{t('models.huvMW10.exitBeamDiameterValue')}
										</TableCell>
										<TableCell className='border bg-muted text-center' colSpan={2}>
											{t('models.huvMW10.exitBeamDiameterValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.huvMW3.outputPowerStabilityKey')}
										</TableCell>
										<TableCell colSpan={3} className='border text-center'>
											{t('models.huvMW3.outputPowerStabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.designLifeKey')}
										</TableCell>
										<TableCell colSpan={3} className='border bg-muted text-center'>
											{t('models.huvMW3.designLifeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={6} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.huvA20.opticalProperties')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.huvMW3.markingRangeKey')}</TableCell>
										<TableCell colSpan={3} className='border text-center'>
											{t('models.huvMW3.markingRangeValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.engravingDepthKey')}
										</TableCell>
										<TableCell colSpan={3} className='border bg-muted text-center'>
											{t('models.huvMW3.engravingDepthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.huvMW3.engravingSpeedKey')}</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.huvMW3.engravingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.repeatabilityKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.huvMW3.repeatabilityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.huvMW3.minimumMarkerLineWidthKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.huvMW3.minimumMarkerLineWidthValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.minimumCharacterHeightKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.huvMW3.minimumCharacterHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={4} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.huvMW3.useEnvironment')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.huvMW3.coolingMethodKey')}</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.huvMW3.coolingMethodValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.systemPowerSupplyKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.huvMW3.systemPowerSupplyValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>
											{t('models.huvMW3.temperatureHumidityKey')}
										</TableCell>
										<TableCell className='border text-center' colSpan={3}>
											{t('models.huvMW3.temperatureHumidityValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.oilMistCondensationKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.huvMW3.oilMistCondensationValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell rowSpan={4} className='font-medium w-1/4 border text-center align-top p-4'>
											{t('models.huvMW3.otherParameters')}
										</TableCell>
										<TableCell className='w-1/4 border text-center'>{t('models.huvMW3.operatingSystemKey')}</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.huvMW3.operatingSystemValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.fileFormatKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.huvMW3.fileFormatValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border text-center'>{t('models.huvMW3.dimensionsKey')}</TableCell>
										<TableCell colSpan={3} className='text-center border'>
											{t('models.huvMW3.dimensionsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='w-1/4 border bg-muted text-center'>
											{t('models.huvMW3.totalWeightKey')}
										</TableCell>
										<TableCell colSpan={3} className='text-center border bg-muted'>
											{t('models.huvMW3.totalWeightValue')}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</section>
					</div>
				</CardContent>
			</Card>

			{/* Product benefits section */}
			<ProductBenefits title={benefitsTitle} benefits={benefits} />

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
	'/products/laser-marking-machines/uv-laser-marker/huv-mw-portable-uv-laser-marking-machine'
)({
	component: ProductDetail
})
