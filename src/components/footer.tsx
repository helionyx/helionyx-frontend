import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import line from '@/assets/line.png'
import logo_helionyx_rebg from '@/assets/logo-rebg.png'
import telephone from '@/assets/telephone.png'
import tiktok from '@/assets/tiktok.png'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as z from 'zod'

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.'
	}),
	email: z.string().email({
		message: 'Please enter a valid email address.'
	}),
	message: z.string().min(10, {
		message: 'Message must be at least 10 characters.'
	})
})

type FormData = z.infer<typeof formSchema>

const sendEmail = async (data: FormData) => {
	const result = await emailjs.send(
		'contact_service',
		'contact_form',
		{
			user_name: data.name,
			user_email: data.email,
			message: data.message
		},
		'Yli8u916T4edPL-Mm'
	)
	return result
}

const Footer: React.FC = () => {
	const { t } = useTranslation()
	const { toast } = useToast()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: ''
		}
	})

	const mutation = useMutation({
		mutationFn: sendEmail,
		onSuccess: () => {
			toast({
				title: 'Email sent successfully',
				description: "We'll get back to you soon!"
			})
			form.reset()
		},
		onError: (error) => {
			console.error('Failed to send email:', error)
			toast({
				title: 'Failed to send email',
				description: 'Please try again later.',
				variant: 'destructive'
			})
		}
	})

	const onSubmit = (values: FormData) => {
		mutation.mutate(values)
	}

	return (
		<footer className='bg-gray-600 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className=''>
					<img src={logo_helionyx_rebg} className='h-16 w-auto mb-8' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-3xl font-semibold mb-5 pl-3'>{t('footer.quickLinks')}</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/products' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									{t('footer.product')}
								</Link>
							</li>
							<li>
								<Link to='/about' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									{t('footer.aboutUS')}
								</Link>
							</li>
							<li>
								<Link to='/contact' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									{t('footer.contact')}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-3xl font-semibold mb-5'>{t('footer.contactInfo')}</h3>
						<div className='flex flex-col gap-2.5'>
							<div className='flex flex-rows gap-2.5'>
								<img src={facebook} alt='' className='h-8 w-auto' />
								<a
									href='https://www.facebook.com/helionyx.tech?mibextid=LQQJ4d'
									target='_blank'
									rel='noreferrer'
									className='text-lg content-center text-white hover:text-[#F89D44]'
								>
									HelionyxTech
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={line} alt='' className='h-8 w-auto' />
								<a
									href='https://lin.ee/T258p4g'
									target='_blank'
									rel='noreferrer'
									className='text-lg content-center text-white hover:text-[#F89D44]'
								>
									@Helionyx
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={instagram} alt='' className='h-8 w-auto' />
								<a
									href='https://lin.ee/T258p4g'
									target='_blank'
									rel='noreferrer'
									className='text-lg content-center text-white hover:text-[#F89D44]'
								>
									HelionyxTech
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={tiktok} alt='' className='h-8 w-auto' />
								<a
									href='https://www.tiktok.com/@helionyx.tech?_t=8pAHDzrBO2S&_r=1'
									target='_blank'
									rel='noreferrer'
									className='text-lg content-center text-white hover:text-[#F89D44]'
								>
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
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
								<h5 className='text-xl font-semibold text-gray-900'>{t('footerCard.contactusCard')}</h5>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder={t('footerCard.nameCard')}
													{...field}
													className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder={t('footerCard.emailCard')}
													{...field}
													className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='message'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Textarea
													placeholder={t('footerCard.messageCard')}
													{...field}
													className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									type='submit'
									className='w-full text-white bg-[#f89e44d3] hover:bg-[#fd9b38] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
								>
									{t('footerCard.sendCard')}
								</Button>
							</form>
						</Form>
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
