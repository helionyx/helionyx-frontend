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
