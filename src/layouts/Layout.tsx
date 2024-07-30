import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import line from '@/assets/line.png'
import logo_helionyx_rebg from '@/assets/logo-rebg.png'
import logo_helionyx from '@/assets/logo.jpg'
import telephone from '@/assets/telephone.png'
import tiktok from '@/assets/tiktok.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Link, useRouter } from '@tanstack/react-router'
import { ChevronRight, Menu, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface BreadcrumbItem {
	label: string
	path: string
}

interface BreadcrumbProps {
	items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	if (items.length === 0) {
		return null
	}

	return (
		<nav className='mt-12' aria-label='Breadcrumb'>
			<ol className='inline-flex items-center space-x-1 md:space-x-3'>
				<li className='inline-flex items-center'>
					<Link to='/' className='inline-flex items-center text-md font-medium text-[#f89e44d3] hover:text-[#fd9b38]'>
						Home
					</Link>
				</li>
				{items.map((item) => (
					<li key={item.path}>
						<div className='flex items-center'>
							<ChevronRight className='w-4 h-4 text-gray-400' />
							<Link to={item.path} className='ml-1 text-md font-medium text-[#f89e44d3] hover:text-[#fd9b38] md:ml-2'>
								{item.label}
							</Link>
						</div>
					</li>
				))}
			</ol>
		</nav>
	)
}

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='bg-white text-[#F89D44] py-4 shadow-md relative z-50'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between'>
					<Link to='/'>
						<img className='h-20 w-auto' src={logo_helionyx} alt='' />
					</Link>

					<nav className='hidden md:block'>
						<NavigationMenu>
							<NavigationMenuList className='space-x-2'>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											to='/'
											className='px-4 py-2 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
										>
											HOME
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger
										className='px-4 py-2 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300
data-[state=open]:bg-transparent data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent'
									>
										<Link to='/products'>PRODUCTS</Link>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className='bg-white p-4 rounded-md shadow-lg w-40'>
											<li>
												<Link
													to='/products'
													search={{ category: 'marking' }}
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													Laser Marking
												</Link>
											</li>
											<li>
												<Link
													to='/products'
													search={{ category: 'cutting' }}
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													Laser Cutting
												</Link>
											</li>
											<li>
												<Link
													to='/products'
													search={{ category: 'cleaning' }}
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													Laser Cleaning
												</Link>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											to='/about'
											className='px-4 py-2 md:px-1 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
										>
											ABOUT US
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											to='/contact'
											className='px-4 py-2 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
										>
											CONTACT
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</nav>

					<div className='hidden md:flex items-center space-x-2'>
						<div className='relative'>
							<Input
								type='search'
								placeholder='Search...'
								className='pl-10 pr-4 py-2 border-2 text-[#f4a95e] rounded-full focus:outline-none focus:ring-2 focus:ring-[#f4a95e] focus:border-transparent'
							/>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#f4a95e]' />
						</div>
					</div>

					<Button
						variant='ghost'
						size='icon'
						className='md:hidden text-[#F89D44] hover:bg-[#db8e42]'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Menu className='h-6 w-6' />
					</Button>
				</div>

				{isMenuOpen && (
					<div className='md:hidden mt-4 bg-white p-4 rounded-md shadow-md'>
						<nav className='flex flex-col space-y-2'>
							<Link to='/' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								HOME
							</Link>
							<Link to='/products' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								PRODUCTS
							</Link>
							<Link to='/about' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								ABOUT US
							</Link>
							<Link to='/contact' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								CONTACT
							</Link>
						</nav>
						<div className='mt-4 relative'>
							<Input
								type='search'
								placeholder='Search...'
								className='w-full pl-10 pr-4 py-2 border-2 border-[#f4a95e] rounded-full focus:outline-none focus:ring-2 focus:ring--[#f4a95e] focus:border-transparent'
							/>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#F89D44]' />
						</div>
					</div>
				)}
			</div>
		</header>
	)
}

const Footer: React.FC = () => {
	return (
		<footer className='bg-gray-600 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className=''>
					<img src={logo_helionyx_rebg} className='h-16 w-auto mb-8' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-3xl font-semibold mb-5 pl-3'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/products' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									Products
								</Link>
							</li>
							<li>
								<Link to='/about' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									About Us
								</Link>
							</li>
							<li>
								<Link to='/contact' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-3xl font-semibold mb-5'>Contact Information</h3>
						<div className='flex flex-col gap-2.5'>
							<div className='flex flex-rows gap-2.5'>
								<img src={facebook} alt='' className='h-8 w-auto' />
								<a href='' className='text-lg content-center text-white hover:text-[#F89D44]'>
									Helionyx corp
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={line} alt='' className='h-8 w-auto' />
								<a href='' className='text-lg content-center text-white hover:text-[#F89D44]'>
									@Helionyx
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={instagram} alt='' className='h-8 w-auto' />
								<a href='' className='text-lg content-center text-white hover:text-[#F89D44]'>
									helionyx_ig
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={tiktok} alt='' className='h-8 w-auto' />
								<a href='' className='text-lg content-center text-white hover:text-[#F89D44]'>
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
						<form className='space-y-6' action='#'>
							<h5 className='text-xl font-semibold text-gray-900'>CONTACT US</h5>
							<div>
								<input
									type='text'
									name='name'
									id='name'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
									placeholder='Name'
									required
								/>
							</div>
							<div>
								<input
									type='text'
									name='email'
									id='email'
									placeholder='Email'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
									required
								/>
							</div>
							<div>
								<textarea
									name='message'
									id='message'
									placeholder='Message'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
									required
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full text-white bg-[#f89e44d3] hover:bg-[#fd9b38]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
							>
								SEND
							</button>
						</form>
					</div>
				</div>
				<div className='mt-8 pt-8 border-t border-white text-center text-white'>
					<p>&copy; 2024 Helionyx All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const router = useRouter()
	const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([])
	const [isHomePage, setIsHomePage] = useState(true)

	useEffect(() => {
		const path = router.state.location.pathname
		setIsHomePage(path === '/')

		const pathSegments = path.split('/').filter(Boolean)
		const newBreadcrumbItems = pathSegments.map((segment, index) => ({
			label: segment.charAt(0).toUpperCase() + segment.slice(1),
			path: `/${pathSegments.slice(0, index + 1).join('/')}`
		}))
		setBreadcrumbItems(newBreadcrumbItems)
	}, [router.state.location.pathname])

	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			{!isHomePage && (
				<div className='bg-gray-50'>
					<div className='container mx-auto px-4'>
						<Breadcrumb items={breadcrumbItems} />
					</div>
				</div>
			)}
			<main className={`flex-grow ${isHomePage ? '' : 'bg-gray-50'}`}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
