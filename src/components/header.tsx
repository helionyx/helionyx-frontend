import logo_helionyx from '@/assets/logo.jpg'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SearchPopover from './SearchPopover'
import LanguageSwitcher from './language-switcher'
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
	const { t } = useTranslation()

	return (
		<header className='bg-white text-[#F89D44] py-4 shadow-md z-50 sticky top-0'>
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
											{t('nav.home')}
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger
										className='px-4 py-2 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300
										data-[state=open]:bg-transparent data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent'
									>
										<Link to='/products'>{t('nav.products')}</Link>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className='bg-white p-4 rounded-md shadow-lg w-60'>
											<li>
												<Link
													to='/products/laser-marking-machines'
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													<span>{t('nav.categories.laserMarking')}</span>
												</Link>
											</li>
											<li>
												<Link
													to='/products/laser-cutting-machines'
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													<span>{t('nav.categories.laserCutting')}</span>
												</Link>
											</li>
											<li>
												<Link
													to='/products/laser-cleaning-machines'
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													<span>{t('nav.categories.laserCleaning')}</span>
												</Link>
											</li>
											<li>
												<Link
													to='/products/dot-marking-machines'
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													<span>{t('nav.categories.dotMarking')}</span>
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
											{t('nav.about')}
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											to='/contact'
											className='px-4 py-2 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
										>
											{t('nav.contact')}
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</nav>

					<div className='hidden md:flex items-center space-x-2'>
						<SearchPopover />
						<LanguageSwitcher />
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
								{t('nav.home')}
							</Link>
							<Link to='/products' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								{t('nav.products')}
							</Link>
							<Link to='/about' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								{t('nav.about')}
							</Link>
							<Link to='/contact' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								{t('nav.contact')}
							</Link>
						</nav>
						<div className='mt-4'>
							<LanguageSwitcher />
						</div>
					</div>
				)}
			</div>
		</header>
	)
}
export default Header
