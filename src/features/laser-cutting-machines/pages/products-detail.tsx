import { useModelsQuery, useProductId, useRelatedProductsQuery } from '@/api/hooks.api'
import RenderProductDetail from '@/components/render-product-detail'
import RenderProductImage from '@/components/render-product-image'
import { Card, CardContent } from '@/components/ui/card'
import ProductDetailPending from '@/features/product/components/product-detail-pending'
import { useParams } from '@tanstack/react-router'
import React from 'react'
import ProductContent from '../components/product-content'
import RelatedProducts from '@/components/related-products'

const ProductDetail: React.FC = () => {
	const { productId } = useParams({ from: '/laser-cutting-machines/_layout/$productId' })
	const { data: product, isPending: isProductPending } = useProductId(productId)
	const { data: models, isPending: isModelsPending } = useModelsQuery(productId)
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		product?.id,
		product?.subCategoryId
	)

	if (isProductPending || isModelsPending) return <ProductDetailPending />
	if (!product || !models) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	return (
		<>
			<Card className='mb-8'>
				<CardContent className='p-6'>
					<div className='flex flex-col lg:flex-row gap-8'>
						{/* Product images section */}
						<div className='lg:w-1/2'>
							<RenderProductImage product={product} />
						</div>

						{/* Product details section */}
						<div className='lg:w-1/2'>
							<RenderProductDetail product={product} />
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Product content section */}
			<Card className='mb-8 border-x-0'>
				<ProductContent product={product} models={models} />
			</Card>

			{/* Related products section */}
			<div className='mt-8'>
				<RelatedProducts
					isRelatedPending={isRelatedPending}
					relatedProducts={relatedProducts}
					slug='/laser-cutting-machines/$productId'
				/>
			</div>
		</>
	)
}

export default ProductDetail
