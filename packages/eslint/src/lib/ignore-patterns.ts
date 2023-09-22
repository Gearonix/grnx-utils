import { userIgnorePatterns } from './consts'
import { ConfigOptions }      from './types'

export const createIgnorePatterns = ({
  ignore = [],
  monorepo
}: ConfigOptions) => {
  const defaultPatterns = monorepo ? ['**/*'] : userIgnorePatterns

  return [...defaultPatterns, ...ignore]
}
