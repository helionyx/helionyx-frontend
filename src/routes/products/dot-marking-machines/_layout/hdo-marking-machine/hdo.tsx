import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import ProductDetailPending from '@/features/product/components/product-detail-pending'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { useTranslation } from 'react-i18next'

import CustomerSupport from '@/components/customer-support'
import dm_01 from '@/assets/laser-marking-machines/dot-marking/dm_01.png'
import dm_02 from '@/assets/laser-marking-machines/dot-marking/dm_02.png'
import dm_03 from '@/assets/laser-marking-machines/dot-marking/dm_03.png'
import dm_04 from '@/assets/laser-marking-machines/dot-marking/dm_04.png'

const ProductDetail: React.FC = () => {
	const productId = 'hdo'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: models, isPending: isModelsPending } = useModelsQuery(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	const { t } = useTranslation()

	if (isProductPending || isModelsPending) return <ProductDetailPending />
	if (!product || !models) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	const advantages = t('products.hdo.advantages', {
		returnObjects: true
	})
	const advantagesList: { title: string; description: string }[] = Array.from(Object.values(advantages))

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
							<CardTitle className='text-2xl font-semibold mb-4'>Product Specifications</CardTitle>
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

			<Card className='border-x-0'>
				<CardHeader>
					<CardTitle>ADVANTAGES OF {t(product.nameKey).toUpperCase()}</CardTitle>
				</CardHeader>
				<CardContent className='grid md:grid-cols-2 gap-8 '>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img src={dm_01} className='w-full h-full object-cover rounded-t-none bg-transparent' />
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hdo.advantages.highQualitySteelBase.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hdo.advantages.highQualitySteelBase.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img src={dm_02} className='w-full h-full object-cover rounded-t-none bg-transparent' />
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>
								{t('products.hdo.advantages.inletFilterPressureRegulatingValve.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hdo.advantages.inletFilterPressureRegulatingValve.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img src={dm_03} className='w-full h-full object-cover rounded-t-none bg-transparent' />
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>{t('products.hdo.advantages.carbideNeedles.title')}</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hdo.advantages.carbideNeedles.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img src={dm_04} className='w-full h-full object-cover rounded-t-none bg-transparent' />
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>{t('products.hdo.advantages.computerControl.title')}</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hdo.advantages.computerControl.description')}
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>{t('products.hdo.advantages.autoSaving.title')}</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hdo.advantages.autoSaving.description')}
							</CardDescription>
						</CardHeader>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>
								{t('products.hdo.advantages.supportMultipleFonts.title')}
							</CardTitle>
							<CardDescription className='text-base'>
								{t('products.hdo.advantages.supportMultipleFonts.description')}
							</CardDescription>
						</CardHeader>
					</Card>
				</CardContent>
			</Card>

			{/* Customer support section */}
			<CustomerSupport name={product.nameKey} className='mt-8' />

			{/* Related products section */}
			<div className='mt-8'>
				<RelatedProducts
					isRelatedPending={isRelatedPending}
					relatedProducts={relatedProducts}
					slug='/products/dot-marking-machines'
				/>
			</div>
		</>
	)
}

export const Route = createFileRoute('/products/dot-marking-machines/_layout/hdo-marking-machine/hdo')({
	component: ProductDetail
})
