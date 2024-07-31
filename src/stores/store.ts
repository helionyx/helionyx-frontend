import { ProductSlice, createProductSlice } from '@/stores/product-slice'
import { mountStoreDevtool } from 'simple-zustand-devtools'
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

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store', useStore)
}
