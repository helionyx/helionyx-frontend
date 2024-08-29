import qrCodeLine from '@/assets/qrCodeLine.png'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className='container'>
			<div className='mt-10 text-center'>
				<h1 className='text-3xl font-semibold mb-3'>{t('footerCard.contactusCard')}</h1>
				<p className='text-center'>{t('footerCard.descriptionCard')}</p>
			</div>
			<div className='mt-10 mb-10 flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0'>
				<div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
					<form className='space-y-6' action='#'>
						<h5 className='text-xl font-semibold text-gray-900'>{t('footerCard.contactusCard')}</h5>
						<div>
							<input
								type='text'
								name='name'
								id='name'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
								placeholder={t('footerCard.nameCard')}
								required
							/>
						</div>
						<div>
							<input
								type='text'
								name='email'
								id='email'
								placeholder={t('footerCard.emailCard')}
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
								required
							/>
						</div>
						<div>
							<textarea
								name='message'
								id='message'
								placeholder={t('footerCard.messageCard')}
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
								required
							></textarea>
						</div>
						<button
							type='submit'
							className='w-full text-white bg-[#f89e44d3] hover:bg-[#fd9b38] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
						>
							{t('footerCard.sendCard')}
						</button>
					</form>
				</div>
				<div className='w-full max-w-xs sm:max-w-sm pl-0 sm:pl-8'>
					<div className='text-gray-900'>
						<div className='mb-2'>Telephone Call: +6693 574 8998</div>
						<div className='mb-2'>Email: Sales@helionyx.com</div>
						<div className='mb-2'>Line: @Helionyx</div>
						<div>
							<img src={qrCodeLine} alt='' className='h-32 w-auto' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const Route = createFileRoute('/contact')({
	component: Contact
})
