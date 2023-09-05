import { configure, presets } from 'eslint-kit'

import { EslintKitPresetsOptions } from './presets'

export type Options = Parameters<typeof configure>[0]

export type KitPreset = Options['presets'][number]

export type ValidPresets = keyof typeof presets

export interface CreateEslintConfigOptions extends EslintKitPresetsOptions {
  root: string
  ignore?: string[]
  allowDebug?: boolean
}
