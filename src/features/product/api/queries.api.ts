import { Category, Model, Product, ProductListQueryParams } from '@/types'
import { infiniteQueryOptions, useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getCatalog, getCategoryList, getFilteredProducts, getModelsByProductId, getProductById } from './product.api'

export const filteredProductsQueryOptions = (params: ProductListQueryParams) =>
	infiniteQueryOptions({
		queryKey: ['filteredProducts', params],
		queryFn: ({ pageParam = 1 }) => getFilteredProducts({ ...params, page: pageParam }),
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.products.length < lastPage.pageSize) return undefined
			return pages.length + 1
		}
	})

export function useProductId(productId: string) {
	return useQuery<Product | null, Error>({
		queryKey: ['products', { productId }],
		queryFn: () => getProductById(productId),
		enabled: !!productId
	})
}

export function useCatalogsQuery() {
	return useQuery({
		queryKey: ['catalog'],
		queryFn: getCatalog
	})
}

export function useFilteredProductsQuery(params: ProductListQueryParams) {
	return useInfiniteQuery({
		queryKey: ['filteredProducts', params],
		queryFn: ({ pageParam = 1 }) => getFilteredProducts({ ...params, page: pageParam }),
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.products.length < lastPage.pageSize) return undefined
			return pages.length + 1
		}
	})
}

export function useCategoryListQuery() {
	return useQuery<Category[], Error>({
		queryKey: ['categoryList'],
		queryFn: getCategoryList
	})
}

export function useModelsQuery(productId: string) {
	return useQuery<Model[], Error>({
		queryKey: ['models', { productId }],
		queryFn: () => getModelsByProductId(productId),
		enabled: !!productId
	})
}
