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
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom', '@tanstack/react-query', '@tanstack/react-router'],
					ui: ['@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-slot'],
				},
			},
		},
		chunkSizeWarningLimit: 1000, // เพิ่มขีดจำกัดเป็น 1000 kB
	},
})