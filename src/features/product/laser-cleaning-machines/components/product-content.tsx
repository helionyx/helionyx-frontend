import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Model, Product } from '@/features/product/types/product'
import { Mailbox, Phone } from 'lucide-react'
import React from 'react'
import RenderTable from './render-table'

type ProductContentProps = {
	product: Product
	models: Model[]
}

const ProductContent: React.FC<ProductContentProps> = ({ product, models }) => {
	return (
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

				<Separator />

				<section>
					<CardTitle className='text-2xl font-semibold mb-4'>Customer Support</CardTitle>
					<CardDescription className='mb-4'>
						Our team of experts is ready to assist you with any questions or concerns you may have about the{' '}
						{product.name}.
					</CardDescription>
					<div className='flex flex-wrap gap-4'>
						<Button variant='outline' className='flex items-center'>
							<Mailbox className='w-5 h-5 mr-2' />
							<span>Email Support</span>
						</Button>
						<Button variant='outline' className='flex items-center'>
							<Phone className='w-5 h-5 mr-2' />
							<span>Phone Support</span>
						</Button>
					</div>
				</section>
			</div>
		</CardContent>
	)
}

export default ProductContent
