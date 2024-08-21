import company from '@/assets/company.jpg'
import group_2 from '@/assets/group_2.png'
import innovation_2 from '@/assets/innovation_2.png'
import quality_2 from '@/assets/quality_2.png'
import reliability_2 from '@/assets/reliability_2.png'
import sustainability_2 from '@/assets/sustainability_2.png'
import technology from '@/assets/technology-aboutus.jpg'
import React from 'react'
import { useTranslation } from 'react-i18next'

const About: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className='flex flex-col min-h-[100dvh]'>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8'>
										{t('aboutSecOne.title')}
									</h1>
									<h4 className='text-2xl tracking-tighter font-semibold sm:text-5xl'>
										{t('aboutSecOne.introduction')}
									</h4>
									<p className='max-w-[600px] text-muted-foreground md:text-xl'>
										{t('aboutSecOne.descriptionIntroduction')}
									</p>
								</div>
							</div>
							<img
								src={company}
								className='h-[550px] w-[550px] mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
							/>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2 mb-10'>
								<h4 className='text-2xl font-semibold tracking-tighter sm:text-5xl'>{t('aboutSecOne.mession')}</h4>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									{t('aboutSecOne.descriptionMession')}
								</p>
							</div>
							<div className='space-y-2'>
								<h4 className='text-2xl font-semibold tracking-tighter sm:text-5xl'>{t('aboutSecOne.vision')}</h4>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									{t('aboutSecOne.descriptionVision')}
								</p>
							</div>
						</div>
						<div className='mx-auto  max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
							<img
								src={technology}
								className='h-auto w-auto mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last content-center'
							/>
						</div>
					</div>
				</section>
				<section className='w-full bg-[#F89D44] py-12 md:py-24 lg:py-32 bg-muted '>
					<div className='container px-4 md:px-6 '>
						<div className='grid gap-12 lg:grid-cols-3 justify-center'>
							<div className='grid gap-4 justify-items-center'>
								<img src={quality_2} alt='' className='w-12 h-12' />
								<h3 className='text-2xl font-bold'>{t('aboutSecTwo.quality')}</h3>
								<p className='text-muted-foreground'>{t('aboutSecTwo.descriptionQuality')}</p>
							</div>
							<div className='grid gap-4 justify-items-center'>
								<img src={reliability_2} alt='' className='w-12 h-12' />
								<h3 className='text-2xl font-bold'>{t('aboutSecTwo.reliability')}</h3>
								<p className='text-muted-foreground'>{t('aboutSecTwo.descriptionReliability')}</p>
							</div>
							<div className='grid gap-4 justify-items-center'>
								<img src={group_2} alt='' className='w-12 h-12' />
								<h3 className='text-2xl font-bold'>{t('aboutSecTwo.customerFocus')}</h3>
								<p className='text-muted-foreground'>{t('aboutSecTwo.descriptionCustomerFocus')}</p>
							</div>
							<div className='grid gap-4 justify-items-center'>
								<img src={sustainability_2} alt='' className='w-12 h-12' />
								<h3 className='text-2xl font-bold'>{t('aboutSecTwo.sustainability')}</h3>
								<p className='text-muted-foreground'>{t('aboutSecTwo.descriptionSustainability')}</p>
							</div>
							<div className='grid gap-4 justify-items-center'>
								<img src={innovation_2} alt='' className='w-12 h-12' />
								<h3 className='text-2xl font-bold'>{t('aboutSecTwo.innovation')}</h3>
								<p className='text-muted-foreground'>{t('aboutSecTwo.descriptionInnovation')}</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default About
