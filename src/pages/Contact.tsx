import Layout from '@/layouts/Layout'

const Contact = () => {
	return (
		<Layout>
			<div className='container'>
				<div className='mt-10 text-center'>
					<h1 className='text-3xl font-semibold mb-3'>CONTACT US</h1>
					<p className='text-center'>Please enter your information and we will get back to you within one business day.</p>
				</div>
				<div className='mt-10 mb-10 flex flex-row justify-center'>
					<div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5'>
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
					<div className='pl-8 mt-5'>
						<div>Telephone Call: +6693 574 8998</div>
						<div>Email: helionyx-laser@helionyx.com</div>
						<div>Line: @Helionyx</div>
						<div>QRCODE</div>
					</div>
				</div>
			</div>
			,
		</Layout>
	)
}

export default Contact
