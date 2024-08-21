import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import line from '@/assets/line.png'
import logo_helionyx_rebg from '@/assets/logo-rebg.png'
import telephone from '@/assets/telephone.png'
import tiktok from '@/assets/tiktok.png'
import { Link } from '@tanstack/react-router'
import React from 'react'

const Footer: React.FC = () => {
	return (
		<footer className='bg-gray-600 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className=''>
					<img src={logo_helionyx_rebg} className='h-16 w-auto mb-8' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-3xl font-semibold mb-5 pl-3'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/products' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									Products
								</Link>
							</li>
							<li>
								<Link to='/about' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									About Us
								</Link>
							</li>
							<li>
								<Link to='/contact' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-3xl font-semibold mb-5'>Contact Information</h3>
						<div className='flex flex-col gap-2.5'>
							<div className='flex flex-rows gap-2.5'>
								<img src={facebook} alt='' className='h-8 w-auto' />
								<a href='/' className='text-lg content-center text-white hover:text-[#F89D44]'>
									HelionyxTech
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={line} alt='' className='h-8 w-auto' />
								<a href='/' className='text-lg content-center text-white hover:text-[#F89D44]'>
									@Helionyx
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={instagram} alt='' className='h-8 w-auto' />
								<a href='/' className='text-lg content-center text-white hover:text-[#F89D44]'>
									HelionyxTech
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={tiktok} alt='' className='h-8 w-auto' />
								<a href='/' className='text-lg content-center text-white hover:text-[#F89D44]'>
									Helionyx
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={telephone} alt='' className='h-8 w-auto' />
								<p className='text-lg content-center text-white hover:text-[#F89D44] cursor-pointer'>+6693 574 8998</p>
							</div>
						</div>
					</div>
					<div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
						<form className='space-y-6' action='#'>
							<h5 className='text-xl font-semibold text-gray-900'>CONTACT US</h5>
							<div>
								<input
									type='text'
									name='name'
									id='name'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
									placeholder='Name'
									required
								/>
							</div>
							<div>
								<input
									type='text'
									name='email'
									id='email'
									placeholder='Email'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
									required
								/>
							</div>
							<div>
								<textarea
									name='message'
									id='message'
									placeholder='Message'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
									required
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full text-white bg-[#f89e44d3] hover:bg-[#fd9b38]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
							>
								SEND
							</button>
						</form>
					</div>
				</div>
				<div className='mt-8 pt-8 border-t border-white text-center text-white'>
					<p>&copy; 2024 Helionyx All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
