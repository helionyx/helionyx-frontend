import { infiniteQueryOptions, queryOptions, useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { Category, Model, Product, ProductListQueryParams } from '../types/product'
import {
	getCatalog,
	getCategoryList,
	getFilteredProducts,
	getModelById,
	getModelsByProductId,
	getProductById,
	getProducts,
	getRelatedProducts
} from './product.api'

export const productsQueryOptions = queryOptions({
	queryKey: ['products'],
	queryFn: () => getProducts()
})

export const productQueryOption = (productId: string) =>
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
	return useQuery<Product[], Error>({
		queryKey: ['products'],
		queryFn: () => getProducts()
	})
}

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

export function useRelatedProductsQuery(id: string | null | undefined, categoryId: string | null | undefined) {
	return useQuery<Product[], Error>({
		queryKey: ['relatedProducts', { id, categoryId }],
		queryFn: () => getRelatedProducts(id as string, categoryId as string),
		enabled: id !== null && id !== undefined && categoryId !== null && categoryId !== undefined
	})
}

export function useCategoryListQuery() {
	return useQuery<Category[], Error>({
		queryKey: ['categoryList'],
		queryFn: getCategoryList
	})
}

export function useModelQuery(productId: string) {
	return useQuery<Model | null, Error>({
		queryKey: ['model', { productId }],
		queryFn: () => getModelById(productId),
		enabled: !!productId
	})
}

export function useModelsQuery(productId: string) {
	return useQuery<Model[], Error>({
		queryKey: ['models', { productId }],
		queryFn: () => getModelsByProductId(productId),
		enabled: !!productId
	})
}
