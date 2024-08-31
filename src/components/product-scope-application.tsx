import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

type ProductScopeApplicationProps = {
	title: string
	images: {
		image: string
		imageAlt: string
	}[]
}

const ProductScopeApplication: React.FC<ProductScopeApplicationProps> = ({ title, images }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className='text-amber-500'>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<section className='flex flex-col'>
					{images.map(({ image, imageAlt }) => (
						<img key={imageAlt} src={image} alt={imageAlt} />
					))}
				</section>
			</CardContent>
		</Card>
	)
}

export default ProductScopeApplication
