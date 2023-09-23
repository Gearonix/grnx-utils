import { Linter } from 'eslint'

export const eslintRules: Partial<Linter.RulesRecord> = {
  'react/react-in-jsx-scope': 'off',
  'import/no-unresolved': 'off',
  'import/extensions': 'off',
  quotes: [2, 'single', { avoidEscape: true }],
  '@typescript-eslint/member-delimiter-style': [
    'error',
    { multiline: { delimiter: 'none' } }
  ],
  'react-hooks/exhaustive-deps': 'warn',
  'react/no-array-index-key': 'warn',
  'prefer-arrow/prefer-arrow-functions': 'error',
  'max-len': ['error', { code: 90, tabWidth: 4 }],
  'import/no-duplicates': 'off'
}
