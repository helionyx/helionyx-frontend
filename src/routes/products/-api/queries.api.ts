import { queryOptions, useQuery } from '@tanstack/react-query'
import { getProductById, getProducts } from './product.api'

export const productsQueryOptions = queryOptions({
	queryKey: ['products'],
	queryFn: () => getProducts(),
})

export const productQueryOption = (productId: number) =>
	queryOptions({
		queryKey: ['products', { productId }],
		queryFn: () => getProductById(productId),
	})

export const useProducts = () =>
	useQuery({
		queryKey: ['products'],
		queryFn: () => getProducts(),
	})

export const useProductId = (productId: number) =>
	useQuery({
		queryKey: ['products', { productId }],
		queryFn: () => getProductById(productId),
	})
