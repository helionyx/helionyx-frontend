export interface Specifications {
	[group: string]: { [key: string]: string | string[] } | string | string[]
}

export interface Category {
	id: string
	name: string
	description?: string
}

export interface SubCategory {
	id: string
	categoryId: string
	name: string
	description?: string
}

export interface Product {
	id: string
	categoryId: string
	subCategoryId: string
	nameKey: string
	descriptionKey: string
	subDescriptionKey?: string
	featuresKey: string
	imageUrl: string
	additionalImages: string[]
}

export interface Model {
	id: string
	productId: string
	name: string
	specifications: Specifications
}

export interface ProductListQueryParams {
	search?: string
	category?: string | string[]
	subCategory?: string | string[]
	page?: number
	pageSize?: number
	language?: string
}

export interface ProductFilters {
	category: string[]
}

export interface FilteredProductsResponse {
	products: Product[]
	totalCount: number
	pageSize: number
}
