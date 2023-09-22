import { Options } from 'prettier'

export const prettierOptions: Options = {
  singleQuote: true,
  trailingComma: 'none',
  endOfLine: 'auto',
  semi: false,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-layout'].map((plugin) => require.resolve(plugin))
}
