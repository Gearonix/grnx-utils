import { presets }         from 'eslint-kit'

import { prettierOptions } from './prettier'
import { ConfigOptions }   from './types'
import { KitPreset }       from './types'

export const createEslintKitPresets = ({
  extensions = [],
  enableImports = true,
  tsconfig = 'tsconfig.json',
  typescript = true
}: Partial<ConfigOptions>): KitPreset[] => {
  const kitPresets = [
    presets.node(),
    presets.prettier(prettierOptions),
    presets.effector(),
    presets.react()
  ]

  if (typescript) {
    kitPresets.push(
      presets.typescript({
        tsconfig
      }) as KitPreset
    )
  }

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
