import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Link, useMatches } from '@tanstack/react-router'
import React from 'react'

const CustomBreadcrumb: React.FC = () => {
	const matches = useMatches()
	const lastMatch = matches[matches.length - 1]
	const isHomePage = lastMatch.pathname === '/'

	if (isHomePage) return null

	const filteredMatches = matches
		.filter((match, index, array) => {
			return array.findIndex((m) => m.pathname === match.pathname) === index
		})
		.filter((match) => match.pathname !== '/products/')
		.filter((match) => match.pathname !== '/laser-marking-machines/')
		.filter((match) => match.pathname !== '/laser-cutting-machines/')
		.filter((match) => match.pathname !== '/laser-cleaning-machines/')
		.filter((match) => match.pathname !== '/dot-marking-machines/')
		.filter((match) => match.pathname !== '/products/laser-marking-machines/')
		.filter((match) => match.pathname !== '/products/laser-cutting-machines/')
		.filter((match) => match.pathname !== '/products/laser-cleaning-machines/')
		.filter((match) => match.pathname !== '/products/dot-marking-machines/')

	const breadcrumbItems = filteredMatches.map((match, index) => {
		let label: string

		switch (match.pathname) {
			case '/':
				label = 'Home'
				break
			case '/products':
				label = 'Products'
				break
			case '/laser-marking-machines':
				label = 'Laser Marking Machines'
				break
			case '/laser-cutting-machines':
				label = 'Laser Cutting Machines'
				break
			case '/laser-cleaning-machines':
				label = 'Laser Cleaing Machines'
				break
			case '/dot-marking-machines':
				label = 'Dot Marking Machines'
				break
			case '/products/laser-marking-machines':
				label = 'Laser Marking Machines'
				break
			case '/products/laser-cutting-machines':
				label = 'Laser Cutting Machines'
				break
			case '/products/laser-cleaning-machines':
				label = 'Laser Cleaing Machines'
				break
			case '/products/dot-marking-machines':
				label = 'Dot Marking Machines'
				break
			case '/about':
				label = 'About Us'
				break
			case '/contact':
				label = 'Contact'
				break
			default:
				label = match.pathname.split('/').pop() || ''
				label = label.charAt(0).toUpperCase() + label.slice(1).replace(/%20/g, ' ')
				label = label.replace(/-/g, ' ')
		}

		const isLast = index === filteredMatches.length - 1

		return (
			<React.Fragment key={match.id}>
				<BreadcrumbItem>
					{isLast ? (
						<BreadcrumbPage className='text-base text-muted-foreground'>{label}</BreadcrumbPage>
					) : (
						<BreadcrumbLink asChild className='text-base hover:text-amber-500'>
							<Link to={match.pathname}>{label}</Link>
						</BreadcrumbLink>
					)}
				</BreadcrumbItem>
				{!isLast && <BreadcrumbSeparator />}
			</React.Fragment>
		)
	})

	return (
		<Breadcrumb>
			<BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
		</Breadcrumb>
	)
}

export default CustomBreadcrumb
