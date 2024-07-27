import bg_laser from '@/assets/bg-laser.jpg'

import { LightbulbIcon, ShieldCheckIcon } from 'lucide-react'
import { GiSewingMachine } from 'react-icons/gi'

const HeroSection: React.FC = () => {
	return (
		<section className='relative text-white min-h-[calc(100vh-64px)] flex flex-col justify-between'>
			<div className='absolute inset-0 opacity-80'>
				<img src={bg_laser} alt='Laser technology in action' className='w-full h-full object-cover' />
			</div>
			<div className='container mx-auto px-4 relative flex-grow flex flex-col justify-center py-12'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-3xl md:text-5xl font-bold mb-10 leading-tight '>
						LASER MARKING & CUTTING & CLEANING SOLUTIONS
					</h1>
					<p className='text-xl mb-10'>
						Helionyx is a prominent and trusted leader in the laser technology industry, specializing in the
						development, manufacturing, and distribution of advanced laser marking systems. With a commitment to exce
						lence and innovation, Helionyx has established itself as a reliable partner for businesses seeking
						cutting-edge laser solutions.
					</p>
					<div className='flex justify-center space-x-[100px]'>
						<div className='text-center'>
							<LightbulbIcon className='w-16 h-16 mx-auto mb-2 ' />
							<p>INNOVATIVE PROCESS</p>
						</div>
						<div className='text-center'>
							<GiSewingMachine className='w-16 h-16 mx-auto mb-2' />
							<p>INLINE SOLUTIONS</p>
						</div>
						<div className='text-center'>
							<ShieldCheckIcon className='w-16 h-16 mx-auto mb-2' />
							<p>GUARANTEED SAFETY</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
