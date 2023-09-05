import { presets } from 'eslint-kit'

import { prettierOptions } from './prettier'
import { KitPreset, ValidPresets } from './types'

export interface EslintKitPresetsOptions {
  tsconfig?: string
  extensions?: ValidPresets[]
  enableImports?: boolean
}

export const createEslintKitPresets = ({
  extensions = [],
  enableImports = false,
  tsconfig = 'tsconfig.json'
}: EslintKitPresetsOptions): KitPreset[] => {
  const kitPresets = [
    presets.node(),
    presets.prettier(prettierOptions),
    presets.typescript({
      tsconfig
    }),
    presets.effector(),
    presets.react()
  ]

  if (enableImports) {
    kitPresets.push(
      presets.imports({
        sort: {
          newline: true
        }
      }) as KitPreset
    )
  }

  return [
    ...kitPresets,
    ...extensions.map((ext) => presets[ext]())
  ] as KitPreset[]
}
