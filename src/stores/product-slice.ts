import { ProductFilters } from '@/features/product/types/product'
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
	initializeFilters: (params: { category: CategoryKey | null; search: string }) => void
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
		category: []
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
	initializeFilters: ({ category, search }) =>
		set((state) => {
			state.searchTerm = search
			state.selectedFilters = {
				category: category ? [categoryMap[category]] : []
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
