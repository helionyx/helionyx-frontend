interface Specification {
	name: string
	value: string
}

export interface Product {
	id: number
	name: string
	category: string
	summarization: string
	description: string
	power: string
	wavelength: string
	mainImage: string
	imagesList: string[]
	features: string[]
	specifications: Specification[]
	applications: string[]
}

export interface ProductListQueryParams {
	search?: string
	category?: string | string[]
	power?: string[]
	wavelength?: string[]
	page?: number
	pageSize?: number
}

export interface ProductFilters {
	category: string[]
	power: string[]
	wavelength: string[]
}

export interface FilteredProductsResponse {
	products: Product[]
	totalCount: number
	pageSize: number
}
