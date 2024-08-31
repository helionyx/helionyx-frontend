import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
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
		import.meta.env.VITE_EMAILJS_SERVICE_ID,
		import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
		{
			user_name: data.name,
			user_email: data.email,
			message: data.message
		},
		import.meta.env.VITE_EMAILJS_USER_ID
	)
	return result
}

type ContactFormProps = {
	className?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
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
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t('footerCard.nameCard')}</FormLabel>
							<FormControl>
								<Input placeholder={t('footerCard.nameCard')} {...field} />
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
							<FormLabel>{t('footerCard.emailCard')}</FormLabel>
							<FormControl>
								<Input placeholder={t('footerCard.emailCard')} {...field} />
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
							<FormLabel>{t('footerCard.messageCard')}</FormLabel>
							<FormControl>
								<Textarea placeholder={t('footerCard.messageCard')} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full bg-[#f89e44d3] hover:bg-[#fd9b38]'>
					{t('footerCard.sendCard')}
				</Button>
			</form>
		</Form>
	)
}

export default ContactForm
