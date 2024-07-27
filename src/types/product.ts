interface Specification {
	name: string
	value: string
}

export interface Product {
	id: string
	name: string
	category: string
	description: string
	images: string[]
	features: string[]
	specifications: Specification[]
	applications: string[]
}
