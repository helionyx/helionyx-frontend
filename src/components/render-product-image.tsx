import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Product } from '@/types'
import React, { useEffect, useState } from 'react'

type RenderProductImageProps = {
	product: Product
}

const RenderProductImage: React.FC<RenderProductImageProps> = ({ product }) => {
	const [currentImage, setCurrentImage] = useState(0)
	const [carouselApi, setCarouselApi] = useState<CarouselApi>()

	useEffect(() => {
		if (carouselApi) {
			carouselApi.scrollTo(currentImage)

			const onSelect = () => {
				setCurrentImage(carouselApi.selectedScrollSnap())
			}

			carouselApi.on('select', onSelect)

			return () => {
				carouselApi.off('select', onSelect)
			}
		}
	}, [carouselApi, currentImage])

	const handleClickCarousel = (index: number) => {
		setCurrentImage(index)
		carouselApi?.scrollTo(index)
	}

	return (
		<>
			<Carousel className='w-full max-w-xl mx-auto' setApi={setCarouselApi}>
				<CarouselContent>
					{[product.imageUrl, ...product.additionalImages].map((image, index) => (
						<CarouselItem key={index}>
							<img
								src={image}
								alt={`${product.nameKey} ${index + 1}`}
								className='w-full min-h-[300px] object-contain rounded-lg'
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className='flex justify-start mt-4 overflow-x-auto pb-2'>
				{[product.imageUrl, ...product.additionalImages].map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Thumbnail ${index + 1}`}
						className={`w-16 h-16 object-cover rounded-md mr-2 flex-shrink-0 cursor-pointer ${
							currentImage === index ? 'border-2 border-amber-500' : ''
						}`}
						onClick={() => handleClickCarousel(index)}
					/>
				))}
			</div>
		</>
	)
}

export default RenderProductImage
