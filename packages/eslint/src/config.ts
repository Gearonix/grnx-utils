import { Linter } from 'eslint'
import { configure } from 'eslint-kit'

import { createEslintKitPresets } from './lib/presets'
import { eslintRules } from './lib/rules'
import { CreateEslintConfigOptions } from './lib/types'

export const createEslintConfig = ({
  allowDebug = true,
  root,
  ignore = ['**/*'],
  ...opts
}: CreateEslintConfigOptions): Linter.Config => {
  return configure({
    root,
    allowDebug,
    presets: createEslintKitPresets(opts),
    extend: {
      root: true,
      ignorePatterns: ignore,
      plugins: ['prefer-arrow', '@nx'],
      rules: eslintRules
    }
  })
}
