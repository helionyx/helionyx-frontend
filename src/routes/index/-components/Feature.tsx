import group from '@/assets/group.png'
import unmatchPrecision from '@/assets/icon-benefits-commitment.png'
import innovation from '@/assets/icon-benefits-innovation.png'
import sustainability from '@/assets/icon-benefits-sustainability.png'
import quality from '@/assets/quality.png'
import React from 'react'

const Feature: React.FC = () => {
	return (
		<section className='py-24 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-16 text-[#F89D44]'>Why Choose Helionyx ?</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={unmatchPrecision} alt='Reliability' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>Reliability</h3>
						<p className='text-white text-center'>
							Ensuring consistent performance and dependability in all our offerings.
						</p>
					</div>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={group} alt='Customer Focus' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>Customer Focus</h3>
						<p className='text-white text-center'>Prioritizing the needs and success of our clients.</p>
					</div>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={sustainability} alt='Sustainability' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>Sustainability</h3>
						<p className='text-white text-center'>
							Continuously pushing the boundaries of laser technology to offer state-of-the-art solutions.
						</p>
					</div>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={innovation} alt='Innovation' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>Innovation</h3>
						<p className='text-white text-center'>
							Committing to environmentally responsible practices in our operations.
						</p>
					</div>
					<div className='col-span-full flex justify-center mt-6'>
						<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center max-w-sm'>
							<img src={quality} alt='Quality' className='h-20 w-auto mb-4' />
							<h3 className='text-2xl font-medium text-white mb-2'>Quality</h3>
							<p className='text-white text-center'>
								Maintaining the highest standards in every aspect of our products and services.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Feature
