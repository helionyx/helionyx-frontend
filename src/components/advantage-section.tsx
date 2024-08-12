import React from 'react'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'

interface Advantage {
	name: string
	describe: string
}

interface AdvantageSectionProps {
	title: string
	advantages: Advantage[]
}

const AdvantageSection: React.FC<AdvantageSectionProps> = ({ title, advantages }) => {
	return (
		<>
			<h1 className='text-4xl font-bold text-amber-500'>{title}</h1>
			{advantages.map((advantage) => (
				<Card key={advantage.name} className='p-8 border-t-amber-500 rounded-none space-y-8 bg-gray-50'>
					<CardTitle className='text-amber-500'>{advantage.name}</CardTitle>
					<CardDescription>{advantage.describe}</CardDescription>
				</Card>
			))}
		</>
	)
}

export default AdvantageSection
