import { useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import hdo_1 from '@/assets/laser-marking-machines/dot-marking/HDO/Hdo-1.png'
import hdo_2 from '@/assets/laser-marking-machines/dot-marking/HDO/Hdo-2.png'
import hdo_3 from '@/assets/laser-marking-machines/dot-marking/HDO/Hdo-3.png'
import hdo_4 from '@/assets/laser-marking-machines/dot-marking/HDO/Hdo-4.png'
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
	const productId = 'hdo'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending) return <ProductDetailPending />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const advantages = t('products.hdo.advantages', {
		returnObjects: true
	})
	const advantagesList: { title: string; description: string }[] = Array.from(Object.values(advantages))

	const productName = t('products.hdo.name').toUpperCase()
	const benefitsTitle = t('constants.name.appDesc') + ' ' + productName

	const benefits = [
		{
			title: t('products.hdo.advantages.highQualitySteelBase.title'),
			description: t('products.hdo.advantages.highQualitySteelBase.description'),
			image: hdo_1,
			imageAlt: 'High Quality Steel Base'
		},
		{
			title: t('products.hdo.advantages.inletFilterPressureRegulatingValve.title'),
			description: t('products.hdo.advantages.inletFilterPressureRegulatingValve.description'),
			image: hdo_2,
			imageAlt: 'Inlet Filter Pressure Regulating Valve'
		},
		{
			title: t('products.hdo.advantages.carbideNeedles.title'),
			description: t('products.hdo.advantages.carbideNeedles.description'),
			image: hdo_3,
			imageAlt: 'Carbide Needles'
		},
		{
			title: t('products.hdo.advantages.computerControl.title'),
			description: t('products.hdo.advantages.computerControl.description'),
			image: hdo_4,
			imageAlt: 'Computer Control'
		},
		{
			title: t('products.hdo.advantages.autoSaving.title'),
			description: t('products.hdo.advantages.autoSaving.description')
		},
		{
			title: t('products.hdo.advantages.supportMultipleFonts.title'),
			description: t('products.hdo.advantages.supportMultipleFonts.description')
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
										<TableHead className='border'>{t('models.hdo23.name')}</TableHead>
										<TableHead className='border'>{t('models.hdo12.name')}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hdo23.outputPowerKey')}</TableCell>
										<TableCell className='bg-muted border' colSpan={2}>
											{t('models.hdo23.outputPowerValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hdo23.printRageKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hdo23.printRageValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='bg-muted border'>{t('models.hdo23.largestPrintHardnessKey')}</TableCell>
										<TableCell className='bg-muted border' colSpan={2}>
											{t('models.hdo23.largestPrintHardnessValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hdo23.printHeadLiftingHeightKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hdo23.printHeadLiftingHeightValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hdo23.minimumCharacterKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hdo23.minimumCharacterValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hdo23.compressedAirPressureKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hdo23.compressedAirPressureValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hdo23.voltageRequirementsKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hdo23.voltageRequirementsValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hdo23.environmentTempKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hdo23.environmentTempValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hdo23.printingSpeedKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hdo23.printingSpeedValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border'>{t('models.hdo23.systemResetNumberKey')}</TableCell>
										<TableCell className='border' colSpan={2}>
											{t('models.hdo23.systemResetNumberValue')}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className='border bg-muted'>{t('models.hdo23.continuousWorkingTimeKey')}</TableCell>
										<TableCell className='border bg-muted' colSpan={2}>
											{t('models.hdo23.continuousWorkingTimeValue')}
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

export const Route = createFileRoute('/products/dot-marking-machines/hdo-marking-machine/hdo')({
	component: ProductDetail
})
