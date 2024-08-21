import React from 'react'
import { useTranslation } from 'react-i18next'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Language = 'en' | 'th'

const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation()

	const handleLanguageChange = (value: string) => {
		i18n.changeLanguage(value as Language)
	}

	return (
		<Select value={i18n.language} onValueChange={handleLanguageChange}>
			<SelectTrigger className='w-[80px]'>
				<SelectValue placeholder={i18n.language.toUpperCase()} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value='en'>EN</SelectItem>
					<SelectItem value='th'>TH</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default LanguageSwitcher
