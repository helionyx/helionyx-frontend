import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { Product } from '@/types'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

type RenderProductDetailProps = {
	product: Product
}

const RenderProductDetail: React.FC<RenderProductDetailProps> = ({ product }) => {
	const { t } = useTranslation()

	const features = t(product.featuresKey, { returnObjects: true }) as string[]

	return (
		<>
			<CardTitle className='text-2xl md:text-3xl font-bold mb-4'>{t(product.nameKey)}</CardTitle>
			<div className='space-y-4'>
				<CardDescription className='text-lg'>{t(product.descriptionKey)}</CardDescription>
				{product.subDescriptionKey && (
					<CardDescription className='text-lg'>{t(product.subDescriptionKey)}</CardDescription>
				)}
			</div>
			<div className='my-6'>
				<CardTitle className='text-xl font-semibold mb-3'>{t('constants.name.key')}:</CardTitle>
				<ul className='space-y-2'>
					{features.map((feature: string, index: number) => (
						<li key={index} className='flex items-start'>
							<Badge className='mr-2 mt-1 bg-green-500 flex-shrink-0'>{index + 1}</Badge>
							<CardDescription>{feature}</CardDescription>
						</li>
					))}
				</ul>
			</div>
			<Button className='w-full h-12 text-xl bg-amber-500 hover:bg-amber-600 transition-colors'>
				<ShoppingCart className='w-6 h-6 mr-2' />
				<span>{t('constants.buttons.getQuote')}</span>
			</Button>
		</>
	)
}

export default RenderProductDetail
