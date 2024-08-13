import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ProductDetailPending from '@/features/product/components/product-detail-pending'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import RenderTable from '@/features/product/laser-marking-machines/components/render-table'
import { Button } from '@/components/ui/button'
import { Mailbox, Phone } from 'lucide-react'

const ProductDetail: React.FC = () => {
	const productId = 'hco-fc-co2-flying-laser-marking-machine-coherent-laser-source'
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
										<span className='text-amber-500'>&gt;&gt; Marking speed up to 200 meters per minute</span>
									</CardDescription>
									<CardDescription>
										This is the industry’s fastest marking laser coding system, with a marking speed of up to 200 m/min
										(single line of 2MM-high numbers and letters), which can be used in medium-speed or high-speed
										production lines.
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt; Reliable and durable CO2 laser source</span>
									</CardDescription>
									<CardDescription>
										Using COHENRENT CO2 metal radio frequency laser source, the laser power density is uniform, the
										output light power is stable, there is no light leakage, anti-interference and there will be no
										shadows and virtual disconnection on special materials.
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt; Compact design and flexible configuration</span>
									</CardDescription>
									<CardDescription>
										This model uses compact laser printer marking head to achieve simple integration to reduce
										installation costs and improve positioning flexibility.
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>
											&gt;&gt; Flexible installation way, convenient installation position adjustment
										</span>
									</CardDescription>
									<CardDescription>
										The flying model is specially designed for high-speed production lines, which can be flexibly
										combined with production lines for installation and use. The frame can be moved up and down and left
										and right to adjust, the marking head can also be rotated 360° for marking.
									</CardDescription>
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

			{/* Application section */}
			<Card>
				<CardHeader>
					<CardTitle className='text-amber-500'>Scope of application</CardTitle>
				</CardHeader>
				<CardContent>
					<section className='flex flex-col'>
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-Sample-pictures.jpg' />
					</section>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className='text-amber-500'>Sample pictures</CardTitle>
				</CardHeader>
				<CardContent>
					<section className='flex flex-col'>
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/Fiber-Scope-of-application.jpg' />
					</section>
				</CardContent>
			</Card>

			{/* Customer support section */}
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
					slug='/products/laser-marking-machines'
				/>
			</div>
		</>
	)
}

export const Route = createFileRoute(
	'/products/laser-marking-machines/_layout/co2-laser-marker/hco-fc-co2-flying-laser-marking-machine-coherent-laser-source'
)({
	component: ProductDetail
})
