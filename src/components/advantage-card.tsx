import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardDescription, CardTitle } from './ui/card'

type AdvantageCardProps = {
	title: string
	className?: string
	advantagesList: { name: string; description: string }[]
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, className, advantagesList }) => {
	const { t } = useTranslation()

	return (
		<div className={`p-0 space-y-8 ${className ? className : ''}`}>
			<h1 className='text-4xl font-bold text-amber-500'>{t(title)}</h1>
			{advantagesList.map((advantage) => (
				<Card key={advantage.name} className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{advantage.name}</CardTitle>
					<CardDescription>{advantage.description}</CardDescription>
				</Card>
			))}
		</div>
	)
}

export default AdvantageCard
