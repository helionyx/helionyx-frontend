import { ProductListQueryParams } from '@/types'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import productsService from './products.api'

export function useProductId(productId: string) {
	return useQuery({
		queryKey: ['products', { productId }],
		queryFn: () => productsService.getProductById(productId),
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

export function useCatalogsQuery() {
	return useQuery({
		queryKey: ['catalog'],
		queryFn: productsService.getCatalog
	})
}

export function useFilteredProductsQuery(params: Partial<ProductListQueryParams> = {}) {
	const { i18n } = useTranslation()

	return useInfiniteQuery({
		queryKey: ['filteredProducts', { ...params, language: i18n.language }],
		queryFn: ({ pageParam = 1 }) =>
			productsService.getFilteredProducts({ ...params, page: pageParam, language: i18n.language }),
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.products.length < lastPage.pageSize) return undefined
			return pages.length + 1
		}
	})
}

export function useProductSearch(searchTerm: string) {
	const { i18n } = useTranslation()

	return useQuery({
		queryKey: ['productSearch', searchTerm, i18n.language],
		queryFn: () => productsService.searchProducts(searchTerm, i18n.language)
	})
}
