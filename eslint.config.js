// eslint.config.js
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import unusedImports from 'eslint-plugin-unused-imports'
import importPlugin from 'eslint-plugin-import'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default [
  // =========================
  // TypeScript files
  // =========================
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: [join(__dirname, 'tsconfig.json'), join(__dirname, 'tsconfig.node.json')],
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
      import: importPlugin,
      prettier: prettier,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'import/order': [
        'warn',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [['builtin', 'external', 'internal', 'parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      'prettier/prettier': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },
  // =========================
  // Vue SFC files
  // =========================
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vue,
      prettier: prettier,
    },
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/html-indent': ['warn', 2, { attribute: 1, baseIndent: 1 }],
      'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: { max: 1 } }],
      'vue/html-self-closing': [
        'warn',
        {
          html: { void: 'any', normal: 'always', component: 'always' },
          svg: 'any',
          math: 'any',
        },
      ],
      'prettier/prettier': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },
  // =========================
  // Ignore dist and config files
  // =========================
  {
    ignores: ['dist/**', 'config/**', 'vite.config.ts', 'eslint.config.js'],
  },
]
