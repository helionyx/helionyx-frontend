// src/services/productService.ts
import type { Product } from '@/types/product'

// Mock data (สมมติว่านี่คือข้อมูลที่ใช้ใน ProductList)
const products: Product[] = [
	{
		id: '1',
		name: 'Fiber Laser Marking Machine',
		category: 'Laser Marking',
		description: 'High-performance laser marking solution for industrial applications.',
		images: [
			'https://shop-image.readyplanet.com/Vqj-g6dGhDTgpg9_-BhWXG_jSJE=/500x500/558eb2ac64f74f5bbaccd15db3cdbbc0',
		],
		features: [
			'High-speed continuous marking',
			'COHENRENT industrial-grade metal RF CO2 laser tube',
			'Marking speed up to 200m/min',
			'Supports various encoding and numbering functions',
		],
		specifications: [
			{ name: 'Laser Type', value: 'CO2 RF metal tube' },
			{ name: 'Wavelength', value: '10.6μm' },
			{ name: 'Marking Area', value: '50x50mm - 300x300mm' },
			{ name: 'Marking Speed', value: 'Up to 200m/min' },
		],
		applications: ['Production date marking', 'Anti-counterfeiting', 'Medical packaging', 'Food packaging'],
	},
	{
		id: '2',
		name: 'CO2 Laser Cutting Machine',
		category: 'Laser Cutting',
		description: 'High-performance laser cutting solution for industrial applications.',
		images: [
			'https://5.imimg.com/data5/SELLER/Default/2021/2/ML/TT/LU/13071583/co2-laser-cutting-and-engraving-machine.jpg',
		],
		features: [
			'High-speed continuous marking',
			'COHENRENT industrial-grade metal RF CO2 laser tube',
			'Marking speed up to 200m/min',
			'Supports various encoding and numbering functions',
		],
		specifications: [
			{ name: 'Laser Type', value: 'CO2 RF metal tube' },
			{ name: 'Wavelength', value: '10.6μm' },
			{ name: 'Marking Area', value: '50x50mm - 300x300mm' },
			{ name: 'Marking Speed', value: 'Up to 200m/min' },
		],
		applications: ['Production date marking', 'Anti-counterfeiting', 'Medical packaging', 'Food packaging'],
	},
	{
		id: '3',
		name: 'Laser Cleaning System',
		category: 'Laser Cleaning',
		description: 'High-performance laser cutting solution for industrial applications.',
		images: ['https://www.alliedscientificpro.com/web/image/product.template/5895/image_1024?unique=d46fc4c'],
		features: [
			'High-speed continuous marking',
			'COHENRENT industrial-grade metal RF CO2 laser tube',
			'Marking speed up to 200m/min',
			'Supports various encoding and numbering functions',
		],
		specifications: [
			{ name: 'Laser Type', value: 'CO2 RF metal tube' },
			{ name: 'Wavelength', value: '10.6μm' },
			{ name: 'Marking Area', value: '50x50mm - 300x300mm' },
			{ name: 'Marking Speed', value: 'Up to 200m/min' },
		],
		applications: ['Production date marking', 'Anti-counterfeiting', 'Medical packaging', 'Food packaging'],
	},
	{
		id: '4',
		name: 'Fiber Laser Welding Machine',
		category: 'Laser Welding',
		description: 'High-performance laser cutting solution for industrial applications.',
		images: [
			'https://cdn11.bigcommerce.com/s-hc1rju73cz/images/stencil/1280x1280/products/1123/3239/welder_gun__64855.1719877610.jpg?c=1',
		],
		features: [
			'High-speed continuous marking',
			'COHENRENT industrial-grade metal RF CO2 laser tube',
			'Marking speed up to 200m/min',
			'Supports various encoding and numbering functions',
		],
		specifications: [
			{ name: 'Laser Type', value: 'CO2 RF metal tube' },
			{ name: 'Wavelength', value: '10.6μm' },
			{ name: 'Marking Area', value: '50x50mm - 300x300mm' },
			{ name: 'Marking Speed', value: 'Up to 200m/min' },
		],
		applications: ['Production date marking', 'Anti-counterfeiting', 'Medical packaging', 'Food packaging'],
	},
	{
		id: '5',
		name: 'UV Laser Marking Machine',
		category: 'Laser Marking',
		description: 'High-performance laser cutting solution for industrial applications.',
		images: ['https://image.makewebeasy.net/makeweb/m_1920x0/HB9nnBPzl/DefaultData/456.jpg'],
		features: [
			'High-speed continuous marking',
			'COHENRENT industrial-grade metal RF CO2 laser tube',
			'Marking speed up to 200m/min',
			'Supports various encoding and numbering functions',
		],
		specifications: [
			{ name: 'Laser Type', value: 'CO2 RF metal tube' },
			{ name: 'Wavelength', value: '10.6μm' },
			{ name: 'Marking Area', value: '50x50mm - 300x300mm' },
			{ name: 'Marking Speed', value: 'Up to 200m/min' },
		],
		applications: ['Production date marking', 'Anti-counterfeiting', 'Medical packaging', 'Food packaging'],
	},
	{
		id: '6',
		name: 'Metal Sheet Laser Cutting Machine',
		category: 'Laser Cutting',
		description: 'High-performance laser cutting solution for industrial applications.',
		images: ['https://sheet-metal.tailiftgroup.com/storage/media/sheet-metal/A3015_T6/A3015T6.jpg'],
		features: [
			'High-speed continuous marking',
			'COHENRENT industrial-grade metal RF CO2 laser tube',
			'Marking speed up to 200m/min',
			'Supports various encoding and numbering functions',
		],
		specifications: [
			{ name: 'Laser Type', value: 'CO2 RF metal tube' },
			{ name: 'Wavelength', value: '10.6μm' },
			{ name: 'Marking Area', value: '50x50mm - 300x300mm' },
			{ name: 'Marking Speed', value: 'Up to 200m/min' },
		],
		applications: ['Production date marking', 'Anti-counterfeiting', 'Medical packaging', 'Food packaging'],
	},
	{
		id: '7',
		name: 'C-C series CO2 flying laser marking machine (COHENRENT laser source)',
		category: 'Laser Cutting',
		images: [
			'https://www.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-600nw-499196506.jpg',
			'https://www.shutterstock.com/image-photo/portrait-licking-ginger-cat-looking-600nw-1924974395.jpg',
			'https://www.shutterstock.com/image-photo/studio-portrait-sitting-tabby-cat-600nw-2269389471.jpg',
			'https://th-thumbnailer.cdn-si-edu.com/F-A6ekiYMBhxWxbIE5x9Uvd_lOY=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler_public%2F55%2F95%2F55958815-3a8a-4032-ac7a-ff8c8ec8898a%2Fgettyimages-1067956982.jpg',
		],
		description:
			'The C-C series CO2 flying laser marking machine is a high-speed continuous marking model designed to improve productivity. It uses COHENRENT industrial-grade metal RF CO2 laser tube. It has good optical modes and fast processing efficiency. The marking speed of the production line is up to 200m/min ( Single-line 2MM-high numbers and letters), it provides high-speed, high-yield application identification requirements, it mainly used in production date, anti-counterfeiting, medical and food packaging industries. This model supports functions such as automatic encoding, serial number, batch number, date, barcode, two-dimensional code, automatic number skipping, etc., to meet the needs of customers in different industries.',
		features: [
			'High-speed continuous marking',
			'COHENRENT industrial-grade metal RF CO2 laser tube',
			'Marking speed up to 200m/min',
			'Supports various encoding and numbering functions',
		],
		specifications: [
			{ name: 'Laser Type', value: 'CO2 RF metal tube' },
			{ name: 'Wavelength', value: '10.6μm' },
			{ name: 'Marking Area', value: '50x50mm - 300x300mm' },
			{ name: 'Marking Speed', value: 'Up to 200m/min' },
		],
		applications: ['Production date marking', 'Anti-counterfeiting', 'Medical packaging', 'Food packaging'],
	},
]

export class PostNotFoundError extends Error {}

export const getProductIds = async (): Promise<string[]> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(products.map((product) => product.id)), 500)
	})
}

export const getProducts = async (): Promise<Product[]> => {
	// Simulate API call
	return new Promise((resolve) => {
		setTimeout(() => resolve(products), 500)
	})
}

export const getProductById = async (id: string): Promise<Product | undefined> => {
	// Simulate API call
	return new Promise((resolve) => {
		setTimeout(() => {
			const product = products.find((p) => p.id === id)
			resolve(product)
		}, 500)
	})
}
