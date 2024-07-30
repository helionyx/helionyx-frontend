import {
	getCategories,
	getFilteredProducts,
	getPowers,
	getProductById,
	getProducts,
	getRelatedProducts,
	getWaveLengths
} from '@/routes/products/-api/product.api'
import { ProductListQueryParams } from '@/routes/products/-types/product'
import { queryOptions, useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const productsQueryOptions = queryOptions({
	queryKey: ['products'],
	queryFn: () => getProducts()
})

export const productQueryOption = (productId: number) =>
	queryOptions({
		queryKey: ['products', { productId }],
		queryFn: () => getProductById(productId)
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

export function useCategoriesQuery() {
	return useQuery({
		queryKey: ['categories'],
		queryFn: getCategories
	})
}

export function usePowersQuery() {
	return useQuery({
		queryKey: ['powers'],
		queryFn: getPowers
	})
}

export function useWaveLengthsQuery() {
	return useQuery({
		queryKey: ['wavelengths'],
		queryFn: getWaveLengths
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
