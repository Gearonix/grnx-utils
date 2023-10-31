import { Linter }                 from 'eslint'
import { join }                   from 'node:path'

import { userIgnorePatterns }     from './lib/consts'
import { CreateChildConfigProps } from './lib/types'

export const createChildConfig = ({
  root = './../../'
}: CreateChildConfigProps): Linter.Config => {
  return {
    extends: join(root, '.eslintrc.js'),
    ignorePatterns: ['!**/*', ...userIgnorePatterns]
  }
}
