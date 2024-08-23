import { useProductSearch } from '@/api/hooks.api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Skeleton } from '@/components/ui/skeleton'
import useDebounce from '@/hooks/use-debounce'
import { Product } from '@/types'
import { formatEclipse } from '@/utils'
import { Link, useNavigate } from '@tanstack/react-router'
import { Loader2, Search } from 'lucide-react'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SearchPopoverSkeleton: React.FC = () => (
	<div className='flex items-center space-x-2 p-2'>
		<Skeleton className='w-10 h-10 rounded' />
		<div className='space-y-2'>
			<Skeleton className='h-4 w-[150px]' />
			<Skeleton className='h-3 w-[200px]' />
		</div>
	</div>
)

const SearchPopover: React.FC = React.memo(() => {
	const [isOpen, setIsOpen] = useState(false)
	const [localSearchTerm, setLocalSearchTerm] = useState<string>('')
	const [selectedIndex, setSelectedIndex] = useState(-1)
	const debouncedSearchTerm = useDebounce(localSearchTerm, 300)

	const { t } = useTranslation()

	const navigate = useNavigate()

	const { data: searchResults, isPending } = useProductSearch(debouncedSearchTerm)

	const inputRef = useRef<HTMLInputElement>(null)
	const resultsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (debouncedSearchTerm.length > 0) {
			setIsOpen(true)
		}
		setSelectedIndex(-1)
	}, [debouncedSearchTerm])

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault()
			setSelectedIndex((prevIndex) => (prevIndex < searchResults!.length ? prevIndex + 1 : prevIndex))
		} else if (e.key === 'ArrowUp') {
			e.preventDefault()
			setSelectedIndex((prevIndex) => (prevIndex > -1 ? prevIndex - 1 : -1))
		} else if (e.key === 'Enter') {
			e.preventDefault()
			if (selectedIndex === searchResults?.length) {
				handleViewAllResults()
			} else if (selectedIndex > -1) {
				const selectedProduct = searchResults![selectedIndex]
				if (selectedProduct) {
					navigate({
						to: `/products/${selectedProduct.categoryId}/${selectedProduct.subCategoryId}/${selectedProduct.id}`
					})
					setIsOpen(false)
				}
			}
		}
	}

	useEffect(() => {
		if (resultsRef.current && selectedIndex > -1) {
			const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement
			if (selectedElement) {
				selectedElement.scrollIntoView({ block: 'nearest' })
			}
		}
	}, [selectedIndex])

	const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setLocalSearchTerm(e.target.value)
	}, [])

	const handleViewAllResults = useCallback(() => {
		navigate({
			to: '/products',
			search: (prev: Record<string, unknown>) => ({ ...prev, search: localSearchTerm }),
			replace: true
		})
		setIsOpen(false)
	}, [localSearchTerm, navigate])

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button variant='outline' className='w-full md:w-auto relative'>
					<Search className='mr-2 h-4 w-4' />
					{localSearchTerm ? `${t('searchPopover.titleActive')}: ${localSearchTerm}` : t('searchPopover.titleInactive')}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-80 z-50' align='center' sideOffset={5}>
				<div className='space-y-4'>
					<div className='relative'>
						<Input
							ref={inputRef}
							type='text'
							placeholder={t('searchPopover.placeholder')}
							value={localSearchTerm}
							onChange={handleSearchChange}
							onKeyDown={handleKeyDown}
						/>
						{isPending && <Loader2 className='absolute right-2 top-1/2 -mt-2 h-4 w-4 animate-spin' />}
					</div>
					<div ref={resultsRef} className='max-h-60 overflow-auto'>
						{isPending ? (
							Array(3)
								.fill(0)
								.map((_, index) => <SearchPopoverSkeleton key={index} />)
						) : searchResults && searchResults.length > 0 ? (
							<>
								{searchResults.map((product: Product, index: number) => (
									<Link
										key={product.id}
										to={`/products/${product.categoryId}/${product.subCategoryId}/${product.id}`}
										className={`block p-2 hover:bg-muted ${index === selectedIndex ? 'bg-muted' : ''}`}
										onClick={() => setIsOpen(false)}
									>
										<div className='flex items-center space-x-2'>
											<img src={product.imageUrl} alt={t(product.nameKey)} className='w-10 h-10 object-cover rounded' />
											<div>
												<p className='font-medium'>{t(product.nameKey)}</p>
												<p className='text-sm text-muted-foreground'>{formatEclipse(t(product.descriptionKey), 50)}</p>
											</div>
										</div>
									</Link>
								))}
								<Button
									variant='ghost'
									className={`w-full justify-start p-2 ${selectedIndex === searchResults.length ? 'bg-muted' : ''}`}
									onClick={handleViewAllResults}
								>
									{t('searchPopover.viewAll')}
								</Button>
							</>
						) : (
							<p className='text-center text-muted-foreground py-2'>{t('searchPopover.noResults')}</p>
						)}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
})

SearchPopover.displayName = 'SearchPopover'

export default SearchPopover
