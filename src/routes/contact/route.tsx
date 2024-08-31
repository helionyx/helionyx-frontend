import qrCodeLine from '@/assets/qrCodeLine.png'
import ContactForm from '@/components/contact-form'
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
					<ContactForm />
				</div>
				<div className='w-full max-w-xs sm:max-w-sm pl-0 sm:pl-8'>
					<div className='text-gray-900'>
						<div className='mb-2'>Telephone Call: +6693 574 8998</div>
						<div className='mb-2'>Email: support@helionyx.co.th</div>
						<div className='mb-2'>Line: @Helionyx</div>
						<div>
							<img src={qrCodeLine} alt='Line QR Code' className='h-32 w-auto' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const Route = createFileRoute('/contact')({
	meta: () => {
		return [
			{
				title: 'Contact Us | Helionyx',
				description: '',
				keywords: ''
			}
		]
	},
	component: Contact
})
