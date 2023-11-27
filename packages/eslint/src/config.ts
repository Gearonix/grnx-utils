import { Linter }                 from 'eslint'
import { configure }              from 'eslint-kit'

import { createIgnorePatterns }   from './lib/ignore-patterns'
import { createEslintKitPresets } from './lib/presets'
import { eslintRules }            from './lib/rules'
import { ConfigOptions }          from './lib/types'

export const createEslintConfig = (opts: Partial<ConfigOptions>): Linter.Config => {
  return configure({
    root: opts.root ?? __dirname,
    allowDebug: opts.allowDebug ?? true,
    presets: createEslintKitPresets(opts),
    extend: {
      root: true,
      ignorePatterns: createIgnorePatterns(opts),
      plugins: ['prefer-arrow', 'perfectionist'],
      rules: { ...eslintRules, ...opts.ext }
    }
  })
}
