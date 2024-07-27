import { Card, CardContent } from '@/components/ui/card'

import testimonail1 from '@/assets/01.png'
import testimonail2 from '@/assets/02.png'

const testimonial = [
	{
		id: 1,
		quote:
			"LaserTech Pro's marking systems have significantly improved our product traceability and reduced errors. Their support team is unparalleled.",
		name: 'Jane Doe',
		title: 'CEO, TechInnovate Inc.',
		image: testimonail1,
	},
	{
		id: 2,
		quote:
			"The precision and speed of LaserTech Pro's cutting systems have revolutionized our manufacturing process. We've seen a 30% increase in efficiency.",
		name: 'John Smith',
		title: 'Operations Manager, MetalWorks Co.',
		image: testimonail2,
	},
]

const Testimonial: React.FC = () => {
	return (
		<section className='py-24 bg-white'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-16 text-[#F89D44]'>What Our Clients Say</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					{testimonial.map((testimonial) => (
						<Card key={testimonial.id} className='bg-white shadow-lg border-l-4 border-[#F89D44]'>
							<CardContent className='pt-8'>
								<p className='text-gray-600 italic mb-4'>"{testimonial.quote}"</p>
								<div className='flex items-center'>
									<img src={testimonial.image} alt='Client' className='w-12 h-12 rounded-full mr-4' />
									<div>
										<p className='font-bold text-[#F89D44]'>{testimonial.name}</p>
										<p className='text-sm text-gray-500'>{testimonial.title}</p>
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
