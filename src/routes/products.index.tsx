import ProductList from '@/pages/ProductList'
import { createFileRoute } from '@tanstack/react-router'

const ProductsIndexComponent = () => {
	return <ProductList />
}

export const Route = createFileRoute('/products/')({
	component: ProductsIndexComponent,
})
