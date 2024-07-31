import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { useProductId } from '@/features/product/api/queries.api'
import { Link, useMatches, useParams } from '@tanstack/react-router'
import React from 'react'

const CustomBreadcrumb: React.FC = () => {
	const matches = useMatches()
	const params = useParams({ strict: false })
	const lastMatch = matches[matches.length - 1]
	const isHomePage = lastMatch.pathname === '/'

	const productId = params.productId ? Number(params.productId) : undefined
	const { data: product } = useProductId(productId || 0)

	if (isHomePage) return null

	const filteredMatches = matches
		.filter((match, index, array) => {
			return array.findIndex((m) => m.pathname === match.pathname) === index
		})
		.filter((match) => match.pathname !== '/products/')

	const breadcrumbItems = filteredMatches.map((match, index) => {
		let label: string

		switch (match.pathname) {
			case '/':
				label = 'Home'
				break
			case '/products':
				label = 'Products'
				break
			case `/products/${productId}`:
				label = product ? product.name : '...'
				break
			case '/about':
				label = 'About Us'
				break
			case '/contact':
				label = 'Contact'
				break
			default:
				label = match.pathname.split('/').pop() || ''
				label = label.charAt(0).toUpperCase() + label.slice(1)
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
