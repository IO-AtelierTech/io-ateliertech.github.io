export default {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['*.vue'],
      options: {
        singleAttributePerLine: true,
      },
    },
  ],
}
