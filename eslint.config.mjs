import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default [
	{
		ignores: [
			// dependencies
			'**/node_modules/',
			'**/.pnp.*',

			// build outputs
			'**/dist/',
			'**/build/',

			// cache directories
			'**/.npm/',
			'**/.eslintcache',
			'**/.tsbuildinfo',

			// config files
			'**/vite.config.ts',
			'**/tailwind.config.js',
			'**/postcss.config.js',
			'**/biome.json',

			// generated files
			'**/src/routeTree.gen.ts',

			// test coverage
			'**/coverage/',

			// misc
			'**/.DS_Store',
			'**/*.log',

			// shadcn components
			'**/src/components/ui/**'
		]
	},
	js.configs.recommended,
	...fixupConfigRules(
		compat.extends(
			'plugin:react/recommended',
			'prettier',
			'plugin:prettier/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:react-hooks/recommended'
		)
	),
	...pluginQuery.configs['flat/recommended'],
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			react: fixupPluginRules(react),
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			'@tanstack/query': pluginQuery
		},
		languageOptions: {
			globals: {
				...globals.browser
			},
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		settings: {
			react: {
				version: 'detect'
			}
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					trailingComma: 'none',
					endOfLine: 'auto',
					semi: false,
					useTabs: true,
					printWidth: 120,
					tabWidth: 2,
					bracketSpacing: true,
					bracketSameLine: false,
					arrowParens: 'always',
					jsxSingleQuote: true
				}
			]
		}
	}
]
