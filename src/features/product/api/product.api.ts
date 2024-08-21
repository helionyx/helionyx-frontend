import { categories, models, products, subCategories } from '@/databases'
import { Category, FilteredProductsResponse, Model, Product, ProductListQueryParams } from '@/types'

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
			? product.nameKey.toLowerCase().includes(search.toLowerCase()) ||
				product.descriptionKey.toLowerCase().includes(search.toLowerCase())
			: true

		return matchesCategory && matchesSearch
	})

	const paginatedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize)

	return { products: paginatedProducts, totalCount: filteredProducts.length, pageSize }
}

export const getCategoryList = async (): Promise<Category[]> => {
	return categories
}

export const getModelsByProductId = async (productId: string): Promise<Model[]> => {
	return models.filter((model) => model.productId === productId)
}
