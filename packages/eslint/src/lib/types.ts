import {presets} from 'eslint-kit'
import {configure} from 'eslint-kit'
import {EslintKitPresetsOptions} from './presets'

export type Options = Parameters<typeof configure>[0]

export type ValidPresets = keyof typeof presets

export interface CreateEslintConfigOptions extends EslintKitPresetsOptions {
    root: string
    ignore?: string[]
    allowDebug?: boolean
}
