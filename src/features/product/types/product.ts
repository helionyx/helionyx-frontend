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
	name: string
	description: string
	features: string[]
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
	page?: number
	pageSize?: number
}

export interface ProductFilters {
	category: string[]
}

export interface FilteredProductsResponse {
	products: Product[]
	totalCount: number
	pageSize: number
}
