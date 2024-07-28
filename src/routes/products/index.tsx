import { ProductList } from '@/components/product-list'
import { createFileRoute } from '@tanstack/react-router'

const ProductsIndexComponent = () => {
	return <ProductList />
}

export const Route = createFileRoute('/products/')({
	component: ProductsIndexComponent,
})
