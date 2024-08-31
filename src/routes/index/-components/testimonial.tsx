import testimonail1 from '@/assets/01.png'
import testimonail2 from '@/assets/02.png'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { useTranslation } from 'react-i18next'

const testimonial = [
	{
		id: 1,
		quote: 'testimonial.clientTechInnovate.quote',
		name: 'testimonial.clientTechInnovate.name',
		title: 'testimonial.clientTechInnovate.title',
		image: testimonail1
	},
	{
		id: 2,
		quote: 'testimonial.clientMetalWorks.quote',
		name: 'testimonial.clientMetalWorks.name',
		title: 'testimonial.clientMetalWorks.title',
		image: testimonail2
	}
]

const Testimonial: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section className='py-24 bg-white'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-16 text-[#F89D44]'>{t('whatOurClientSay')}</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					{testimonial.map((testimonial) => (
						<Card key={testimonial.id} className='bg-white shadow-lg border-l-4 border-[#F89D44]'>
							<CardContent className='pt-8'>
								<p className='text-gray-600 italic mb-4'>{t(testimonial.quote)}</p>
								<div className='flex items-center'>
									<img src={testimonial.image} alt='Client' className='w-12 h-12 rounded-full mr-4' />
									<div>
										<p className='font-bold text-[#F89D44]'>{t(testimonial.name)}</p>
										<p className='text-sm text-gray-500'>{t(testimonial.title)}</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonial
