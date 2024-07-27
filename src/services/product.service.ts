import type { Product } from '@/types/product'
import axios from 'axios'

const BASE_URI_PREFIX = 'http://localhost:3000'
const axiosInstance = axios.create({ baseURL: BASE_URI_PREFIX })

export class PostNotFoundError extends Error {}

export const getProductIds = async () => {
	const response = await axiosInstance.get<Product[]>('products')
	return response.data.map((product) => product.id) || []
}

export const getProducts = async () => {
	const response = await axiosInstance.get<Product[]>('products')
	return response.data || []
}

export const getProductById = async (id: string) => {
	const response = await axiosInstance.get<Product>(`products/${id}`)
	return response.data || null
}
