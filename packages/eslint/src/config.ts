import {Linter} from 'eslint'
import {configure} from 'eslint-kit'
import {createEslintKitPresets} from './lib/presets'
import {CreateEslintConfigOptions} from './lib/types'
import {eslintRules} from './lib/rules'

export const createEslintConfig = ({allowDebug = true, root, ignore = ["**/*"], ...opts}: CreateEslintConfigOptions): Linter.Config => {
  //@ts-ignore
  return configure()
}


