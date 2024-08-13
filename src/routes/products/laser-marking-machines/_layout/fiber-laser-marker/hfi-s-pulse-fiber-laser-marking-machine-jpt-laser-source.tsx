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
	const productId = 'hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source'
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
								<CardDescription className='text-base'>
									The HFI-S series fiber laser marking machine of Helionyx is an all-round marking equipment. Because of
									its strong adaptability, low maintenance and no consumables during the marking process,{' '}
									<span className='text-amber-500'>
										it is often used in the metal and plastic processing industries.
									</span>
								</CardDescription>
								<CardDescription className='text-base'>
									HFI-S Fiber series products use 1064nm wavelength laser, which is suitable for various metal materials
									such as iron, copper, aluminum, gold, silver, and some non-metal materials such as PC, ABS, PVC,
									PC+ABS. It is widely used in 3C, auto parts, electronic components, integrated circuits (PC),
									electrical appliances, precision equipment, hardware products, building materials, clocks and watches,
									jewelry, craft gifts and other industries.
								</CardDescription>
								<div>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt;</span>{' '}
										<span>Appearance: integrated cabinet, small footprint;</span>
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt;</span>{' '}
										<span>
											Performance: It has perfect laser characteristics and good pulse shape control ability. The seed
											source adopts waveform compensation, the amplified pulse deformation is corrected, and the output
											pulse energy is higher;
										</span>
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt;</span>{' '}
										<span>
											Control: use industrial computer with keyboard, mouse and LCD, similar to desktop computer
											operation mode, application is simple, safe, accurate and easy to use;
										</span>
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt;</span>{' '}
										<span>
											Software: Full English interface based on Windows system, convenient for daily application,
											intuitive content;
										</span>
									</CardDescription>
									<CardDescription className='text-base'>
										<span className='text-amber-500'>&gt;&gt;</span>{' '}
										<span>
											Service: This series of marking machines are flexible and easy to operate. Mac laser provides
											reliable after-sales service to ensure your use needs.
										</span>
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
						<img
							src='https://www.mac-laser.com/wp-content/uploads/2022/04/KX-C-Fiber-laser_01.jpg'
							className='w-full h-full object-cover'
						/>
					</section>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className='text-amber-500'>Sample pictures</CardTitle>
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
	'/products/laser-marking-machines/_layout/fiber-laser-marker/hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source'
)({
	component: ProductDetail
})
