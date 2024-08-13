import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import RelatedProducts from '@/components/related-products'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import ProductDetailPending from '@/features/product/components/product-detail-pending'
import RenderTable from '@/features/product/laser-cutting-machines/components/render-table'
import { createFileRoute } from '@tanstack/react-router'
import { Mailbox, Phone } from 'lucide-react'
import React from 'react'

const ProductDetail: React.FC = () => {
	const productId = 'hcn-c80-cnc-laser-cutting-machine'
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

			<Card className='border-x-0'>
				<CardHeader>
					<CardTitle>ADVANTAGES OF {product.name.toUpperCase()}</CardTitle>
				</CardHeader>
				<CardContent className='grid md:grid-cols-2 gap-8 '>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/1-9.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>High productivity</CardTitle>
							<CardDescription className='text-base'>
								Using online high-speed non-stop laser marking, high production efficiency, can work under static and
								high-speed flow of the production line
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/2-8.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>Cost-effective</CardTitle>
							<CardDescription className='text-base'>
								The whole machine is small, flexible, convenient, powerful, and not limited by the use of space
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/3-9.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>Can be disassembled at will</CardTitle>
							<CardDescription className='text-base'>
								Compact design, the whole machine is small and portable, and the optical path of the column can be
								disassembled at will
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='max-w-2xl mx-auto bg-muted p-0 rounded-none shadow-sm overflow-hidden space-y-4 h-[630px] hover:border-amber-500 hover:shadow-md transition-shadow'>
						<CardHeader className='p-0 relative overflow-hidden rounded-none flex justify-center'>
							<img
								src='https://www.mac-laser.com/wp-content/uploads/2023/02/4-8.webp'
								alt=''
								className='w-full h-full object-cover rounded-t-none bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-8 h-full bg-muted'>
							<CardTitle className='text-amber-500'>High quality light source</CardTitle>
							<CardDescription className='text-base'>
								Using advanced fiber lasers, the output beam quality is good and the reliability is high
							</CardDescription>
						</CardContent>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>Precision Cutting with MCT-6580</CardTitle>
							<CardDescription className='text-base'>
								The MCT-6580 CNC Laser Cutting Machine is the perfect tool for precision cutting. With its high-quality
								laser beam, this machine can cut through a wide range of materials, including metal, wood, and plastic.
								Its advanced software allows for complex cutting designs, ensuring that you get the exact cut you need
								every time.
							</CardDescription>
						</CardHeader>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>User-Friendly Design of MCT-6580</CardTitle>
							<CardDescription className='text-base'>
								MCT-6580 CNC Laser Cutting Machine is designed with the user in mind. Its intuitive interface and
								easy-to-use software make it easy for anyone to operate. Additionally, the machine’s safety features,
								such as the protective enclosure and emergency stop button, make it safe to use for users of all
								experience levels. With its user-friendly design, this machine is a great choice for both beginners and
								experts alike.
							</CardDescription>
						</CardHeader>
					</Card>
					<Card className='col-span-full border-t-amber-500 rounded-none bg-muted'>
						<CardHeader className='text-center space-y-8 p-14'>
							<CardTitle className='text-amber-500'>High-Speed and Efficiency of MCT-6580</CardTitle>
							<CardDescription className='text-base'>
								MCT-6580 CNC Laser Cutting Machine is a highly efficient machine that can cut through materials quickly
								and accurately. With its high-speed cutting capabilities, this machine can save you time and increase
								your productivity. Its efficient laser beam ensures that each cut is precise and clean, reducing the
								need for additional processing or finishing. With the MCT-6580 CNC Laser Cutting Machine, you can get
								your projects done faster and more efficiently.
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
					slug='/products/laser-cutting-machines'
				/>
			</div>
		</>
	)
}

export const Route = createFileRoute(
	'/products/laser-cutting-machines/_layout/laser-metal-cutting-machine/hcn-c80-cnc-laser-cutting-machine'
)({
	component: ProductDetail
})
