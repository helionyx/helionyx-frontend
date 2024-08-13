import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ProductDetailPending from '@/features/product/components/product-detail-pending'
import RenderTable from '@/features/product/laser-marking-machines/components/render-table'
import { Separator } from '@radix-ui/react-separator'
import { createFileRoute } from '@tanstack/react-router'
import { Mailbox, Phone } from 'lucide-react'
import React from 'react'

const ProductDetail: React.FC = () => {
	const productId = 'huv-integrated-fiber-laser-marking-machine'
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
							<CardDescription>{product.description}</CardDescription>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Specifications</CardTitle>
							<RenderTable models={models} product={product} />
						</section>
					</div>
				</CardContent>
			</Card>

			<Separator />

			<Card className='border-t-amber-500 bg-muted rounded-none py-8 border-x-0 border-b-0'>
				<CardHeader className='text-center space-y-8'>
					<CardTitle className='text-2xl text-amber-500'>Fast and Accurate Laser Marking</CardTitle>
					<CardDescription className='text-base'>
						With its advanced technology and precise control system, the UV-R Serial UV Flying Laser Marking Machine is
						capable of producing high-quality laser marking at an incredible speed. Its flying marking mode enables the
						machine to work continuously, even while the product is in motion. With an accuracy of up to 0.001mm, this
						machine can produce complex designs and patterns on a wide range of materials with ease.
					</CardDescription>
				</CardHeader>
			</Card>

			<Card className='border-t-amber-500 bg-muted rounded-none py-8 border-x-0 border-b-0'>
				<CardHeader className='text-center space-y-8'>
					<CardTitle className='text-2xl text-amber-500'>Versatile and Durable Machine</CardTitle>
					<CardDescription className='text-base'>
						The UV-R Serial UV Flying Laser Marking Machine is versatile and can be used to mark a wide range of
						materials, including metals, plastics, glass, and ceramics. Its durable construction ensures that it can
						withstand heavy usage and still deliver consistent results. The machine is also easy to maintain, reducing
						downtime and saving you money in the long run.
					</CardDescription>
				</CardHeader>
			</Card>

			<Card className='border-t-amber-500 bg-muted rounded-none py-8 border-x-0 border-b-0'>
				<CardHeader className='text-center space-y-8'>
					<CardTitle className='text-2xl text-amber-500'>Cost-Effective and Eco-Friendly Solution</CardTitle>
					<CardDescription className='text-base'>
						The UV-R Serial UV Flying Laser Marking Machine is a cost-effective solution for businesses of all sizes.
						Its fast and efficient operation means that you can produce more in less time, reducing labor costs and
						increasing productivity. Additionally, the machine’s eco-friendly design means that it produces no harmful
						emissions or waste, making it an environmentally conscious choice.
					</CardDescription>
				</CardHeader>
			</Card>

			<Separator />

			<Card className='mb-8'>
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
	'/products/laser-marking-machines/_layout/uv-laser-marker/huv-integrated-fiber-laser-marking-machine'
)({
	component: ProductDetail
})
