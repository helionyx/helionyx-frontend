import { infiniteQueryOptions, queryOptions, useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { ProductListQueryParams } from '../types/product'
import { getCatalog, getFilteredProducts, getProductById, getProducts, getRelatedProducts } from './product.api'

export const productsQueryOptions = queryOptions({
	queryKey: ['products'],
	queryFn: () => getProducts()
})

export const productQueryOption = (productId: number) =>
	queryOptions({
		queryKey: ['products', { productId }],
		queryFn: () => getProductById(productId)
	})

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

export function useProducts() {
	return useQuery({
		queryKey: ['products'],
		queryFn: () => getProducts()
	})
}

export function useProductId(productId: number) {
	return useQuery({
		queryKey: ['products', { productId }],
		queryFn: () => getProductById(productId)
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
		initialPageParam: 1,
		queryKey: ['filteredProducts', params],
		queryFn: ({ pageParam }) => getFilteredProducts({ ...params, page: pageParam }),
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.products.length < lastPage.pageSize) return undefined
			return pages.length + 1
		}
	})
}

export function useRelatedProductsQuery(id: number | null | undefined, category: string | null | undefined) {
	return useQuery({
		queryKey: ['relatedProducts', { id, category }],
		queryFn: () => getRelatedProducts(id as number, category as string),
		enabled: id !== null && id !== undefined && category !== null && category !== undefined
	})
}
