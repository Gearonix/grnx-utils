import { presets } from 'eslint-kit'
import { prettierOptions } from './prettier'
import { Options, ValidPresets } from './types'

export interface EslintKitPresetsOptions {
  tsconfig?: string
  extensions?: ValidPresets[]
  enableImports?: boolean
}

export const createEslintKitPresets = ({
  extensions = [],
  enableImports = false,
  tsconfig = 'tsconfig.json',
}: EslintKitPresetsOptions): Options['presets'] => {
  return [
    presets.node(),
    // presets.prettier(prettierOptions),
    // presets.typescript({
    //     tsconfig,
    //     root: './'
    // }),
    presets.react(),
    // enableImports && presets.imports({
    //     sort: {
    //         newline: true
    //     }
    // }),
    // extensions?.map((name) => presets[name]()),
  ] as Options['presets']
}

