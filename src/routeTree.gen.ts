/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProductsRouteImport } from './routes/products/route'
import { Route as ContactRouteImport } from './routes/contact/route'
import { Route as AboutRouteImport } from './routes/about/route'
import { Route as IndexRouteImport } from './routes/index/route'
import { Route as ProductsIndexImport } from './routes/products/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as ProductsProductIdRouteImport } from './routes/products/$productId/route'

// Create/Update Routes

const ProductsRouteRoute = ProductsRouteImport.update({
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const ContactRouteRoute = ContactRouteImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRouteRoute = AboutRouteImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRouteRoute = IndexRouteImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsIndexRoute = ProductsIndexImport.update({
  path: '/',
  getParentRoute: () => ProductsRouteRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  path: '/',
  getParentRoute: () => AboutRouteRoute,
} as any)

const ProductsProductIdRouteRoute = ProductsProductIdRouteImport.update({
  path: '/$productId',
  getParentRoute: () => ProductsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      id: '/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsRouteImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId': {
      id: '/products/$productId'
      path: '/$productId'
      fullPath: '/products/$productId'
      preLoaderRoute: typeof ProductsProductIdRouteImport
      parentRoute: typeof ProductsRouteImport
    }
    '/about/': {
      id: '/about/'
      path: '/'
      fullPath: '/about/'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof AboutRouteImport
    }
    '/products/': {
      id: '/products/'
      path: '/'
      fullPath: '/products/'
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof ProductsRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRouteRoute,
  AboutRouteRoute: AboutRouteRoute.addChildren({ AboutIndexRoute }),
  ContactRouteRoute,
  ProductsRouteRoute: ProductsRouteRoute.addChildren({
    ProductsProductIdRouteRoute,
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
      "filePath": "index/route.tsx"
    },
    "/about": {
      "filePath": "about/route.tsx",
      "children": [
        "/about/"
      ]
    },
    "/contact": {
      "filePath": "contact/route.tsx"
    },
    "/products": {
      "filePath": "products/route.tsx",
      "children": [
        "/products/$productId",
        "/products/"
      ]
    },
    "/products/$productId": {
      "filePath": "products/$productId/route.tsx",
      "parent": "/products"
    },
    "/about/": {
      "filePath": "about/index.tsx",
      "parent": "/about"
    },
    "/products/": {
      "filePath": "products/index.tsx",
      "parent": "/products"
    }
  }
}
ROUTE_MANIFEST_END */
