import { createFileRoute } from '@tanstack/react-router'
import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ProductDetailPending from '@/features/product/components/product-detail-pending'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import RenderTable from '@/features/product/dot-marking-machine/components/render-table'
import { Button } from '@/components/ui/button'
import { Mailbox, Phone } from 'lucide-react'

import dm_01 from '/laser-marking-machines/dot-marking/dm_01.png'
import dm_02 from '/laser-marking-machines/dot-marking/dm_02.png'
import dm_03 from '/laser-marking-machines/dot-marking/dm_03.png'
import dm_04 from '/laser-marking-machines/dot-marking/dm_04.png'

const ProductDetail: React.FC = () => {
	const productId = 'hdo'
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: models, isPending: isModelsPending } = useModelsQuery(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

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
							<CardTitle className='text-2xl font-semibold mb-4'>Product Description</CardTitle>
							<div className='space-y-8'>
								<CardDescription className='text-base'>{product.description}</CardDescription>
								<CardDescription className='text-base'>{product.subDescription}</CardDescription>
								<div className='space-y-4'>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt; High-pressure chain steel base</span>
									</CardDescription>
									<CardDescription>
										good quality, heavy and strong, playing a stable role on industrial pneumatic marking machine;
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt; Inlet filter pressure regulating valve</span>
									</CardDescription>
									<CardDescription>
										adjust the pressure level to fully reduce the impact of upstream pressure fluctuations and ensure
										the stability of the output pressure;
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt; Carbide needles</span>
									</CardDescription>
									<CardDescription>
										Industrial pneumatic marking machines can print mechanical parts and signs of most materials;
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>
											&gt;&gt; Computer control and the new version of WINDOWS operating system
										</span>
									</CardDescription>
									<CardDescription>
										Chinese and English switching, powerful editing function, industrial pneumatic marking machine can
										arbitrarily arrange the required characters and graphics;
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt; Automatically save the marked content</span>
									</CardDescription>
									<CardDescription>
										when the power is abnormally disconnected, the industrial pneumatic marking machine can
										automatically save the pattern being edited and marked;
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt; Support multiple types of fonts</span>
									</CardDescription>
									<CardDescription>SHX font for Auto, CHR for Borland, TTF for Windows;</CardDescription>
								</div>
							</div>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Specifications</CardTitle>
							<RenderTable models={models} product={product} />
						</section>
					</div>
				</CardContent>
			</Card>

			<Card className='border-x-0'>
				<CardHeader>
					<CardTitle>ADVANTAGES OF {product.name.toUpperCase()}</CardTitle>
				</CardHeader>
				<CardContent className='grid md:grid-cols-2 gap-8 '>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img src={dm_01} className='w-full h-full object-cover rounded-t-none bg-transparent' />
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>Automotive machinery industry</CardTitle>
							<CardDescription className='text-base'>
								bearings, steel sleeves, piston rings, engines, machine tools, etc .;
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img src={dm_02} className='w-full h-full object-cover rounded-t-none bg-transparent' />
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>Hardware equipment industry</CardTitle>
							<CardDescription className='text-base'>
								tools, measuring tools, cutting tools, sanitary ware, tableware, locks, knives and scissors, medical
								equipment, fitness equipment, stainless steel products, etc .;
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img src={dm_03} className='w-full h-full object-cover rounded-t-none bg-transparent' />
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>Decoration label industry</CardTitle>
							<CardDescription className='text-base'>
								buttons, luggage buckles, belt buckles, gold and silver jewelry, signs, badges, attendance cards,
								business cards, photos, leather bags, belts, pens and pen cases, collectors, artworks, etc
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img src={dm_04} className='w-full h-full object-cover rounded-t-none bg-transparent' />
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>Electronic communication industry</CardTitle>
							<CardDescription className='text-base'>
								keyboards, electronic components, home appliance panels, optical cables, cables, etc .;
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>Instrument and glasses industry</CardTitle>
							<CardDescription className='text-base'>
								metal watch cases, watch bottoms, spectacle frames, instrument panels and other areas that require high
								depth, smoothness and fineness.
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
						{product.name}.
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
					slug='/products/dot-marking-machines'
				/>
			</div>
		</>
	)
}

export const Route = createFileRoute('/products/dot-marking-machines/_layout/hdo-marking-machine/hdo')({
	component: ProductDetail
})
