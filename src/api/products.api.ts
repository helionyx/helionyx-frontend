import { categories, models, products, subCategories } from '@/databases'
import { FilteredProductsResponse, Model, Product, ProductListQueryParams } from '@/types'

interface IProductsService {
	getProductById: (id: string) => Promise<Product | null>
	getModelsByProductId: (productId: string) => Promise<Model[]>
	getRelatedProducts: (id: string, subCategoryId: string) => Promise<Product[]>
	getProductsRelatedSubCategory: (category: string) => Promise<Product[]>
	getFilteredProducts: (params: ProductListQueryParams) => Promise<FilteredProductsResponse>
}

class ProductsService implements IProductsService {
	public getProductById = async (id: string) => {
		return products.find((product) => product.id === id) || null
	}

	public getModelsByProductId = async (productId: string) => {
		return models.filter((model) => model.productId === productId)
	}

	public getRelatedProducts = async (id: string, subCategoryId: string) => {
		const relatedProducts = products
			.filter((product) => product.subCategoryId === subCategoryId && product.id !== id)
			.slice(0, 6)

		return relatedProducts
	}

	public getProductsRelatedSubCategory = async (category: string) => {
		await new Promise((resolve) => setTimeout(resolve, 1000))

		// Find the category object
		const categoryObj = categories.find((c) => c.name.toLowerCase() === category.toLowerCase())
		if (!categoryObj) return []

		// Find all subcategories for this category
		const relatedSubCategories = subCategories.filter((sc) => sc.categoryId === categoryObj.id)

		// Filter products that belong to these subcategories
		const relatedProducts = products.filter((product) =>
			relatedSubCategories.some((sc) => sc.id === product.subCategoryId)
		)

		return relatedProducts
	}

	public getFilteredProducts = async (params: ProductListQueryParams) => {
		const { category, subCategory, search, page = 1, pageSize = 6 } = params

		const filteredProducts = products.filter((product) => {
			// Check if the product matches the category
			const matchesCategory = category ? product.categoryId === category : true

			// Check if the product matches the subcategory
			const matchesSubCategory = subCategory?.length ? subCategory.includes(product.subCategoryId) : true

			// Check if the product matches the search term
			const matchesSearch = search
				? product.nameKey.toLowerCase().includes(search.toLowerCase()) ||
					product.descriptionKey.toLowerCase().includes(search.toLowerCase())
				: true

			return matchesCategory && matchesSubCategory && matchesSearch
		})

		const startIndex = (page - 1) * pageSize
		const endIndex = startIndex + pageSize
		const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

		return {
			products: paginatedProducts,
			totalCount: filteredProducts.length,
			pageSize,
			currentPage: page,
			totalPages: Math.ceil(filteredProducts.length / pageSize)
		}
	}
}

export default new ProductsService()
