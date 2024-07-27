import { queryOptions } from '@tanstack/react-query'
import { getProductById, getProducts } from './product.service'

export const productsQueryOptions = queryOptions({
	queryKey: ['products'],
	queryFn: () => getProducts(),
})

export const productQueryOption = (productId: string) =>
	queryOptions({
		queryKey: ['posts', { productId }],
		queryFn: () => getProductById(productId),
	})
