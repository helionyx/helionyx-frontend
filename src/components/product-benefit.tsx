import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type ProductBenefitsProps = {
	title: string
	benefits: { title: string; description: string; image?: string; imageAlt?: string }[]
}

const ProductBenefits: React.FC<ProductBenefitsProps> = ({ title, benefits }) => (
	<Card className='border-x-0'>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent className='grid md:grid-cols-2 gap-8'>
			{benefits.map((benefit, index) =>
				benefit.image ? (
					<Card
						key={index}
						className='max-w-2xl mx-auto bg-muted p-0 rounded shadow-sm overflow-hidden space-y-6 min-h-96 hover:border-amber-500 hover:shadow-md transition-all duration-300'
					>
						<CardHeader className='p-0 relative overflow-hidden flex justify-center'>
							<img
								src={benefit.image}
								alt={benefit.imageAlt || ''}
								className='w-full h-full object-cover bg-transparent'
							/>
						</CardHeader>
						<CardContent className='text-center p-8 space-y-6 h-full bg-muted'>
							<CardTitle className='text-amber-500'>{benefit.title}</CardTitle>
							<CardDescription className='text-base'>{benefit.description}</CardDescription>
						</CardContent>
					</Card>
				) : (
					<Card
						key={index}
						className='col-span-full border-t-amber-500 rounded bg-muted hover:shadow-md transition-all duration-300'
					>
						<CardHeader className='text-center space-y-6 p-8'>
							<CardTitle className='text-amber-500'>{benefit.title}</CardTitle>
							<CardDescription className='text-base'>{benefit.description}</CardDescription>
						</CardHeader>
					</Card>
				)
			)}
		</CardContent>
	</Card>
)

export default ProductBenefits
