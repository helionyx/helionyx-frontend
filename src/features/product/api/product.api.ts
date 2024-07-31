import { products } from '@/db'
import { FilteredProductsResponse, Product, ProductFilters, ProductListQueryParams } from '../types/product'

export const getProductIds = async (): Promise<number[]> => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	return products.map((product) => product.id)
}

export const getProducts = async (): Promise<Product[]> => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	return products
}

export const getProductById = async (id: number): Promise<Product | null> => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const product = products.find((product) => product.id === id)
	return product || null
}

export const getCatalog = async (): Promise<ProductFilters> => {
	await new Promise((resolve) => setTimeout(resolve, 500))

	const category = [...new Set(products.map((p) => p.category))]
	const power = [...new Set(products.map((p) => p.power))]
	const wavelength = [...new Set(products.map((p) => p.wavelength))]

	return { category, power, wavelength }
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
