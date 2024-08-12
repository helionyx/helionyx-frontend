import { categories, subCategories, products, models } from '@/databases'
import { Category, Product, ProductListQueryParams, FilteredProductsResponse, Model } from '../types/product'

export const getProductIds = async (): Promise<string[]> => {
	return products.map((product) => product.id)
}

export const getProducts = async (): Promise<Product[]> => {
	return products
}

export const getProductById = async (id: string): Promise<Product | null> => {
	return products.find((product) => product.id === id) || null
}

export const getCatalog = async (): Promise<{ category: string[] }> => {
	const categoryNames = categories.map((c) => c.name)
	return { category: categoryNames }
}

export const getFilteredProducts = async (params: ProductListQueryParams): Promise<FilteredProductsResponse> => {
	const { category, search, page = 1, pageSize = 6 } = params

	const filteredProducts = products.filter((product) => {
		const productCategory = categories.find(
			(c) => c.id === subCategories.find((sc) => sc.id === product.subCategoryId)?.categoryId
		)
		const matchesCategory = category?.length ? category.includes(productCategory?.name || '') : true
		const matchesSearch = search
			? product.name.toLowerCase().includes(search.toLowerCase()) ||
				product.description.toLowerCase().includes(search.toLowerCase())
			: true

		return matchesCategory && matchesSearch
	})

	const paginatedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize)

	return { products: paginatedProducts, totalCount: filteredProducts.length, pageSize }
}

export const getRelatedProducts = async (id: string, categoryId: string): Promise<Product[]> => {
	const relatedProducts = products
		.filter((product) => {
			const productSubCategory = subCategories.find((sc) => sc.id === product.subCategoryId)
			return productSubCategory?.categoryId === categoryId && product.id !== id
		})
		.slice(0, 6)

	return relatedProducts
}

export const getCategoryList = async (): Promise<Category[]> => {
	return categories
}

export const getModelById = async (productId: string): Promise<Model | null> => {
	return models.find((model) => model.productId === productId) || null
}

export const getModelsByProductId = async (productId: string): Promise<Model[]> => {
	return models.filter((model) => model.productId === productId)
}
