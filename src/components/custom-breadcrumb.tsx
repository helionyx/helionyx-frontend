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
import { useTranslation } from 'react-i18next'

const CustomBreadcrumb: React.FC = () => {
	const matches = useMatches()
	const lastMatch = matches[matches.length - 1]
	const isHomePage = lastMatch.pathname === '/'

	const { t } = useTranslation()

	if (isHomePage) return null

	const filteredMatches = matches
		.filter((match, index, array) => {
			return array.findIndex((m) => m.pathname === match.pathname) === index
		})
		.filter((match) => match.pathname !== '/products/')
		.filter((match) => match.pathname !== '/products/laser-marking-machines/')
		.filter((match) => match.pathname !== '/products/laser-cutting-machines/')
		.filter((match) => match.pathname !== '/products/laser-cleaning-machines/')
		.filter((match) => match.pathname !== '/products/dot-marking-machines/')

	const breadcrumbItems = filteredMatches.map((match, index) => {
		let label: string

		switch (match.pathname) {
			case '/':
				label = 'breadcrumb.home'
				break
			case '/products':
				label = 'breadcrumb.products'
				break
			case '/products/laser-marking-machines':
				label = 'breadcrumb.laserMarking.title'
				break
			case '/products/laser-cutting-machines':
				label = 'breadcrumb.laserCutting.title'
				break
			case '/products/laser-cleaning-machines':
				label = 'breadcrumb.laserCleaning.title'
				break
			case '/products/dot-marking-machines':
				label = 'breadcrumb.dotMarking.title'
				break
			case '/products/laser-marking-machines/uv-laser-marker/huv-integrated-fiber-laser-marking-machine':
				label = 'breadcrumb.laserMarking.uvLaserMarker.huvIntegratedLaserMarker.title'
				break
			case '/products/laser-marking-machines/uv-laser-marker/huv-sw-machine-crs-laser-source':
				label = 'breadcrumb.laserMarking.uvLaserMarker.huvSwMachineCrsLaserSource.title'
				break
			case '/products/laser-marking-machines/uv-laser-marker/huv-mw-portable-uv-laser-marking-machine':
				label = 'breadcrumb.laserMarking.uvLaserMarker.huvMwPortableUvLaserMarker.title'
				break
			case '/products/laser-marking-machines/uv-laser-marker/huv-fw-uv-flying-laser-marking-machine-jpt-laser-source':
				label = 'breadcrumb.laserMarking.uvLaserMarker.huvFwUvFlyingLaserMarker.title'
				break
			case '/products/laser-marking-machines/fiber-laser-marker/hfi-m-fiber-laser-marker':
				label = 'breadcrumb.laserMarking.fiberLaserMarker.hfiMFiberLaserMarker.title'
				break
			case '/products/laser-marking-machines/fiber-laser-marker/hfi-mn-portable-mini-fiber-laser-marking-machine':
				label = 'breadcrumb.laserMarking.fiberLaserMarker.hfiMnPortableMiniFiberLaserMarker.title'
				break
			case '/products/laser-marking-machines/fiber-laser-marker/hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source':
				label = 'breadcrumb.laserMarking.fiberLaserMarker.hfiSfPulseFiberLaserMarker.title'
				break
			case '/products/laser-marking-machines/fiber-laser-marker/hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source':
				label = 'breadcrumb.laserMarking.fiberLaserMarker.hfiFfFiberFlyingLaserMarker.title'
				break
			case '/products/laser-marking-machines/co2-laser-marker/hco-fc-co2-flying-laser-marking-machine-coherent-laser-source':
				label = 'breadcrumb.laserMarking.co2LaserMarker.hcoFcFlyingLaserMarker.title'
				break
			case '/products/laser-marking-machines/co2-laser-marker/hco-sc-co2-laser-marking-machine-coherent-laser-source':
				label = 'breadcrumb.laserMarking.co2LaserMarker.hcoScCo2LaserMarker.title'
				break
			case '/products/laser-marking-machines/portable-laser-marker/hfi-h-model-hanheld-laser-marking-machine':
				label = 'breadcrumb.laserMarking.portableLaserMarker.hfiHModelHandHeldLaserMarker.title'
				break
			case '/products/laser-cutting-machines/laser-metal-cutting-machine/hcn-c80-cnc-laser-cutting-machine':
				label = 'breadcrumb.laserCutting.laserMetalCutting.hcnC80CncLaserCuttingMachine.title'
				break
			case '/products/laser-cleaning-machines/hcl-laser-cleaning-machine/hcl-laser-cleaning-machine':
				label = 'breadcrumb.laserCleaning.hclLaserCleaning.hclLaserCleaningMachine.title'
				break
			case '/products/dot-marking-machines/hdo-marking-machine/hdo':
				label = 'breadcrumb.dotMarking.hdoMarking.hdo.title'
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
						<BreadcrumbPage className='text-base text-muted-foreground'>{t(label)}</BreadcrumbPage>
					) : (
						<BreadcrumbLink asChild className='text-base hover:text-amber-500'>
							<Link to={match.pathname}>{t(label)}</Link>
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
