import { Mailbox, Phone } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

type CustomerSupportProps = {
	name: string
	className?: string
}

const CustomerSupport: React.FC<CustomerSupportProps> = ({ name, className }) => {
	const { t } = useTranslation()

	return (
		<Card className={`${className}`}>
			<CardHeader>
				<CardTitle className='text-2xl font-semibold mb-4'>Customer Support</CardTitle>
				<CardDescription className='mb-4'>
					Our team of experts is ready to assist you with any questions or concerns you may have about the {t(name)}.
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-wrap gap-4'>
				<Button variant='outline' className='flex items-center'>
					<Mailbox className='w-5 h-5 mr-2' />
					<span>Email Support</span>
				</Button>
				<Button variant='outline' className='flex items-center'>
					<Phone className='w-5 h-5 mr-2' />
					<span>Phone Support</span>
				</Button>
			</CardContent>
		</Card>
	)
}

export default CustomerSupport
