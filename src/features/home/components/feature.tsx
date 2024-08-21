import group from '@/assets/group.png'
import unmatchPrecision from '@/assets/icon-benefits-commitment.png'
import innovation from '@/assets/icon-benefits-innovation.png'
import sustainability from '@/assets/icon-benefits-sustainability.png'
import quality from '@/assets/quality.png'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Feature: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section className='py-24 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-16 text-[#F89D44]'>{t('whyChooseUs')}</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={unmatchPrecision} alt='Reliability' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>{t('feature.reliability.title')}</h3>
						<p className='text-white text-center'>{t('feature.reliability.description')}</p>
					</div>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={group} alt='Customer Focus' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>{t('feature.customerFocus.title')}</h3>
						<p className='text-white text-center'>{t('feature.customerFocus.description')}</p>
					</div>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={sustainability} alt='Sustainability' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>{t('feature.sustainability.title')}</h3>
						<p className='text-white text-center'>{t('feature.sustainability.description')}</p>
					</div>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={innovation} alt='Innovation' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>{t('feature.innovation.title')}</h3>
						<p className='text-white text-center'>{t('feature.innovation.description')}</p>
					</div>
					<div className='col-span-full flex justify-center mt-6'>
						<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center max-w-sm'>
							<img src={quality} alt='Quality' className='h-20 w-auto mb-4' />
							<h3 className='text-2xl font-medium text-white mb-2'>{t('feature.quality.title')}</h3>
							<p className='text-white text-center'>{t('feature.quality.description')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Feature
