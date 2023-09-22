import { presets }         from 'eslint-kit'

import { prettierOptions } from './prettier'
import { ConfigOptions , KitPreset }   from './types'

export const createEslintKitPresets = ({
  extensions = [],
  enableImports = true,
  tsconfig = 'tsconfig.json'
}: ConfigOptions): KitPreset[] => {
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
