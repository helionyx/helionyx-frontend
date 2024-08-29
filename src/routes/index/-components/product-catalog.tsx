import cleaning from '@/assets/laser-cleaning-machines/HCL.png'
import cutting from '@/assets/laser-cutting-machines/HCN-C80.png'
import mark2 from '@/assets/laser-marking-machines/co2-laser-marker/HCO-SC.png'
import dotMark from '@/assets/laser-marking-machines/dot-marking/HDO-12.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import React from 'react'
import { useTranslation } from 'react-i18next'

const products = [
	{
		id: 1,
		key: 'laserMarking',
		category: 'laser-marking-machines',
		image: mark2
	},
	{
		id: 2,
		key: 'laserCutting',
		category: 'laser-cutting-machines',
		image: cutting
	},
	{
		id: 3,
		key: 'laserCleaning',
		category: 'laser-cleaning-machines',
		image: cleaning
	},
	{
		id: 4,
		key: 'dotMarking',
		category: 'dot-marking-machines',
		image: dotMark
	}
]

const ProductCatalog: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section className='py-24 bg-[#F89D44]'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-16 text-white'>{t('productCatalog.title')}</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{products.map((product) => (
						<Card
							key={product.id}
							className='overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col justify-between h-full'
						>
							<CardHeader className='p-0 relative overflow-hidden rounded-lg flex justify-center items-center h-48'>
								<img
									src={product.image}
									alt={t(`productCatalog.${product.key}.title`)}
									className='w-full h-48 object-contain bg-transparent'
								/>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
							</CardHeader>
							<CardContent className='p-4 mb-4'>
								<CardTitle className='text-xl font-bold text-[#F89D44]'>
									{t(`productCatalog.${product.key}.title`)}
								</CardTitle>
								<CardDescription className='text-gray-600'>
									{t(`productCatalog.${product.key}.description`)}
								</CardDescription>
							</CardContent>
							<CardFooter className='mt-auto'>
								<Button
									asChild
									variant='outline'
									className='
										w-full data-[active]:bg-transparent hover:bg-transparent
										focus:bg-transparent transition-color duration-300 text-zinc-950
										border-solid border-2 border-[#F89D44] hover:text-[#F89D44]
									'
								>
									<Link to={`/products/${product.category}`} className='w-full'>
										{t('productCatalog.learnMore')}
									</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProductCatalog
