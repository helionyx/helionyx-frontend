import bg_laser from '@/assets/bg-laser.jpg'
import { LightbulbIcon, ShieldCheckIcon } from 'lucide-react'
import React from 'react'
import { GiSewingMachine } from 'react-icons/gi'
import { useTranslation } from 'react-i18next'

const HeroSection: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section className='relative text-white min-h-screen flex flex-col justify-between'>
			<div className='absolute inset-0 opacity-80'>
				<img src={bg_laser} alt='Laser technology in action' className='w-full h-full object-cover' />
			</div>
			<div className='container mx-auto px-4 relative flex-grow flex flex-col justify-center py-12'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-10 leading-tight'>{t('hero.title')}</h1>
					<p className='text-sm md:text-base lg:text-xl mb-6 md:mb-10'>{t('hero.description')}</p>
					<div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8'>
						<div className='text-center'>
							<LightbulbIcon className='w-12 h-12 md:w-16 md:h-16 mx-auto mb-2' />
							<p className='text-xs md:text-sm'>{t('features.innovativeProcess')}</p>
						</div>
						<div className='text-center'>
							<GiSewingMachine className='w-12 h-12 md:w-16 md:h-16 mx-auto mb-2' />
							<p className='text-xs md:text-sm'>{t('features.inlineSolutions')}</p>
						</div>
						<div className='text-center'>
							<ShieldCheckIcon className='w-12 h-12 md:w-16 md:h-16 mx-auto mb-2' />
							<p className='text-xs md:text-sm'>{t('features.guaranteedSafety')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
