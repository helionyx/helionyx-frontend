/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as ContactImport } from './routes/contact'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsImport } from './routes/products'
import { Route as ProductsProductIdImport } from './routes/products.$productId'
import { Route as ProductsIndexImport } from './routes/products.index'

// Create/Update Routes

const ProductsRoute = ProductsImport.update({
	path: '/products',
	getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
	path: '/contact',
	getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
	path: '/about',
	getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
	path: '/',
	getParentRoute: () => rootRoute,
} as any)

const ProductsIndexRoute = ProductsIndexImport.update({
	path: '/',
	getParentRoute: () => ProductsRoute,
} as any)

const ProductsProductIdRoute = ProductsProductIdImport.update({
	path: '/$productId',
	getParentRoute: () => ProductsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
	interface FileRoutesByPath {
		'/': {
			id: '/'
			path: '/'
			fullPath: '/'
			preLoaderRoute: typeof IndexImport
			parentRoute: typeof rootRoute
		}
		'/about': {
			id: '/about'
			path: '/about'
			fullPath: '/about'
			preLoaderRoute: typeof AboutImport
			parentRoute: typeof rootRoute
		}
		'/contact': {
			id: '/contact'
			path: '/contact'
			fullPath: '/contact'
			preLoaderRoute: typeof ContactImport
			parentRoute: typeof rootRoute
		}
		'/products': {
			id: '/products'
			path: '/products'
			fullPath: '/products'
			preLoaderRoute: typeof ProductsImport
			parentRoute: typeof rootRoute
		}
		'/products/$productId': {
			id: '/products/$productId'
			path: '/$productId'
			fullPath: '/products/$productId'
			preLoaderRoute: typeof ProductsProductIdImport
			parentRoute: typeof ProductsImport
		}
		'/products/': {
			id: '/products/'
			path: '/'
			fullPath: '/products/'
			preLoaderRoute: typeof ProductsIndexImport
			parentRoute: typeof ProductsImport
		}
	}
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
	IndexRoute,
	AboutRoute,
	ContactRoute,
	ProductsRoute: ProductsRoute.addChildren({
		ProductsProductIdRoute,
		ProductsIndexRoute,
	}),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/contact",
        "/products"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/products": {
      "filePath": "products.tsx",
      "children": [
        "/products/$productId",
        "/products/"
      ]
    },
    "/products/$productId": {
      "filePath": "products.$productId.tsx",
      "parent": "/products"
    },
    "/products/": {
      "filePath": "products.index.tsx",
      "parent": "/products"
    }
  }
}
ROUTE_MANIFEST_END */
