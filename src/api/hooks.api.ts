import { useQuery } from '@tanstack/react-query'
import productsService from './products.api'
import { ProductListQueryParams } from '@/types'

export function useProductId(productId: string) {
	return useQuery({
		queryKey: ['products', { productId }],
		queryFn: () => productsService.getProductById(productId),
		enabled: !!productId
	})
}

export function useModelsQuery(productId: string) {
	return useQuery({
		queryKey: ['models', { productId }],
		queryFn: () => productsService.getModelsByProductId(productId),
		enabled: !!productId
	})
}

export function useRelatedProductsQuery(id: string | null | undefined, categoryId: string | null | undefined) {
	return useQuery({
		queryKey: ['relatedProducts', { id, categoryId }],
		queryFn: () => productsService.getRelatedProducts(id as string, categoryId as string),
		enabled: id !== null && id !== undefined && categoryId !== null && categoryId !== undefined
	})
}

export function useProductsRelatedSubcategory(params: Partial<ProductListQueryParams> = {}) {
	return useQuery({
		queryKey: ['products', params],
		queryFn: () => productsService.getFilteredProducts(params)
	})
}
