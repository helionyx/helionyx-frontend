import { products } from '@/db'
import type { FilteredProductsResponse, Product, ProductListQueryParams } from '@/routes/products/-types/product'
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
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return products
}

export const getProductById = async (id: number): Promise<Product | null> => {
	// const response = await axiosInstance.get<Product>(`products/${id}`)
	// return response.data || null
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const product = products.find((product) => product.id === id)
	return product || null
}

export const getCategories = async (): Promise<string[]> => {
	await new Promise((resolve) => setTimeout(resolve, 500))
	return [...new Set(products.map((p) => p.category))]
}

export const getPowers = async (): Promise<string[]> => {
	await new Promise((resolve) => setTimeout(resolve, 500))
	return [...new Set(products.map((p) => p.power))]
}

export const getWaveLengths = async (): Promise<string[]> => {
	await new Promise((resolve) => setTimeout(resolve, 500))
	return [...new Set(products.map((p) => p.wavelength))]
}

export const getFilteredProducts = async (params: ProductListQueryParams): Promise<FilteredProductsResponse> => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const { category, power, wavelength, search, page = 1, pageSize = 6 } = params

	const filteredProducts = products.filter((product) => {
		const matchesCategory = category?.length ? category.includes(product.category) : true
		const matchesPower = power?.length ? power.includes(product.power) : true
		const matchesWavelength = wavelength?.length ? wavelength.includes(product.wavelength) : true
		const matchesSearch = search
			? product.name.toLowerCase().includes(search.toLowerCase()) ||
				product.summarization.toLowerCase().includes(search.toLowerCase())
			: true

		return matchesCategory && matchesPower && matchesWavelength && matchesSearch
	})

	const paginatedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize)

	return { products: paginatedProducts, totalCount: filteredProducts.length, pageSize }
}

export const getRelatedProducts = async (id: number, category: string): Promise<Product[] | []> => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const relatedProducts = products.filter((p) => p.category === category && p.id !== id).slice(0, 6)
	return relatedProducts || []
}
