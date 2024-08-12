import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { Product } from '@/types'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

type RenderProductDetailProps = {
	product: Product
}

const RenderProductDetail: React.FC<RenderProductDetailProps> = ({ product }) => {
	return (
		<>
			<CardTitle className='text-2xl md:text-3xl font-bold mb-4'>{product.name}</CardTitle>
			<CardDescription className='text-lg'>{product.description}</CardDescription>
			<CardDescription className='text-lg my-6'>{product.subDescription}</CardDescription>
			<div className='mb-6'>
				<CardTitle className='text-xl font-semibold mb-3'>Key Features:</CardTitle>
				<ul className='space-y-2'>
					{product.features.map((feature, index) => (
						<li key={index} className='flex items-start'>
							<Badge className='mr-2 mt-1 bg-green-500 flex-shrink-0'>{index + 1}</Badge>
							<CardDescription>{feature}</CardDescription>
						</li>
					))}
				</ul>
			</div>
			<Button className='w-full text-xl bg-amber-500 hover:bg-amber-600 transition-colors'>
				<ShoppingCart className='w-6 h-6 mr-2' />
				<span>Get a Quote</span>
			</Button>
		</>
	)
}

export default RenderProductDetail
