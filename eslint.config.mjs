import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	{
		ignores: ['**/dist', '**/.eslintrc.cjs'],
	},
	...fixupConfigRules(
		compat.extends(
			'prettier',
			'eslint:recommended',
			'plugin:prettier/recommended',
			'plugin:react-hooks/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:@tanstack/eslint-plugin-query/recommended'
		)
	),
	{
		plugins: {
			react,
			'react-refresh': reactRefresh,
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			'@tanstack/query': pluginQuery,
		},

		languageOptions: {
			globals: {
				...globals.browser,
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
		},

		rules: {
			'@tanstack/query/exhaustive-deps': 'error',
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',

			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					trailingComma: 'es5',
					endOfLine: 'auto',
					semi: true,
					printWidth: 120,
				},
			],

			'no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',

			'react-refresh/only-export-components': [
				'warn',
				{
					allowConstantExport: true,
				},
			],
		},
	},
]
