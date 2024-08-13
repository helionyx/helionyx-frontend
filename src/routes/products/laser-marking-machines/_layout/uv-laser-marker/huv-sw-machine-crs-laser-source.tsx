import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import ProductDetailPending from '@/features/product/components/product-detail-pending'
import RenderTable from '@/features/product/laser-marking-machines/components/render-table'
import { createFileRoute } from '@tanstack/react-router'
import { Mailbox, Phone } from 'lucide-react'
import React from 'react'

const ProductDetail: React.FC = () => {
	const productId = 'huv-sw-machine-crs-laser-source'
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
								<div>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt;</span>{' '}
										<span>
											The output laser spot is small and the marking line is thin, which is more suitable for some finer
											graphic marks;
										</span>
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt;</span>{' '}
										<span>
											The laser beam is in good quality and the output laser has high stability, which brings users an
											exquisite and beautiful marking effect;
										</span>
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt;</span>{' '}
										<span>High laser frequency, faster marking speed;</span>
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt;</span>{' '}
										<span>The whole machine has stable performance, small size and low power consumption.</span>
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
					<CardTitle>Application field</CardTitle>
				</CardHeader>
				<CardContent>
					<section className='flex flex-col justify-center'>
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-1.jpg' alt='' />
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-2.jpg' alt='' />
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-3.jpg' alt='' />
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-4.jpg' alt='' />
						<img src='https://www.mac-laser.com/wp-content/uploads/2022/04/UV-laser-marking-machine-5.jpg' alt='' />
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
	'/products/laser-marking-machines/_layout/uv-laser-marker/huv-sw-machine-crs-laser-source'
)({
	component: ProductDetail,
	pendingComponent: ProductDetailPending
})
