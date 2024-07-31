import logo_helionyx from '@/assets/logo.jpg'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import SearchPopover from './SearchPopover'
import { Button } from './ui/button'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from './ui/navigation-menu'

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

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
						<SearchPopover />
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
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
