import { categories, models, products, subCategories } from '@/databases'
import { FilteredProductsResponse, Model, Product, ProductListQueryParams } from '@/types'
import i18next from 'i18next'

interface IProductsService {
	getProductById: (id: string) => Promise<Product | null>
	getModelsByProductId: (productId: string) => Promise<Model[]>
	getRelatedProducts: (id: string, subCategoryId: string) => Promise<Product[]>
	getProductsRelatedSubCategory: (category: string) => Promise<Product[]>
	getFilteredProducts: (params: ProductListQueryParams) => Promise<FilteredProductsResponse>
	getCatalog: () => Promise<{ id: string; name: string }[]>
	searchProducts: (searchTerm: string, language: string) => Promise<Product[]>
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
		const { category, subCategory, search, page = 1, pageSize = 6, language = 'en' } = params

		const filteredProducts = products.filter((product) => {
			// Check if the product matches the category
			let matchesCategory = undefined
			if (typeof category === 'string') {
				matchesCategory = category ? product.categoryId === category : true
			} else if (typeof category === 'object') {
				matchesCategory = category?.length ? category.includes(product.categoryId) : true
			}

			// Check if the product matches the subcategory
			const matchesSubCategory = subCategory?.length ? subCategory.includes(product.subCategoryId) : true

			// Check if the product matches the search term in both languages
			const matchesSearch = search ? this.productMatchesSearch(product, search, language) : true

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

	public getCatalog = async (): Promise<{ id: string; name: string }[]> => {
		return categories.map((c) => ({ id: c.id, name: c.name }))
	}

	public searchProducts = async (searchTerm: string, language: string): Promise<Product[]> => {
		return products.filter((product) => this.productMatchesSearch(product, searchTerm, language))
	}

	private productMatchesSearch(product: Product, search: string, language: string): boolean {
		const searchLower = search.toLowerCase()
		const nameKey = product.nameKey.toLowerCase()
		const descriptionKey = product.descriptionKey.toLowerCase()

		// Check if the search term matches the key directly
		if (nameKey.includes(searchLower) || descriptionKey.includes(searchLower)) {
			return true
		}

		// Check if the search term matches the translated value
		const translatedName = i18next.t(product.nameKey, { lng: language }).toLowerCase()
		const translatedDescription = i18next.t(product.descriptionKey, { lng: language }).toLowerCase()

		return translatedName.includes(searchLower) || translatedDescription.includes(searchLower)
	}
}

export default new ProductsService()
