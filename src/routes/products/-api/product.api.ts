import { products } from '@/db'
import type { Product } from '@/routes/products/-types/product'
// import axios from 'axios'

// const BASE_URI_PREFIX = 'http://localhost:10000'
// const axiosInstance = axios.create({ baseURL: BASE_URI_PREFIX })

export class PostNotFoundError extends Error {}

export const getProductIds = async (): Promise<number[]> => {
	// const response = await axiosInstance.get<Product[]>('products')
	// return response.data.map((product) => product.id) || []
	return products.map((product) => product.id)
}

export const getProducts = async (): Promise<Product[]> => {
	// const response = await axiosInstance.get<Product[]>('products')
	// return response.data || []
	// await new Promise((resolve) => setTimeout(resolve, 1000))
	return products
}

export const getProductById = async (id: number): Promise<Product | null> => {
	// const response = await axiosInstance.get<Product>(`products/${id}`)
	// return response.data || null
	// await new Promise((resolve) => setTimeout(resolve, 1000))
	const product = products.find((product) => product.id === id)
	return product || null
}
