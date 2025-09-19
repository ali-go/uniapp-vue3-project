import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from '@vue/eslint-config-prettier'

export default [
	{
		files: ['**/*.{js,mjs,cjs,vue}'],
		languageOptions: {
			globals: { ...globals.browser, uni: true, wx: true, getApp: true, getCurrentPages: true }
		}
	},
	pluginJs.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		plugins: {
			prettier: prettier
		},
		rules: {
			'prettier/prettier': 'off',
			'no-console': 'off',
			'no-restricted-globals': 'off',
			'no-restricted-syntax': 'off',
			'vue/multi-word-component-names': 'off',
			'no-multiple-empty-lines': ['warn', { max: 1 }],
			'vue/valid-template-root': 'off'
		}
	},
	prettierConfig
]
