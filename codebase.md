# vite.config.ts

```ts
import path from 'node:path'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})

```

# tsconfig.node.json

```json
{
	"compilerOptions": {
		"composite": true,
		"tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
		"skipLibCheck": true,
		"module": "ESNext",
		"moduleResolution": "bundler",
		"allowSyntheticDefaultImports": true,
		"strict": true,
		"noEmit": true
	},
	"include": ["vite.config.ts"]
}

```

# tsconfig.json

```json
{
	"files": [],
	"references": [
		{
			"path": "./tsconfig.app.json"
		},
		{
			"path": "./tsconfig.node.json"
		}
	],
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"@/*": ["./src/*"]
		}
	}
}

```

# tsconfig.app.json

```json
{
	"compilerOptions": {
		"composite": true,
		"tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
		"target": "ES2020",
		"useDefineForClassFields": true,
		"lib": ["ES2020", "DOM", "DOM.Iterable"],
		"module": "ESNext",
		"skipLibCheck": true,

		"baseUrl": ".",
		"paths": {
			"@/*": ["./src/*"]
		},

		"moduleResolution": "bundler",
		"allowImportingTsExtensions": true,
		"resolveJsonModule": true,
		"isolatedModules": true,
		"moduleDetection": "force",
		"noEmit": true,
		"jsx": "react-jsx",

		"strict": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noFallthroughCasesInSwitch": true
	},
	"include": ["src"]
}

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}

```

# postcss.config.js

```js
export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}

```

# package.json

```json
{
	"name": "helionyx-frontend",
	"version": "0.0.0",
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "tsc -b && vite build",
		"lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
		"preview": "vite preview",
		"biome:format": "biome format --write .",
		"biome:lint": "biome lint .",
		"biome:check": "biome check --write ."
	},
	"dependencies": {
		"@material-tailwind/react": "^2.1.9",
		"@radix-ui/react-accordion": "^1.2.0",
		"@radix-ui/react-avatar": "^1.1.0",
		"@radix-ui/react-checkbox": "^1.1.1",
		"@radix-ui/react-dialog": "^1.1.1",
		"@radix-ui/react-label": "^2.1.0",
		"@radix-ui/react-navigation-menu": "^1.2.0",
		"@radix-ui/react-popover": "^1.1.1",
		"@radix-ui/react-separator": "^1.1.0",
		"@radix-ui/react-slot": "^1.1.0",
		"@radix-ui/react-tabs": "^1.1.0",
		"@radix-ui/react-tooltip": "^1.1.2",
		"@tanstack/react-query": "^5.51.11",
		"@tanstack/react-query-devtools": "^5.51.11",
		"@tanstack/react-router": "^1.45.11",
		"axios": "^1.7.2",
		"class-variance-authority": "^0.7.0",
		"clsx": "^2.1.1",
		"embla-carousel-react": "^8.1.7",
		"immer": "^10.1.1",
		"json-server": "^1.0.0-beta.1",
		"lucide-react": "^0.416.0",
		"react": "^18.3.1",
		"react-dom": "^18.3.1",
		"react-icons": "^5.2.1",
		"react-lazy-load-image-component": "^1.6.2",
		"tailwind-merge": "^2.4.0",
		"tailwindcss-animate": "^1.0.7",
		"zustand": "^4.5.4"
	},
	"devDependencies": {
		"@biomejs/biome": "1.8.3",
		"@eslint/compat": "^1.1.1",
		"@eslint/eslintrc": "^3.1.0",
		"@eslint/js": "^9.8.0",
		"@tanstack/eslint-plugin-query": "^5.51.15",
		"@tanstack/router-devtools": "^1.45.11",
		"@tanstack/router-plugin": "^1.45.8",
		"@types/node": "^20.14.12",
		"@types/react": "^18.3.3",
		"@types/react-dom": "^18.3.0",
		"@types/react-lazy-load-image-component": "^1.6.4",
		"@typescript-eslint/eslint-plugin": "^7.15.0",
		"@typescript-eslint/parser": "^7.15.0",
		"@vitejs/plugin-react": "^4.3.1",
		"autoprefixer": "^10.4.19",
		"eslint": "^8.57.0",
		"eslint-config-prettier": "^9.1.0",
		"eslint-plugin-prettier": "^5.2.1",
		"eslint-plugin-react": "^7.35.0",
		"eslint-plugin-react-hooks": "^4.6.2",
		"eslint-plugin-react-refresh": "^0.4.7",
		"globals": "^15.8.0",
		"postcss": "^8.4.40",
		"prettier": "3.3.3",
		"tailwindcss": "^3.4.7",
		"typescript": "^5.2.2",
		"vite": "^5.3.4"
	}
}

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Helionyx</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

# components.json

```json
{
	"$schema": "https://ui.shadcn.com/schema.json",
	"style": "default",
	"rsc": false,
	"tsx": true,
	"tailwind": {
		"config": "tailwind.config.js",
		"css": "src/index.css",
		"baseColor": "slate",
		"cssVariables": true,
		"prefix": ""
	},
	"aliases": {
		"components": "@/components",
		"utils": "@/lib/utils"
	}
}

```

# src/vite-env.d.ts

```ts
/// <reference types="vite/client" />

```

# src/routeTree.gen.ts

```ts
/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as ProductsRouteImport } from './routes/products/route'
import { Route as ContactRouteImport } from './routes/contact/route'
import { Route as AboutRouteImport } from './routes/about/route'
import { Route as IndexRouteImport } from './routes/index/route'
import { Route as ProductsProductsLayoutRouteImport } from './routes/products/_products-layout/route'
import { Route as ProductsProductsLayoutIndexImport } from './routes/products/_products-layout/index'
import { Route as ProductsProductsLayoutProductIdRouteImport } from './routes/products/_products-layout/$productId/route'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

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

const ProductsProductsLayoutRouteRoute =
  ProductsProductsLayoutRouteImport.update({
    id: '/_products-layout',
    getParentRoute: () => ProductsRouteRoute,
  } as any)

const ProductsProductsLayoutIndexRoute =
  ProductsProductsLayoutIndexImport.update({
    path: '/',
    getParentRoute: () => ProductsProductsLayoutRouteRoute,
  } as any)

const ProductsProductsLayoutProductIdRouteRoute =
  ProductsProductsLayoutProductIdRouteImport.update({
    path: '/$productId',
    getParentRoute: () => ProductsProductsLayoutRouteRoute,
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
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/products/_products-layout': {
      id: '/products/_products-layout'
      path: ''
      fullPath: '/products'
      preLoaderRoute: typeof ProductsProductsLayoutRouteImport
      parentRoute: typeof ProductsRouteImport
    }
    '/products/_products-layout/$productId': {
      id: '/products/_products-layout/$productId'
      path: '/$productId'
      fullPath: '/products/$productId'
      preLoaderRoute: typeof ProductsProductsLayoutProductIdRouteImport
      parentRoute: typeof ProductsProductsLayoutRouteImport
    }
    '/products/_products-layout/': {
      id: '/products/_products-layout/'
      path: '/'
      fullPath: '/products/'
      preLoaderRoute: typeof ProductsProductsLayoutIndexImport
      parentRoute: typeof ProductsProductsLayoutRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRouteRoute,
  AboutRouteRoute,
  ContactRouteRoute,
  ProductsRouteRoute: ProductsRouteRoute.addChildren({
    ProductsProductsLayoutRouteRoute:
      ProductsProductsLayoutRouteRoute.addChildren({
        ProductsProductsLayoutProductIdRouteRoute,
        ProductsProductsLayoutIndexRoute,
      }),
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
        "/products",
        "/_layout"
      ]
    },
    "/": {
      "filePath": "index/route.tsx"
    },
    "/about": {
      "filePath": "about/route.tsx"
    },
    "/contact": {
      "filePath": "contact/route.tsx"
    },
    "/products": {
      "filePath": "products/route.tsx",
      "children": [
        "/products/_products-layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx"
    },
    "/products/_products-layout": {
      "filePath": "products/_products-layout/route.tsx",
      "parent": "/products",
      "children": [
        "/products/_products-layout/$productId",
        "/products/_products-layout/"
      ]
    },
    "/products/_products-layout/$productId": {
      "filePath": "products/_products-layout/$productId/route.tsx",
      "parent": "/products/_products-layout"
    },
    "/products/_products-layout/": {
      "filePath": "products/_products-layout/index.tsx",
      "parent": "/products/_products-layout"
    }
  }
}
ROUTE_MANIFEST_END */

```

# src/main.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
} else {
	console.error('Failed to find the root element')
}

```

# src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		--background: 0 0% 100%;
		--foreground: 222.2 84% 4.9%;
		--card: 0 0% 100%;
		--card-foreground: 222.2 84% 4.9%;
		--popover: 0 0% 100%;
		--popover-foreground: 222.2 84% 4.9%;
		--primary: 222.2 47.4% 11.2%;
		--primary-foreground: 210 40% 98%;
		--secondary: 210 40% 96.1%;
		--secondary-foreground: 222.2 47.4% 11.2%;
		--muted: 210 40% 96.1%;
		--muted-foreground: 215.4 16.3% 46.9%;
		--accent: 210 40% 96.1%;
		--accent-foreground: 222.2 47.4% 11.2%;
		--destructive: 0 84.2% 60.2%;
		--destructive-foreground: 210 40% 98%;
		--border: 214.3 31.8% 91.4%;
		--input: 214.3 31.8% 91.4%;
		--ring: 222.2 84% 4.9%;
		--radius: 0.5rem;
		--chart-1: 12 76% 61%;
		--chart-2: 173 58% 39%;
		--chart-3: 197 37% 24%;
		--chart-4: 43 74% 66%;
		--chart-5: 27 87% 67%;
	}

	.dark {
		--background: 222.2 84% 4.9%;
		--foreground: 210 40% 98%;
		--card: 222.2 84% 4.9%;
		--card-foreground: 210 40% 98%;
		--popover: 222.2 84% 4.9%;
		--popover-foreground: 210 40% 98%;
		--primary: 210 40% 98%;
		--primary-foreground: 222.2 47.4% 11.2%;
		--secondary: 217.2 32.6% 17.5%;
		--secondary-foreground: 210 40% 98%;
		--muted: 217.2 32.6% 17.5%;
		--muted-foreground: 215 20.2% 65.1%;
		--accent: 217.2 32.6% 17.5%;
		--accent-foreground: 210 40% 98%;
		--destructive: 0 62.8% 30.6%;
		--destructive-foreground: 210 40% 98%;
		--border: 217.2 32.6% 17.5%;
		--input: 217.2 32.6% 17.5%;
		--ring: 212.7 26.8% 83.9%;
		--chart-1: 220 70% 50%;
		--chart-2: 160 60% 45%;
		--chart-3: 30 80% 55%;
		--chart-4: 280 65% 60%;
		--chart-5: 340 75% 55%;
	}
}

@layer base {
	* {
		@apply border-border;
	}
	body {
		@apply bg-background text-foreground;
	}
}

@keyframes pulse {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
	}
}

.skeleton-pulse {
	animation: pulse 1.5s ease-in-out 0.5s infinite;
}

.skeleton-shine {
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.3) 50%,
		rgba(255, 255, 255, 0) 100%
	);
	background-size: 200% 100%;
	animation: shine 1.5s infinite;
}

@keyframes shine {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}

```

# src/App.tsx

```tsx
import { routeTree } from '@/routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createRouter } from '@tanstack/react-router'

const queryClient = new QueryClient()

const router = createRouter({
	routeTree,
	context: { queryClient },
	defaultPreload: 'intent',
	defaultPreloadStaleTime: 0
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App

```

# src/App.css

```css

```

# public/vite.svg

This is a file of the type: SVG Image

# public/placeholder.svg

This is a file of the type: SVG Image

# src/stores/store.ts

```ts
import { ProductSlice, createProductSlice } from '@/stores/product-slice'
import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type StoreState = ProductSlice

export const useStore = create<StoreState>()(
	devtools(
		subscribeWithSelector(
			immer((...a) => ({
				...createProductSlice(...a)
			}))
		)
	)
)

```

# src/stores/product-slice.ts

```ts
import { ProductFilters } from '@/routes/products/-types/product'
import { StateCreator } from 'zustand'

type ProductState = {
	searchTerm: string
	selectedFilters: ProductFilters
	isFilterSheetOpen: boolean
}

type ProductActions = {
	setSearchTerm: (term: string) => void
	setSelectedFilters: (filters: ProductFilters) => void
	setIsFilterSheetOpen: (isOpen: boolean) => void
	resetFilters: () => void
	initializeFilters: (params: {
		category: CategoryKey | null
		power: string[]
		wavelength: string[]
		search: string
	}) => void
	updateFilter: (type: keyof ProductFilters, value: string) => void
}

export type ProductSlice = ProductState & ProductActions

export const categoryMap = {
	marking: 'Laser Marking Machines',
	cleaning: 'Laser Cleaning Machines',
	cutting: 'Laser Cutting Machines'
} as const

export type CategoryKey = keyof typeof categoryMap

const initialState: ProductState = {
	searchTerm: '',
	selectedFilters: {
		category: [],
		power: [],
		wavelength: []
	},
	isFilterSheetOpen: false
}

export const createProductSlice: StateCreator<ProductSlice, [['zustand/immer', never]], [], ProductSlice> = (set) => ({
	...initialState,
	setSearchTerm: (term) =>
		set((state) => {
			state.searchTerm = term
		}),
	setSelectedFilters: (filters) =>
		set((state) => {
			state.selectedFilters = filters
		}),
	setIsFilterSheetOpen: (isOpen) =>
		set((state) => {
			state.isFilterSheetOpen = isOpen
		}),
	resetFilters: () => set(initialState),
	initializeFilters: ({ category, power, wavelength, search }) =>
		set((state) => {
			state.searchTerm = search
			state.selectedFilters = {
				category: category ? [categoryMap[category]] : [],
				power: power || [],
				wavelength: wavelength || []
			}
		}),
	updateFilter: (type, value) =>
		set((state) => {
			if (value === 'All') {
				state.selectedFilters[type] = []
			} else if (state.selectedFilters[type].includes(value)) {
				state.selectedFilters[type] = state.selectedFilters[type].filter((item) => item !== value)
			} else {
				state.selectedFilters[type].push(value)
			}
		})
})

```

# src/routes/_layout.tsx

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
	component: () => <div>Hello /_layout!</div>
})

```

# src/routes/__root.tsx

```tsx
import type { QueryClient } from '@tanstack/react-query'
import { Outlet, ScrollRestoration, createRootRouteWithContext } from '@tanstack/react-router'
import React from 'react'

const TanStackRouterDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: React.lazy(() =>
				import('@tanstack/router-devtools').then((res) => ({
					default: res.TanStackRouterDevtools
				}))
			)

const RootRoute: React.FC = () => {
	return (
		<>
			<ScrollRestoration />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	)
}

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	component: RootRoute
})

```

# src/lib/utils.ts

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

```

# src/layouts/Layout.tsx

```tsx
import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import line from '@/assets/line.png'
import logo_helionyx_rebg from '@/assets/logo-rebg.png'
import logo_helionyx from '@/assets/logo.jpg'
import telephone from '@/assets/telephone.png'
import tiktok from '@/assets/tiktok.png'
import SearchPopover from '@/components/SearchPopover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Link, useRouter } from '@tanstack/react-router'
import { ChevronRight, Menu, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface BreadcrumbItem {
	label: string
	path: string
}

interface BreadcrumbProps {
	items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	if (items.length === 0) {
		return null
	}

	return (
		<nav className='mt-12' aria-label='Breadcrumb'>
			<ol className='inline-flex items-center space-x-1 md:space-x-3'>
				<li className='inline-flex items-center'>
					<Link to='/' className='inline-flex items-center text-md font-medium text-[#f89e44d3] hover:text-[#fd9b38]'>
						Home
					</Link>
				</li>
				{items.map((item) => (
					<li key={item.path}>
						<div className='flex items-center'>
							<ChevronRight className='w-4 h-4 text-gray-400' />
							<Link to={item.path} className='ml-1 text-md font-medium text-[#f89e44d3] hover:text-[#fd9b38] md:ml-2'>
								{item.label}
							</Link>
						</div>
					</li>
				))}
			</ol>
		</nav>
	)
}

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='bg-white text-[#F89D44] py-4 shadow-md relative z-50'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between'>
					<Link to='/'>
						<img className='h-20 w-auto' src={logo_helionyx} alt='' />
					</Link>

					<nav className='hidden md:block'>
						<NavigationMenu>
							<NavigationMenuList className='space-x-2'>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											to='/'
											className='px-4 py-2 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
										>
											HOME
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger
										className='px-4 py-2 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300
data-[state=open]:bg-transparent data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent'
									>
										<Link to='/products'>PRODUCTS</Link>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className='bg-white p-4 rounded-md shadow-lg w-40'>
											<li>
												<Link
													to='/products'
													search={{ category: 'marking' }}
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													Laser Marking
												</Link>
											</li>
											<li>
												<Link
													to='/products'
													search={{ category: 'cutting' }}
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													Laser Cutting
												</Link>
											</li>
											<li>
												<Link
													to='/products'
													search={{ category: 'cleaning' }}
													className='block p-2 rounded-md text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
												>
													Laser Cleaning
												</Link>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											to='/about'
											className='px-4 py-2 md:px-1 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
										>
											ABOUT US
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											to='/contact'
											className='px-4 py-2 rounded-md text-md font-medium text-zinc-950 hover:text-[#F89D44] transition-color duration-300'
										>
											CONTACT
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</nav>

					<div className='hidden md:flex items-center space-x-2'>
						<SearchPopover />
					</div>

					<Button
						variant='ghost'
						size='icon'
						className='md:hidden text-[#F89D44] hover:bg-[#db8e42]'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Menu className='h-6 w-6' />
					</Button>
				</div>

				{isMenuOpen && (
					<div className='md:hidden mt-4 bg-white p-4 rounded-md shadow-md'>
						<nav className='flex flex-col space-y-2'>
							<Link to='/' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								HOME
							</Link>
							<Link to='/products' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								PRODUCTS
							</Link>
							<Link to='/about' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								ABOUT US
							</Link>
							<Link to='/contact' className='text-zinc-950 hover:text-[#F89D44] transition-color duration-300'>
								CONTACT
							</Link>
						</nav>
						<div className='mt-4 relative'>
							<Input
								type='search'
								placeholder='Search...'
								className='w-full pl-10 pr-4 py-2 border-2 border-[#f4a95e] rounded-full focus:outline-none focus:ring-2 focus:ring--[#f4a95e] focus:border-transparent'
							/>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#F89D44]' />
						</div>
					</div>
				)}
			</div>
		</header>
	)
}

const Footer: React.FC = () => {
	return (
		<footer className='bg-gray-600 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className=''>
					<img src={logo_helionyx_rebg} className='h-16 w-auto mb-8' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-3xl font-semibold mb-5 pl-3'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/products' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									Products
								</Link>
							</li>
							<li>
								<Link to='/about' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									About Us
								</Link>
							</li>
							<li>
								<Link to='/contact' className='text-white text-lg hover:text-[#F89D44] pl-3'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-3xl font-semibold mb-5'>Contact Information</h3>
						<div className='flex flex-col gap-2.5'>
							<div className='flex flex-rows gap-2.5'>
								<img src={facebook} alt='' className='h-8 w-auto' />
								<a href='' className='text-lg content-center text-white hover:text-[#F89D44]'>
									Helionyx corp
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={line} alt='' className='h-8 w-auto' />
								<a href='' className='text-lg content-center text-white hover:text-[#F89D44]'>
									@Helionyx
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={instagram} alt='' className='h-8 w-auto' />
								<a href='' className='text-lg content-center text-white hover:text-[#F89D44]'>
									helionyx_ig
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={tiktok} alt='' className='h-8 w-auto' />
								<a href='' className='text-lg content-center text-white hover:text-[#F89D44]'>
									Helionyx
								</a>
							</div>
							<div className='flex flex-rows gap-2.5'>
								<img src={telephone} alt='' className='h-8 w-auto' />
								<p className='text-lg content-center text-white hover:text-[#F89D44] cursor-pointer'>+6693 574 8998</p>
							</div>
						</div>
					</div>
					<div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
						<form className='space-y-6' action='#'>
							<h5 className='text-xl font-semibold text-gray-900'>CONTACT US</h5>
							<div>
								<input
									type='text'
									name='name'
									id='name'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
									placeholder='Name'
									required
								/>
							</div>
							<div>
								<input
									type='text'
									name='email'
									id='email'
									placeholder='Email'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
									required
								/>
							</div>
							<div>
								<textarea
									name='message'
									id='message'
									placeholder='Message'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
									required
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full text-white bg-[#f89e44d3] hover:bg-[#fd9b38]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
							>
								SEND
							</button>
						</form>
					</div>
				</div>
				<div className='mt-8 pt-8 border-t border-white text-center text-white'>
					<p>&copy; 2024 Helionyx All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const router = useRouter()
	const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([])
	const [isHomePage, setIsHomePage] = useState(true)

	useEffect(() => {
		const path = router.state.location.pathname
		setIsHomePage(path === '/')

		const pathSegments = path.split('/').filter(Boolean)
		const newBreadcrumbItems = pathSegments.map((segment, index) => ({
			label: segment.charAt(0).toUpperCase() + segment.slice(1),
			path: `/${pathSegments.slice(0, index + 1).join('/')}`
		}))
		setBreadcrumbItems(newBreadcrumbItems)
	}, [router.state.location.pathname])

	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			{!isHomePage && (
				<div className='bg-gray-50'>
					<div className='container mx-auto px-4'>
						<Breadcrumb items={breadcrumbItems} />
					</div>
				</div>
			)}
			<main className={`flex-grow ${isHomePage ? '' : 'bg-gray-50'}`}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout

```

# src/components/index.tsx

```tsx

```

# src/components/SearchPopover.tsx

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Skeleton } from '@/components/ui/skeleton'
import { useFilteredProductsQuery } from '@/routes/products/-api/queries.api'
import useDebounce from '@/routes/products/-hook/useDebounce'
import { Link, useNavigate } from '@tanstack/react-router'
import { Loader2, Search } from 'lucide-react'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const SearchResultSkeleton: React.FC = () => (
	<div className='flex items-center space-x-2 p-2'>
		<Skeleton className='w-10 h-10 rounded' />
		<div className='space-y-2'>
			<Skeleton className='h-4 w-[150px]' />
			<Skeleton className='h-3 w-[200px]' />
		</div>
	</div>
)

const SearchPopover: React.FC = React.memo(() => {
	const [isOpen, setIsOpen] = useState(false)
	const [localSearchTerm, setLocalSearchTerm] = useState<string>('')
	const [selectedIndex, setSelectedIndex] = useState(-1)
	const debouncedSearchTerm = useDebounce(localSearchTerm, 300)

	const navigate = useNavigate()

	const { data, isLoading, isFetching } = useFilteredProductsQuery({ search: debouncedSearchTerm })

	const searchResults = data?.pages[0]?.products || []
	const isPending = isLoading || isFetching

	const inputRef = useRef<HTMLInputElement>(null)
	const resultsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (debouncedSearchTerm.length > 0) {
			setIsOpen(true)
		}
		setSelectedIndex(-1)
	}, [debouncedSearchTerm])

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault()
			setSelectedIndex((prevIndex) => (prevIndex < searchResults.length ? prevIndex + 1 : prevIndex))
		} else if (e.key === 'ArrowUp') {
			e.preventDefault()
			setSelectedIndex((prevIndex) => (prevIndex > -1 ? prevIndex - 1 : -1))
		} else if (e.key === 'Enter') {
			e.preventDefault()
			if (selectedIndex === searchResults.length) {
				handleViewAllResults()
			} else if (selectedIndex > -1) {
				const selectedProduct = searchResults[selectedIndex]
				if (selectedProduct) {
					navigate({ to: '/products/$productId', params: { productId: selectedProduct.id.toString() } })
					setIsOpen(false)
				}
			}
		}
	}

	useEffect(() => {
		if (resultsRef.current && selectedIndex > -1) {
			const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement
			if (selectedElement) {
				selectedElement.scrollIntoView({ block: 'nearest' })
			}
		}
	}, [selectedIndex])

	const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setLocalSearchTerm(e.target.value)
	}, [])

	const handleViewAllResults = useCallback(() => {
		navigate({
			to: '/products',
			search: (prev) => ({ ...prev, search: localSearchTerm }),
			replace: true
		})
		setIsOpen(false)
	}, [localSearchTerm, navigate])

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button variant='outline' className='w-full md:w-auto relative'>
					<Search className='mr-2 h-4 w-4' />
					{localSearchTerm ? `Search: ${localSearchTerm}` : 'Search products'}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-80 z-50' align='center' sideOffset={5}>
				<div className='space-y-4'>
					<div className='relative'>
						<Input
							ref={inputRef}
							type='text'
							placeholder='Search products...'
							value={localSearchTerm}
							onChange={handleSearchChange}
							onKeyDown={handleKeyDown}
						/>
						{isPending && <Loader2 className='absolute right-2 top-1/2 -mt-2 h-4 w-4 animate-spin' />}
					</div>
					<div ref={resultsRef} className='max-h-60 overflow-auto'>
						{isPending ? (
							Array(3)
								.fill(0)
								.map((_, index) => <SearchResultSkeleton key={index} />)
						) : searchResults.length > 0 ? (
							<>
								{searchResults.map((product, index) => (
									<Link
										key={product.id}
										to='/products/$productId'
										params={{ productId: product.id.toString() }}
										className={`block p-2 hover:bg-muted ${index === selectedIndex ? 'bg-muted' : ''}`}
										onClick={() => setIsOpen(false)}
									>
										<div className='flex items-center space-x-2'>
											<img src={product.mainImage} alt={product.name} className='w-10 h-10 object-cover rounded' />
											<div>
												<p className='font-medium'>{product.name}</p>
												<p className='text-sm text-muted-foreground'>{product.summarization.slice(0, 50)}...</p>
											</div>
										</div>
									</Link>
								))}
								<Button
									variant='ghost'
									className={`w-full justify-start p-2 ${selectedIndex === searchResults.length ? 'bg-muted' : ''}`}
									onClick={handleViewAllResults}
								>
									View all results
								</Button>
							</>
						) : (
							<p className='text-center text-muted-foreground py-2'>No results found</p>
						)}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
})

SearchPopover.displayName = 'SearchPopover'

export default SearchPopover

```

# src/routes/products/route.tsx

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')()

```

# src/routes/index/route.tsx

```tsx
import HomePage from '@/routes/index/-pages/Home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: HomePage
})

```

# src/routes/contact/route.tsx

```tsx
import Contact from '@/routes/contact/-pages/Contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
	component: Contact
})

```

# src/routes/about/route.tsx

```tsx
import About from '@/routes/about/-pages/About'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
	component: About
})

```

# src/components/ui/tooltip.tsx

```tsx
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

import { cn } from '@/lib/utils'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={cn(
			'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
			className
		)}
		{...props}
	/>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

# src/components/ui/tabs.tsx

```tsx
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
			className
		)}
		{...props}
	/>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
			className
		)}
		{...props}
	/>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
			className
		)}
		{...props}
	/>
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

# src/components/ui/skeleton.tsx

```tsx
import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
}

export { Skeleton }

```

# src/components/ui/sheet.tsx

```tsx
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { type VariantProps, cva } from 'class-variance-authority'
import { X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(
			'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
		ref={ref}
	/>
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
	'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
				bottom:
					'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
				left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
				right:
					'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	}
)

interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
		VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
	({ side = 'right', className, children, ...props }, ref) => (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
				{children}
				<SheetPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'>
					<X className='h-4 w-4' />
					<span className='sr-only'>Close</span>
				</SheetPrimitive.Close>
			</SheetPrimitive.Content>
		</SheetPortal>
	)
)
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title ref={ref} className={cn('text-lg font-semibold text-foreground', className)} {...props} />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
}

```

# src/components/ui/separator.tsx

```tsx
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Separator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
	<SeparatorPrimitive.Root
		ref={ref}
		decorative={decorative}
		orientation={orientation}
		className={cn('shrink-0 bg-border', orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]', className)}
		{...props}
	/>
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

```

# src/components/ui/popover.tsx

```tsx
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }

```

# src/components/ui/navigation-menu.tsx

```tsx
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const NavigationMenu = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
		{...props}
	>
		{children}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}
		{...props}
	/>
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
	'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
)

const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyle(), 'group', className)}
		{...props}
	>
		{children}{' '}
		<ChevronDown
			className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
			aria-hidden='true'
		/>
	</NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
			className
		)}
		{...props}
	/>
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className={cn('absolute left-0 top-full flex justify-center')}>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
				className
			)}
			ref={ref}
			{...props}
		/>
	</div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
			className
		)}
		{...props}
	>
		<div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' />
	</NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
}

```

# src/components/ui/label.tsx

```tsx
import * as LabelPrimitive from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const labelVariants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70')

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

# src/components/ui/input.tsx

```tsx
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Input.displayName = 'Input'

export { Input }

```

# src/components/ui/dialog.tsx

```tsx
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
	/>
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(
				'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
				className
			)}
			{...props}
		>
			{children}
			<DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
				<X className='h-4 w-4' />
				<span className='sr-only'>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn('text-lg font-semibold leading-none tracking-tight', className)}
		{...props}
	/>
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
}

```

# src/components/ui/checkbox.tsx

```tsx
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
			className
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
			<Check className='h-4 w-4' />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

```

# src/components/ui/carousel.tsx

```tsx
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
	opts?: CarouselOptions
	plugins?: CarouselPlugin
	orientation?: 'horizontal' | 'vertical'
	setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: ReturnType<typeof useEmblaCarousel>[1]
	scrollPrev: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
	const context = React.useContext(CarouselContext)

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />')
	}

	return context
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
	({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === 'horizontal' ? 'x' : 'y',
			},
			plugins
		)
		const [canScrollPrev, setCanScrollPrev] = React.useState(false)
		const [canScrollNext, setCanScrollNext] = React.useState(false)

		const onSelect = React.useCallback((api: CarouselApi) => {
			if (!api) {
				return
			}

			setCanScrollPrev(api.canScrollPrev())
			setCanScrollNext(api.canScrollNext())
		}, [])

		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev()
		}, [api])

		const scrollNext = React.useCallback(() => {
			api?.scrollNext()
		}, [api])

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === 'ArrowLeft') {
					event.preventDefault()
					scrollPrev()
				} else if (event.key === 'ArrowRight') {
					event.preventDefault()
					scrollNext()
				}
			},
			[scrollPrev, scrollNext]
		)

		React.useEffect(() => {
			if (!api || !setApi) {
				return
			}

			setApi(api)
		}, [api, setApi])

		React.useEffect(() => {
			if (!api) {
				return
			}

			onSelect(api)
			api.on('reInit', onSelect)
			api.on('select', onSelect)

			return () => {
				api?.off('select', onSelect)
			}
		}, [api, onSelect])

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext,
				}}
			>
				<div
					ref={ref}
					onKeyDownCapture={handleKeyDown}
					className={cn('relative', className)}
					role='region'
					aria-roledescription='carousel'
					{...props}
				>
					{children}
				</div>
			</CarouselContext.Provider>
		)
	}
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { carouselRef, orientation } = useCarousel()

		return (
			<div ref={carouselRef} className='overflow-hidden'>
				<div
					ref={ref}
					className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
					{...props}
				/>
			</div>
		)
	}
)
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { orientation } = useCarousel()

		return (
			<div
				ref={ref}
				role='group'
				aria-roledescription='slide'
				className={cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', className)}
				{...props}
			/>
		)
	}
)
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
	({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
		const { orientation, scrollPrev, canScrollPrev } = useCarousel()

		return (
			<Button
				ref={ref}
				variant={variant}
				size={size}
				className={cn(
					'absolute  h-8 w-8 rounded-full',
					orientation === 'horizontal'
						? '-left-12 top-1/2 -translate-y-1/2'
						: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
					className
				)}
				disabled={!canScrollPrev}
				onClick={scrollPrev}
				{...props}
			>
				<ArrowLeft className='h-4 w-4' />
				<span className='sr-only'>Previous slide</span>
			</Button>
		)
	}
)
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
	({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
		const { orientation, scrollNext, canScrollNext } = useCarousel()

		return (
			<Button
				ref={ref}
				variant={variant}
				size={size}
				className={cn(
					'absolute h-8 w-8 rounded-full',
					orientation === 'horizontal'
						? '-right-12 top-1/2 -translate-y-1/2'
						: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
					className
				)}
				disabled={!canScrollNext}
				onClick={scrollNext}
				{...props}
			>
				<ArrowRight className='h-4 w-4' />
				<span className='sr-only'>Next slide</span>
			</Button>
		)
	}
)
CarouselNext.displayName = 'CarouselNext'

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }

```

# src/components/ui/card.tsx

```tsx
import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props} />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
	)
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
	)
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
	)
)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

# src/components/ui/button.tsx

```tsx
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }

```

# src/components/ui/badge.tsx

```tsx
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
				secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				outline: 'text-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }

```

# src/components/ui/avatar.tsx

```tsx
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
		{...props}
	/>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
		{...props}
	/>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

```

# src/components/ui/accordion.tsx

```tsx
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className='flex'>
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
				className
			)}
			{...props}
		>
			{children}
			<ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
		{...props}
	>
		<div className={cn('pb-4 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

# src/routes/products/-types/product.ts

```ts
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

```

# src/routes/products/_products-layout/route.tsx

```tsx
import Layout from '@/layouts/Layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import React from 'react'

const ProductLayoutComponent: React.FC = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}

export const Route = createFileRoute('/products/_products-layout')({
	component: ProductLayoutComponent
})

```

# src/routes/products/_products-layout/index.tsx

```tsx
import ProductList from '@/routes/products/-pages/ProductList'
import { createFileRoute } from '@tanstack/react-router'
import { ProductListQueryParams } from '../-types/product'

export const Route = createFileRoute('/products/_products-layout/')({
	validateSearch: (search: Record<string, unknown>): ProductListQueryParams => {
		return {
			category: (search.category as string[]) || '',
			power: (search.power as string[]) || '',
			wavelength: (search.wavelength as string[]) || '',
			search: (search.search as string) || ''
		}
	},
	component: ProductList
})

```

# src/routes/products/-pages/ProductList.tsx

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useFilteredProductsQuery } from '@/routes/products/-api/queries.api'
import FilterContent from '@/routes/products/-components/product-list/FilterContent'
import SearchPopover from '@/routes/products/-components/product-list/SearchPopover'
import SkeletonCard from '@/routes/products/-components/product-list/SkeletonCard'
import { CategoryKey } from '@/stores/product-slice'
import { useStore } from '@/stores/store'
import { Link, useSearch } from '@tanstack/react-router'
import { Filter, Loader2 } from 'lucide-react'
import React, { useEffect, useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'

const ProductList: React.FC = () => {
	const { category: uriCategory, search, power, wavelength } = useSearch({ from: '/products/_products-layout/' })

	const { selectedFilters, isFilterSheetOpen, setIsFilterSheetOpen, initializeFilters } = useStore(
		useShallow((state) => ({
			selectedFilters: state.selectedFilters,
			isFilterSheetOpen: state.isFilterSheetOpen,
			setIsFilterSheetOpen: state.setIsFilterSheetOpen,
			initializeFilters: state.initializeFilters
		}))
	)

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } = useFilteredProductsQuery({
		...selectedFilters,
		search: search || ''
	})

	const allProducts = useMemo(() => data?.pages.flatMap((page) => page.products) || [], [data])

	useEffect(() => {
		initializeFilters({
			category: uriCategory as CategoryKey | null,
			power: power || [],
			wavelength: wavelength || [],
			search: search || ''
		})
	}, [uriCategory, power, wavelength, search, initializeFilters])

	const renderProducts = useMemo(() => {
		if (isPending) {
			return Array(6)
				.fill(null)
				.map((_, idx) => <SkeletonCard key={idx} />)
		}

		return allProducts.map((product) => (
			<Card
				key={product.id}
				className='max-w-sm mx-auto bg-muted p-6 rounded-lg shadow-md overflow-hidden space-y-4 h-full hover:border-amber-500 hover:shadow-lg transition-shadow'
			>
				<CardHeader className='p-0 relative overflow-hidden rounded-lg flex justify-center items-center'>
					<img
						src={product.mainImage}
						alt={product.name}
						width={400}
						height={300}
						className='w-48 h-48 object-contain bg-transparent'
					/>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
				</CardHeader>
				<CardContent className='p-0 space-y-2'>
					<CardTitle className='text-lg'>{product.name}</CardTitle>
					<CardDescription>{product.summarization.slice(0, 50)}...</CardDescription>
				</CardContent>
				<CardFooter className='p-0 flex items-center justify-end gap-2'>
					<Link to='/products/$productId' params={{ productId: product.id.toString() }}>
						<Button
							variant='outline'
							className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
						>
							More Detail
						</Button>
					</Link>
				</CardFooter>
			</Card>
		))
	}, [isPending, allProducts])

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='flex items-center justify-end gap-4 mb-4 md:hidden'>
				<div className='relative'>
					<SearchPopover />
				</div>
				<Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
					<SheetTrigger asChild>
						<Button variant='outline' className='md:hidden'>
							<Filter className='mr-2 h-4 w-4' />
							<p className='hidden sm:block'>Filters</p>
						</Button>
					</SheetTrigger>
					<SheetContent side='left' className='w-[300px] sm:w-[400px]'>
						<SheetHeader className='mb-8'>
							<SheetTitle></SheetTitle>
						</SheetHeader>
						<FilterContent />
					</SheetContent>
				</Sheet>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8'>
				<div className='hidden md:block bg-muted p-6 rounded-lg'>
					<FilterContent />
				</div>
				<div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>{renderProducts}</div>
					{!isPending && allProducts.length === 0 && (
						<div className='col-span-full text-center py-8'>
							<p>No products found matching your criteria.</p>
						</div>
					)}
					{hasNextPage && (
						<div className='mt-8 text-center'>
							<Button
								variant='outline'
								className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
								onClick={() => fetchNextPage()}
								disabled={isFetchingNextPage}
							>
								{isFetchingNextPage ? (
									<div className='flex items-center gap-2'>
										<Loader2 className='h-4 w-4 animate-spin' />
										<p>Load More...</p>
									</div>
								) : (
									<p>Load More</p>
								)}
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductList

```

# src/routes/products/-pages/ProductDetail.tsx

```tsx
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { useProductId, useRelatedProductsQuery } from '@/routes/products/-api/queries.api'
import ProductDetailSkeleton from '@/routes/products/-components/product-detail/ProductDetailSkeleton'
import RelatedProductsSkeleton from '@/routes/products/-components/product-detail/RelatedProductsSkeleton'
import { Link, useParams } from '@tanstack/react-router'
import { Mailbox, Phone, ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ProductDetail: React.FC = () => {
	const { productId } = useParams({ from: '/products/_products-layout/$productId' })
	const { data: product, isPending: isProductPending } = useProductId(Number(productId))
	const { data: relatedProducts, isPending: isRelatedPending } = useRelatedProductsQuery(
		Number(product?.id),
		product?.category
	)

	const [currentImage, setCurrentImage] = useState(0)
	const [carouselApi, setCarouselApi] = useState<CarouselApi>()

	useEffect(() => {
		if (carouselApi) {
			carouselApi.scrollTo(currentImage)

			const onSelect = () => {
				setCurrentImage(carouselApi.selectedScrollSnap())
			}

			carouselApi.on('select', onSelect)

			return () => {
				carouselApi.off('select', onSelect)
			}
		}
	}, [carouselApi, currentImage])

	if (isProductPending) return <ProductDetailSkeleton />
	if (!product) return <div className='container mx-auto px-4 py-8 text-center'>Product not found</div>

	return (
		<div className='container mx-auto px-4 py-8'>
			<Card className='mb-8'>
				<CardContent className='p-6'>
					<div className='flex flex-col lg:flex-row gap-8'>
						{/* Product images section */}
						<div className='lg:w-1/2'>
							<Carousel className='w-full max-w-xl mx-auto' setApi={setCarouselApi}>
								<CarouselContent>
									{product.imagesList.map((image, index) => (
										<CarouselItem key={index}>
											<img
												src={image}
												alt={`${product.name} ${index + 1}`}
												className='w-full h-[300px] object-contain rounded-lg'
											/>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious className='absolute left-2 top-1/2 -translate-y-1/2' />
								<CarouselNext className='absolute right-2 top-1/2 -translate-y-1/2' />
							</Carousel>
							<div className='flex justify-start mt-4 overflow-x-auto pb-2'>
								{product.imagesList.map((image, index) => (
									<img
										key={index}
										src={image}
										alt={`Thumbnail ${index + 1}`}
										className={`w-16 h-16 object-cover rounded-md mr-2 flex-shrink-0 cursor-pointer ${
											currentImage === index ? 'border-2 border-amber-500' : ''
										}`}
										onClick={() => {
											setCurrentImage(index)
											carouselApi?.scrollTo(index)
										}}
									/>
								))}
							</div>
						</div>

						{/* Product details section */}
						<div className='lg:w-1/2'>
							<CardTitle className='text-2xl md:text-3xl font-bold mb-4'>{product.name}</CardTitle>
							<CardDescription className='text-lg mb-6'>{product.summarization}</CardDescription>
							<div className='mb-6'>
								<CardTitle className='text-xl font-semibold mb-3'>Key Features:</CardTitle>
								<ul className='space-y-2'>
									{product.features.map((feature, index) => (
										<li key={index} className='flex items-start'>
											<Badge className='mr-2 mt-1 bg-green-500 flex-shrink-0'>{index + 1}</Badge>
											<CardDescription>{feature}</CardDescription>
										</li>
									))}
								</ul>
							</div>
							<Button className='w-full text-xl bg-amber-500 hover:bg-amber-600 transition-colors'>
								<ShoppingCart className='w-6 h-6 mr-2' />
								Get a Quote
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className='mb-8'>
				<CardContent className='p-6'>
					<div className='space-y-8'>
						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Overview</CardTitle>
							<CardDescription>{product.summarization}</CardDescription>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Description</CardTitle>
							<CardDescription>{product.description}</CardDescription>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Specifications</CardTitle>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
								{product.specifications.map((spec, index) => (
									<div key={index} className='bg-gray-100 p-4 rounded-lg'>
										<CardTitle className='text-sm font-semibold text-gray-600'>{spec.name}:</CardTitle>
										<CardDescription className='text-lg'>{spec.value}</CardDescription>
									</div>
								))}
							</div>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Product Applications</CardTitle>
							<ul className='list-disc pl-6'>
								{product.applications.map((application, index) => (
									<li key={index} className='mb-2'>
										<CardDescription>{application}</CardDescription>
									</li>
								))}
							</ul>
						</section>

						<Separator />

						<section>
							<CardTitle className='text-2xl font-semibold mb-4'>Customer Support</CardTitle>
							<CardDescription className='mb-4'>
								Our team of experts is ready to assist you with any questions or concerns you may have about the{' '}
								{product.name}.
							</CardDescription>
							<div className='flex flex-wrap gap-4'>
								<Button variant='outline' className='flex items-center'>
									<Mailbox className='w-5 h-5 mr-2' />
									Email Support
								</Button>
								<Button variant='outline' className='flex items-center'>
									<Phone className='w-5 h-5 mr-2' />
									Phone Support
								</Button>
							</div>
						</section>
					</div>
				</CardContent>
			</Card>

			{/* Related products section */}
			<div className='mt-8'>
				{isRelatedPending ? (
					<RelatedProductsSkeleton />
				) : relatedProducts?.length === 0 ? (
					<Card>
						<CardHeader>
							<CardTitle>No Related Products</CardTitle>
							<CardDescription>There are currently no related products for this item.</CardDescription>
						</CardHeader>
						<CardFooter>
							<Link to='/products'>
								<Button
									variant='outline'
									className='border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-colors'
								>
									Browse All Products
								</Button>
							</Link>
						</CardFooter>
					</Card>
				) : (
					<>
						<h2 className='text-2xl md:text-3xl font-bold mb-6'>Related Products</h2>
						<Carousel className='w-full relative' opts={{ align: 'start' }}>
							<CarouselContent>
								{relatedProducts?.map((relatedProduct) => (
									<CarouselItem key={relatedProduct.id} className='w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4'>
										<Link to='/products/$productId' params={{ productId: relatedProduct.id.toString() }}>
											<Card className='max-w-sm mx-auto bg-muted p-4 rounded-lg shadow-md overflow-hidden space-y-4 h-full hover:border-amber-500 hover:shadow-2xl transition-shadow'>
												<CardHeader className='p-4 relative overflow-hidden rounded-lg flex justify-center'>
													<img
														src={relatedProduct.mainImage}
														alt={relatedProduct.name}
														className='w-full h-48 object-contain rounded-t-lg bg-transparent'
													/>
													<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent' />
												</CardHeader>
												<CardContent className='p-4'>
													<CardTitle className='text-lg mb-2'>{relatedProduct.name}</CardTitle>
													<CardDescription className='text-sm'>{relatedProduct.summarization}</CardDescription>
												</CardContent>
												<CardFooter className='p-4'>
													<Button
														variant='outline'
														className='w-full hover:bg-amber-100 hover:text-amber-500 hover:border-amber-500 transition-colors'
													>
														Learn More
													</Button>
												</CardFooter>
											</Card>
										</Link>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className='hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2' />
							<CarouselNext className='hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2' />
						</Carousel>
					</>
				)}
			</div>
		</div>
	)
}

export default ProductDetail

```

# src/routes/products/-api/queries.api.ts

```ts
import {
	getCategories,
	getFilteredProducts,
	getPowers,
	getProductById,
	getProducts,
	getRelatedProducts,
	getWaveLengths
} from '@/routes/products/-api/product.api'
import { ProductListQueryParams } from '@/routes/products/-types/product'
import { queryOptions, useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const productsQueryOptions = queryOptions({
	queryKey: ['products'],
	queryFn: () => getProducts()
})

export const productQueryOption = (productId: number) =>
	queryOptions({
		queryKey: ['products', { productId }],
		queryFn: () => getProductById(productId)
	})

export function useProducts() {
	return useQuery({
		queryKey: ['products'],
		queryFn: () => getProducts()
	})
}

export function useProductId(productId: number) {
	return useQuery({
		queryKey: ['products', { productId }],
		queryFn: () => getProductById(productId)
	})
}

export function useCategoriesQuery() {
	return useQuery({
		queryKey: ['categories'],
		queryFn: getCategories
	})
}

export function usePowersQuery() {
	return useQuery({
		queryKey: ['powers'],
		queryFn: getPowers
	})
}

export function useWaveLengthsQuery() {
	return useQuery({
		queryKey: ['wavelengths'],
		queryFn: getWaveLengths
	})
}

export function useFilteredProductsQuery(params: ProductListQueryParams) {
	return useInfiniteQuery({
		initialPageParam: 1,
		queryKey: ['filteredProducts', params],
		queryFn: ({ pageParam }) => getFilteredProducts({ ...params, page: pageParam }),
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.products.length < lastPage.pageSize) return undefined
			return pages.length + 1
		}
	})
}

export function useRelatedProductsQuery(id: number | null | undefined, category: string | null | undefined) {
	return useQuery({
		queryKey: ['relatedProducts', { id, category }],
		queryFn: () => getRelatedProducts(id as number, category as string),
		enabled: id !== null && id !== undefined && category !== null && category !== undefined
	})
}

```

# src/routes/products/-api/product.api.ts

```ts
import { products } from '@/db'
import type { FilteredProductsResponse, Product, ProductListQueryParams } from '@/routes/products/-types/product'
// import axios from 'axios'

// const BASE_URI_PREFIX = 'http://localhost:10000'
// const axiosInstance = axios.create({ baseURL: BASE_URI_PREFIX })

export class PostNotFoundError extends Error {}

export const getProductIds = async (): Promise<number[]> => {
	// const response = await axiosInstance.get<Product[]>('products')
	// return response.data.map((product) => product.id) || []
	return products.map((product) => product.id)
}

export const getProducts = async (): Promise<Product[]> => {
	// const response = await axiosInstance.get<Product[]>('products')
	// return response.data || []
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return products
}

export const getProductById = async (id: number): Promise<Product | null> => {
	// const response = await axiosInstance.get<Product>(`products/${id}`)
	// return response.data || null
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const product = products.find((product) => product.id === id)
	return product || null
}

export const getCategories = async (): Promise<string[]> => {
	await new Promise((resolve) => setTimeout(resolve, 500))
	return [...new Set(products.map((p) => p.category))]
}

export const getPowers = async (): Promise<string[]> => {
	await new Promise((resolve) => setTimeout(resolve, 500))
	return [...new Set(products.map((p) => p.power))]
}

export const getWaveLengths = async (): Promise<string[]> => {
	await new Promise((resolve) => setTimeout(resolve, 500))
	return [...new Set(products.map((p) => p.wavelength))]
}

export const getFilteredProducts = async (params: ProductListQueryParams): Promise<FilteredProductsResponse> => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const { category, power, wavelength, search, page = 1, pageSize = 6 } = params

	const filteredProducts = products.filter((product) => {
		const matchesCategory = category?.length ? category.includes(product.category) : true
		const matchesPower = power?.length ? power.includes(product.power) : true
		const matchesWavelength = wavelength?.length ? wavelength.includes(product.wavelength) : true
		const matchesSearch = search
			? product.name.toLowerCase().includes(search.toLowerCase()) ||
				product.summarization.toLowerCase().includes(search.toLowerCase())
			: true

		return matchesCategory && matchesPower && matchesWavelength && matchesSearch
	})

	const paginatedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize)

	return { products: paginatedProducts, totalCount: filteredProducts.length, pageSize }
}

export const getRelatedProducts = async (id: number, category: string): Promise<Product[] | []> => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const relatedProducts = products.filter((p) => p.category === category && p.id !== id).slice(0, 6)
	return relatedProducts || []
}

```

# src/routes/products/-hook/useDebounce.tsx

```tsx
import { useState, useEffect } from 'react'

function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}

export default useDebounce

```

# src/routes/products/-components/index.tsx

```tsx

```

# src/routes/index/-pages/Home.tsx

```tsx
import Layout from '@/layouts/Layout'

import Feature from '@/routes/index/-components/Feature'
import HeroSection from '@/routes/index/-components/HeroSection'
import ProductCategory from '@/routes/index/-components/ProductCategory'
import Testimonial from '@/routes/index/-components/Testimonial'

const HomePage = () => {
	return (
		<Layout>
			<HeroSection />
			<Feature />
			<ProductCategory />
			<Testimonial />
		</Layout>
	)
}

export default HomePage

```

# src/routes/index/-components/Testimonial.tsx

```tsx
import testimonail1 from '@/assets/01.png'
import testimonail2 from '@/assets/02.png'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const testimonial = [
	{
		id: 1,
		quote:
			"LaserTech Pro's marking systems have significantly improved our product traceability and reduced errors. Their support team is unparalleled.",
		name: 'Jane Doe',
		title: 'CEO, TechInnovate Inc.',
		image: testimonail1
	},
	{
		id: 2,
		quote:
			"The precision and speed of LaserTech Pro's cutting systems have revolutionized our manufacturing process. We've seen a 30% increase in efficiency.",
		name: 'John Smith',
		title: 'Operations Manager, MetalWorks Co.',
		image: testimonail2
	}
]

const Testimonial: React.FC = () => {
	return (
		<section className='py-24 bg-white'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-16 text-[#F89D44]'>What Our Clients Say</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					{testimonial.map((testimonial) => (
						<Card key={testimonial.id} className='bg-white shadow-lg border-l-4 border-[#F89D44]'>
							<CardContent className='pt-8'>
								<p className='text-gray-600 italic mb-4'>{testimonial.quote}</p>
								<div className='flex items-center'>
									<img src={testimonial.image} alt='Client' className='w-12 h-12 rounded-full mr-4' />
									<div>
										<p className='font-bold text-[#F89D44]'>{testimonial.name}</p>
										<p className='text-sm text-gray-500'>{testimonial.title}</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonial

```

# src/routes/index/-components/ProductCategory.tsx

```tsx
import cleaning from '@/assets/cleaning.jpg'
import cutting from '@/assets/cutting.jpg'
import mark2 from '@/assets/mark2.jpg'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import React from 'react'

const products = [
	{
		id: 1,
		title: 'Laser Marking',
		image: mark2,
		description: 'High-precision marking solutions for product identification and traceability.'
	},
	{
		id: 2,
		title: 'Laser Cutting',
		image: cutting,
		description: 'Powerful cutting systems for metal, plastic, and composite materials.'
	},
	{
		id: 3,
		title: 'Laser Cleaning',
		image: cleaning,
		description: 'Efficient and eco-friendly cleaning solutions for surface preparation.'
	}
]

const ProductCategory: React.FC = () => {
	return (
		<section className='py-24 bg-[#F89D44]'>
			<div className='container mx-auto px-4 max-w-5xl'>
				<h2 className='text-4xl font-bold text-center mb-16 text-white'>Laser Machine Category</h2>
				<div className='flex justify-center'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{products.map((product) => (
							<Card
								key={product.id}
								className='overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white w-80'
							>
								<img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
								<CardHeader>
									<CardTitle className='text-xl font-bold text-[#F89D44]'>{product.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className='text-gray-600'>{product.description}</CardDescription>
								</CardContent>
								<CardFooter>
									<Link to='/products' search={{ category: product.title.split('Laser')[1].trim().toLowerCase() }}>
										<Button
											variant='outline'
											className='data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent transition-color duration-300 w-full text-zinc-950 border-solid border-2 border-[#F89D44] hover:text-[#F89D44]'
										>
											Learn More
										</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductCategory

```

# src/routes/index/-components/HeroSection.tsx

```tsx
import bg_laser from '@/assets/bg-laser.jpg'
import { LightbulbIcon, ShieldCheckIcon } from 'lucide-react'
import React from 'react'
import { GiSewingMachine } from 'react-icons/gi'

const HeroSection: React.FC = () => {
	return (
		<section className='relative text-white min-h-[calc(100vh-64px)] flex flex-col justify-between'>
			<div className='absolute inset-0 opacity-80'>
				<img src={bg_laser} alt='Laser technology in action' className='w-full h-full object-cover' />
			</div>
			<div className='container mx-auto px-4 relative flex-grow flex flex-col justify-center py-12'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-3xl md:text-5xl font-bold mb-10 leading-tight '>
						LASER MARKING & CUTTING & CLEANING SOLUTIONS
					</h1>
					<p className='text-xl mb-10'>
						Helionyx is a prominent and trusted leader in the laser technology industry, specializing in the
						development, manufacturing, and distribution of advanced laser marking systems. With a commitment to exce
						lence and innovation, Helionyx has established itself as a reliable partner for businesses seeking
						cutting-edge laser solutions.
					</p>
					<div className='flex justify-center space-x-[100px]'>
						<div className='text-center'>
							<LightbulbIcon className='w-16 h-16 mx-auto mb-2 ' />
							<p>INNOVATIVE PROCESS</p>
						</div>
						<div className='text-center'>
							<GiSewingMachine className='w-16 h-16 mx-auto mb-2' />
							<p>INLINE SOLUTIONS</p>
						</div>
						<div className='text-center'>
							<ShieldCheckIcon className='w-16 h-16 mx-auto mb-2' />
							<p>GUARANTEED SAFETY</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection

```

# src/routes/index/-components/Feature.tsx

```tsx
import group from '@/assets/group.png'
import unmatchPrecision from '@/assets/icon-benefits-commitment.png'
import innovation from '@/assets/icon-benefits-innovation.png'
import sustainability from '@/assets/icon-benefits-sustainability.png'
import quality from '@/assets/quality.png'
import React from 'react'

const Feature: React.FC = () => {
	return (
		<section className='py-24 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-16 text-[#F89D44]'>Why Choose Helionyx ?</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={unmatchPrecision} alt='Reliability' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>Reliability</h3>
						<p className='text-white text-center'>
							Ensuring consistent performance and dependability in all our offerings.
						</p>
					</div>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={group} alt='Customer Focus' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>Customer Focus</h3>
						<p className='text-white text-center'>Prioritizing the needs and success of our clients.</p>
					</div>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={sustainability} alt='Sustainability' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>Sustainability</h3>
						<p className='text-white text-center'>
							Continuously pushing the boundaries of laser technology to offer state-of-the-art solutions.
						</p>
					</div>
					<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
						<img src={innovation} alt='Innovation' className='h-20 w-auto mb-4' />
						<h3 className='text-2xl font-medium text-white mb-2'>Innovation</h3>
						<p className='text-white text-center'>
							Committing to environmentally responsible practices in our operations.
						</p>
					</div>
					<div className='col-span-full flex justify-center mt-6'>
						<div className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col items-center max-w-sm'>
							<img src={quality} alt='Quality' className='h-20 w-auto mb-4' />
							<h3 className='text-2xl font-medium text-white mb-2'>Quality</h3>
							<p className='text-white text-center'>
								Maintaining the highest standards in every aspect of our products and services.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Feature

```

# src/routes/contact/-pages/Contact.tsx

```tsx
import Layout from '@/layouts/Layout'

const Contact = () => {
	return (
		<Layout>
			<div className='container'>
				<div className='mt-10 text-center'>
					<h1 className='text-3xl font-semibold mb-3'>CONTACT US</h1>
					<p className='text-center'>
						Please enter your information and we will get back to you within one business day.
					</p>
				</div>
				<div className='mt-10 mb-10 flex flex-row justify-center'>
					<div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5'>
						<form className='space-y-6' action='#'>
							<h5 className='text-xl font-semibold text-gray-900'>CONTACT US</h5>
							<div>
								<input
									type='text'
									name='name'
									id='name'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
									placeholder='Name'
									required
								/>
							</div>
							<div>
								<input
									type='text'
									name='email'
									id='email'
									placeholder='Email'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
									required
								/>
							</div>
							<div>
								<textarea
									name='message'
									id='message'
									placeholder='Message'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
									required
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full text-white bg-[#f89e44d3] hover:bg-[#fd9b38]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
							>
								SEND
							</button>
						</form>
					</div>
					<div className='pl-8 mt-5'>
						<div>Telephone Call: +6693 574 8998</div>
						<div>Email: Sales@helionyx.com</div>
						<div>Line: @Helionyx</div>
						<div>QRCODE</div>
					</div>
				</div>
			</div>
			,
		</Layout>
	)
}

export default Contact

```

# src/routes/contact/-components/index.tsx

```tsx

```

# src/routes/about/-pages/About.tsx

```tsx
import company from '@/assets/company.jpg'
import group_2 from '@/assets/group_2.png'
import innovation_2 from '@/assets/innovation_2.png'
import quality_2 from '@/assets/quality_2.png'
import reliability_2 from '@/assets/reliability_2.png'
import sustainability_2 from '@/assets/sustainability_2.png'
import technology from '@/assets/technology-aboutus.jpg'
import Layout from '@/layouts/Layout'

const About = () => {
	return (
		<Layout>
			<div className='flex flex-col min-h-[100dvh]'>
				<main className='flex-1'>
					<section className='w-full py-12 md:py-24 lg:py-32'>
						<div className='container px-4 md:px-6'>
							<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
								<div className='flex flex-col justify-center space-y-4'>
									<div className='space-y-2'>
										<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8'>ABOUT US</h1>
										<h4 className='text-2xl tracking-tighter font-semibold sm:text-5xl'>Introduction</h4>
										<p className='max-w-[600px] text-muted-foreground md:text-xl'>
											Helionyx is a prominent and trusted leader in the laser technology industry, specializing in the
											development, manufacturing, and distribution of advanced laser marking systems. With a commitment
											to exce lence and innovation, Helionyx has established itself as a reliable partner for businesses
											seeking cutting-edge laser solutions.
										</p>
									</div>
								</div>
								<img
									src={company}
									className='h-[550px] w-[550px] mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
								/>
							</div>
						</div>
					</section>
					<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
						<div className='container px-4 md:px-6'>
							<div className='flex flex-col items-center justify-center space-y-4 text-center'>
								<div className='space-y-2 mb-10'>
									<h4 className='text-2xl font-semibold tracking-tighter sm:text-5xl'>Mession</h4>
									<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										Our mission is to revolutionize the laser marking industry by providing high-quality, reliable, and
										e ficient laser systems that cater to a wide range of industrial applications. We strive to enhance
										productivity and precision for our clients through continuous innovation and superior customer
										service.
									</p>
								</div>
								<div className='space-y-2'>
									<h4 className='text-2xl font-semibold tracking-tighter sm:text-5xl'>Vision for the Future</h4>
									<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										To be the global leader in laser technology, setting the benchmark for quality, innovation, and
										customer satisfaction.
									</p>
								</div>
							</div>
							<div className='mx-auto  max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
								<img
									src={technology}
									className='h-auto w-auto mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last content-center'
								/>
							</div>
						</div>
					</section>
					<section className='w-full bg-[#F89D44] py-12 md:py-24 lg:py-32 bg-muted '>
						<div className='container px-4 md:px-6 '>
							<div className='grid gap-12 lg:grid-cols-3 justify-center'>
								<div className='grid gap-4 justify-items-center'>
									<img src={quality_2} alt='' className='w-12 h-12' />
									<h3 className='text-2xl font-bold'>Quality</h3>
									<p className='text-muted-foreground'>
										Maintaining the highest standards in every aspect of our products and services.
									</p>
								</div>
								<div className='grid gap-4 justify-items-center'>
									<img src={reliability_2} alt='' className='w-12 h-12' />
									<h3 className='text-2xl font-bold'>Reliability</h3>
									<p className='text-muted-foreground'>
										Ensuring consistent performance and dependability in all our offerings.
									</p>
								</div>
								<div className='grid gap-4 justify-items-center'>
									<img src={group_2} alt='' className='w-12 h-12' />
									<h3 className='text-2xl font-bold'>Customer Focus</h3>
									<p className='text-muted-foreground'>Prioritizing the needs and success of our clients.</p>
								</div>
								<div className='grid gap-4 justify-items-center'>
									<img src={sustainability_2} alt='' className='w-12 h-12' />
									<h3 className='text-2xl font-bold'>Sustainability</h3>
									<p className='text-muted-foreground'>
										Continuously pushing the boundaries of laser technology to offer state-of-the-art solutions.
									</p>
								</div>
								<div className='grid gap-4 justify-items-center'>
									<img src={innovation_2} alt='' className='w-12 h-12' />
									<h3 className='text-2xl font-bold'>Innovation</h3>
									<p className='text-muted-foreground'>
										Committing to environmentally responsible practices in our operations.
									</p>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</Layout>
	)
}

export default About

```

# src/routes/about/-components/index.tsx

```tsx

```

# src/routes/products/-components/product-list/SkeletonFilter.tsx

```tsx
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonFilter: React.FC = () => {
	return (
		<div className='space-y-6'>
			<div className='flex justify-between items-center'>
				<Skeleton className='h-8 w-1/3 bg-gray-300 rounded' />
				<Skeleton className='h-8 w-1/4 bg-gray-300 rounded' />
			</div>
			{Array(3)
				.fill(0)
				.map((index) => (
					<div key={index} className='space-y-4'>
						<Skeleton className='h-6 w-1/2 bg-gray-300 rounded' />
						<div className='space-y-2'>
							{Array(4)
								.fill(0)
								.map((itemIndex) => (
									<div key={itemIndex} className='flex items-center space-x-2'>
										<Skeleton className='h-4 w-4 bg-gray-300 rounded' />
										<Skeleton className='h-4 w-2/3 bg-gray-300 rounded' />
									</div>
								))}
						</div>
						<Separator />
					</div>
				))}
		</div>
	)
}

export default SkeletonFilter

```

# src/routes/products/-components/product-list/SkeletonCard.tsx

```tsx
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonCard: React.FC = () => {
	return (
		<Card className='bg-muted p-6 rounded-lg overflow-hidden'>
			<Skeleton className='relative w-full h-48 mb-4 bg-gray-300 rounded-lg'>
				<Skeleton className='absolute inset-0 skeleton-shine' />
			</Skeleton>
			<Skeleton className='h-6 w-3/4 mb-2 bg-gray-300 rounded' />
			<div className='space-y-1'>
				{Array(6)
					.fill(0)
					.map((_, idx) => (
						<Skeleton key={idx} className='h-2 w-full bg-gray-300 rounded' />
					))}
			</div>
			<div className='flex justify-end mt-4'>
				<Skeleton className='h-9 w-24 bg-gray-300 rounded' />
			</div>
		</Card>
	)
}

export default SkeletonCard

```

# src/routes/products/-components/product-list/SearchPopover.tsx

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Skeleton } from '@/components/ui/skeleton'
import { useFilteredProductsQuery } from '@/routes/products/-api/queries.api'
import useDebounce from '@/routes/products/-hook/useDebounce'
import { useStore } from '@/stores/store'
import { Link, useNavigate } from '@tanstack/react-router'
import { Loader2, Search } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'

const SearchResultSkeleton: React.FC = () => (
	<div className='flex items-center space-x-2 p-2'>
		<Skeleton className='w-10 h-10 rounded' />
		<div className='space-y-2'>
			<Skeleton className='h-4 w-[150px]' />
			<Skeleton className='h-3 w-[200px]' />
		</div>
	</div>
)

const SearchPopover: React.FC = () => {
	const { searchTerm, setSearchTerm } = useStore(
		useShallow((state) => ({
			searchTerm: state.searchTerm,
			setSearchTerm: state.setSearchTerm
		}))
	)

	const [isOpen, setIsOpen] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(-1)
	const debouncedSearchTerm = useDebounce(searchTerm, 300)
	const navigate = useNavigate()

	const { data, isLoading, isFetching } = useFilteredProductsQuery({ search: debouncedSearchTerm })

	const searchResults = data?.pages[0]?.products || []
	const isPending = isLoading || isFetching

	const inputRef = useRef<HTMLInputElement>(null)
	const resultsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (debouncedSearchTerm.length > 0) {
			setIsOpen(true)
		}
		setSelectedIndex(-1)
	}, [debouncedSearchTerm])

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault()
			setSelectedIndex((prevIndex) => (prevIndex < searchResults.length ? prevIndex + 1 : prevIndex))
		} else if (e.key === 'ArrowUp') {
			e.preventDefault()
			setSelectedIndex((prevIndex) => (prevIndex > -1 ? prevIndex - 1 : -1))
		} else if (e.key === 'Enter') {
			e.preventDefault()
			if (selectedIndex === searchResults.length) {
				handleViewAllResults()
			} else if (selectedIndex > -1) {
				const selectedProduct = searchResults[selectedIndex]
				if (selectedProduct) {
					navigate({ to: '/products/$productId', params: { productId: selectedProduct.id.toString() } })
					setIsOpen(false)
				}
			}
		}
	}

	useEffect(() => {
		if (resultsRef.current && selectedIndex > -1) {
			const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement
			if (selectedElement) {
				selectedElement.scrollIntoView({ block: 'nearest' })
			}
		}
	}, [selectedIndex])

	const handleViewAllResults = () => {
		setSearchTerm(searchTerm)
		navigate({
			to: '/products',
			search: (prev) => ({ ...prev, search: searchTerm })
		})
		setIsOpen(false)
	}

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button variant='outline' className='w-full md:w-auto relative'>
					<Search className='mr-2 h-4 w-4' />
					Search products
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-80 z-50' align='start' sideOffset={5}>
				<div className='space-y-4'>
					<div className='relative'>
						<Input
							ref={inputRef}
							type='text'
							placeholder='Search products...'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
						{isPending && <Loader2 className='absolute right-2 top-1/2 -mt-2 h-4 w-4 animate-spin' />}
					</div>
					<div ref={resultsRef} className='max-h-60 overflow-auto'>
						{isPending ? (
							Array(3)
								.fill(0)
								.map((_, index) => <SearchResultSkeleton key={index} />)
						) : searchResults.length > 0 ? (
							<>
								{searchResults.map((product, index) => (
									<Link
										key={product.id}
										to='/products/$productId'
										params={{ productId: product.id.toString() }}
										className={`block p-2 hover:bg-muted ${index === selectedIndex ? 'bg-muted' : ''}`}
										onClick={() => setIsOpen(false)}
									>
										<div className='flex items-center space-x-2'>
											<img src={product.mainImage} alt={product.name} className='w-10 h-10 object-cover rounded' />
											<div>
												<p className='font-medium'>{product.name}</p>
												<p className='text-sm text-muted-foreground'>{product.summarization.slice(0, 50)}...</p>
											</div>
										</div>
									</Link>
								))}
								<Button
									variant='ghost'
									className={`w-full justify-start p-2 ${selectedIndex === searchResults.length ? 'bg-muted' : ''}`}
									onClick={handleViewAllResults}
								>
									View all results
								</Button>
							</>
						) : (
							<p className='text-center text-muted-foreground py-2'>No results found</p>
						)}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default SearchPopover

```

# src/routes/products/-components/product-list/FilterContent.tsx

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { useCategoriesQuery, usePowersQuery, useWaveLengthsQuery } from '@/routes/products/-api/queries.api'
import { ProductFilters } from '@/routes/products/-types/product'
import { useStore } from '@/stores/store'
import { useNavigate } from '@tanstack/react-router'
import React, { useCallback, useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'

const FilterContent: React.FC = React.memo(() => {
	const navigate = useNavigate()
	const { selectedFilters, setSelectedFilters, setSearchTerm, updateFilter } = useStore(
		useShallow((state) => ({
			selectedFilters: state.selectedFilters,
			setSelectedFilters: state.setSelectedFilters,
			setSearchTerm: state.setSearchTerm,
			updateFilter: state.updateFilter
		}))
	)

	const { data: categories, isPending: isCategoriesPending } = useCategoriesQuery()
	const { data: powers, isPending: isPowersPending } = usePowersQuery()
	const { data: wavelengths, isPending: isWavelengthsPending } = useWaveLengthsQuery()

	const handleFilterChange = useCallback(
		(type: keyof ProductFilters, value: string) => {
			updateFilter(type, value)
		},
		[updateFilter]
	)

	const resetFilters = useCallback(() => {
		setSelectedFilters({ category: [], power: [], wavelength: [] })
		setSearchTerm('')
	}, [setSearchTerm, setSelectedFilters])

	const handleResetFilters = useCallback(() => {
		resetFilters()
		navigate({
			search: (prev) => ({
				search: prev.search
			}),
			replace: true
		})
	}, [resetFilters, navigate])

	const renderFilterOptions = useCallback(
		(data: string[] | undefined, isPending: boolean, type: keyof ProductFilters) => {
			if (isPending) {
				return (
					<div className='space-y-2'>
						{Array(4)
							.fill(null)
							.map((_, index) => (
								<div key={`skeleton-${type}-${index}`} className='flex items-center space-x-2'>
									<Skeleton className='h-4 w-4 bg-gray-300 rounded' />
									<Skeleton className='h-4 w-2/3 bg-gray-300 rounded' />
								</div>
							))}
					</div>
				)
			}

			return ['All', ...(data || [])].map((value) => (
				<Label key={`${type}-${value}`} className='flex items-center gap-2'>
					<Checkbox
						checked={value === 'All' ? selectedFilters[type].length === 0 : selectedFilters[type].includes(value)}
						onCheckedChange={() => handleFilterChange(type, value)}
					/>
					{value}
				</Label>
			))
		},
		[handleFilterChange, selectedFilters]
	)

	return useMemo(
		() => (
			<>
				<div className='flex justify-between items-center mb-4'>
					<h2 className='text-2xl font-bold'>Filters</h2>
					<Button onClick={handleResetFilters} variant='outline' size='sm'>
						Reset Filters
					</Button>
				</div>
				<Accordion type='multiple' defaultValue={['category', 'power', 'wavelength']}>
					<AccordionItem value='category'>
						<AccordionTrigger className='text-lg font-medium capitalize'>Category</AccordionTrigger>
						<AccordionContent>
							<div className='grid gap-2'>{renderFilterOptions(categories, isCategoriesPending, 'category')}</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='power'>
						<AccordionTrigger className='text-lg font-medium capitalize'>Power</AccordionTrigger>
						<AccordionContent>
							<div className='grid gap-2'>{renderFilterOptions(powers, isPowersPending, 'power')}</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='wavelength'>
						<AccordionTrigger className='text-lg font-medium capitalize'>Wavelength</AccordionTrigger>
						<AccordionContent>
							<div className='grid gap-2'>{renderFilterOptions(wavelengths, isWavelengthsPending, 'wavelength')}</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</>
		),
		[
			handleResetFilters,
			isCategoriesPending,
			categories,
			isPowersPending,
			powers,
			isWavelengthsPending,
			wavelengths,
			renderFilterOptions
		]
	)
})

FilterContent.displayName = 'FilterContent'

export default FilterContent

```

# src/routes/products/_products-layout/$productId/route.tsx

```tsx
// import { productQueryOption } from '@/routes/products/-api/queries.api'
import ProductDetail from '@/routes/products/-pages/ProductDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/_products-layout/$productId')({
	validateSearch: () => ({}),
	// loader: ({ context: { queryClient }, params: { productId } }) =>
	// 	queryClient.ensureQueryData(productQueryOption(Number(productId))),
	component: ProductDetail
})

```

# src/routes/products/-components/product-detail/RelatedProductsSkeleton.tsx

```tsx
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const RelatedProductsSkeleton: React.FC = () => {
	return (
		<div className='mt-8'>
			<Skeleton className='h-10 w-64 mb-6 bg-gray-300' /> {/* Title skeleton */}
			<Carousel className='w-full relative' opts={{ align: 'start' }}>
				<CarouselContent>
					{[...Array(4)].map((_, index) => (
						<CarouselItem key={index} className='w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4'>
							<Card className='max-w-sm mx-auto bg-muted p-4 rounded-lg shadow-md overflow-hidden space-y-4 h-full'>
								<CardHeader className='p-4 relative overflow-hidden rounded-lg flex justify-center'>
									<Skeleton className='relative w-full h-48 bg-gray-300 rounded-t-lg'>
										<Skeleton className='absolute inset-0 skeleton-shine' />
									</Skeleton>
								</CardHeader>
								<CardContent className='p-4'>
									<Skeleton className='h-6 w-3/4 mb-2 bg-gray-300' />
									<Skeleton className='h-4 w-full bg-gray-300' />
									<Skeleton className='h-4 w-5/6 mt-2 bg-gray-300' />
								</CardContent>
								<CardFooter className='p-4'>
									<Skeleton className='h-10 w-full bg-gray-300' />
								</CardFooter>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2' />
				<CarouselNext className='hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2' />
			</Carousel>
		</div>
	)
}

export default RelatedProductsSkeleton

```

# src/routes/products/-components/product-detail/ProductDetailSkeleton.tsx

```tsx
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import RelatedProductsSkeleton from '@/routes/products/-components/product-detail/RelatedProductsSkeleton'
import React from 'react'

const ProductDetailSkeleton: React.FC = () => {
	return (
		<div className='container mx-auto px-4 py-8'>
			<Card className='mb-8 bg-muted'>
				<CardContent className='p-6'>
					<div className='flex flex-col lg:flex-row gap-8'>
						{/* Product images section */}
						<div className='lg:w-1/2'>
							<Skeleton className='relative w-full h-[300px] rounded-lg mb-4 bg-gray-300'>
								<Skeleton className='absolute inset-0 skeleton-shine' />
							</Skeleton>
							<div className='flex gap-2 mt-4'>
								{Array(4)
									.fill(0)
									.map((_, index) => (
										<Skeleton key={index} className='relative w-16 h-16 rounded-md bg-gray-300'>
											<Skeleton key={index} className='absolute inset-0 skeleton-shine' />
										</Skeleton>
									))}
							</div>
						</div>

						{/* Product details section */}
						<div className='lg:w-1/2'>
							<Skeleton className='h-8 w-3/4 mb-4 bg-gray-200' />
							<Skeleton className='h-4 w-1/4 mb-4 bg-gray-200' />
							<Skeleton className='h-4 w-full mb-6 bg-gray-200' />
							<Skeleton className='h-6 w-1/2 mb-3 bg-gray-200' />
							{Array(3)
								.fill(0)
								.map((_, index) => (
									<div key={index} className='flex items-start mb-2'>
										<Skeleton className='w-6 h-6 rounded-full mr-2 bg-gray-200' />
										<Skeleton className='h-4 w-full bg-gray-200' />
									</div>
								))}
							<Skeleton className='h-12 w-full mt-6 bg-gray-200' />
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className='mb-8 bg-muted'>
				<CardContent className='p-6'>
					<div className='space-y-8'>
						{[
							'Product Overview',
							'Product Description',
							'Product Specifications',
							'Product Applications',
							'Customer Support'
						].map((section, index) => (
							<React.Fragment key={section}>
								<section>
									<Skeleton className='h-8 w-1/2 mb-4 bg-gray-200' />
									{section === 'Product Specifications' ? (
										<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
											{Array(6)
												.fill(0)
												.map((_, index) => (
													<div key={index} className='bg-gray-100 p-4 rounded-lg'>
														<Skeleton className='h-4 w-3/4 mb-2 bg-gray-200' />
														<Skeleton className='h-6 w-full bg-gray-200' />
													</div>
												))}
										</div>
									) : section === 'Customer Support' ? (
										<>
											<Skeleton className='h-4 w-full mb-4 bg-gray-200' />
											<div className='flex flex-wrap gap-4 bg-gray-200'>
												<Skeleton className='h-10 w-32 bg-gray-200' />
												<Skeleton className='h-10 w-32 bg-gray-200' />
											</div>
										</>
									) : (
										<>
											<Skeleton className='h-4 w-full mb-2 bg-gray-200' />
											<Skeleton className='h-4 w-full mb-2 bg-gray-200' />
											<Skeleton className='h-4 w-3/4 bg-gray-200' />
										</>
									)}
								</section>
								{index < 4 && <Separator />}
							</React.Fragment>
						))}
					</div>
				</CardContent>
			</Card>

			<RelatedProductsSkeleton />
		</div>
	)
}

export default ProductDetailSkeleton

```

