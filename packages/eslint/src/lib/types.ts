import { Linter }    from 'eslint'
import { configure } from 'eslint-kit'
import { presets }   from 'eslint-kit'

export type Options = Parameters<typeof configure>[0]

export type KitPreset = Options['presets'][number]

export type ValidPresets = keyof typeof presets

export interface ConfigOptions {
  tsconfig?: string
  extensions?: ValidPresets[]
  enableImports?: boolean
  typescript?: boolean
  root: string
  ignore?: string[]
  allowDebug?: boolean
  monorepo?: boolean
  ext?: Partial<Linter.RulesRecord>
}
