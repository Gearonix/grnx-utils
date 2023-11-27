import { userIgnorePatterns } from './consts'
import { ConfigOptions }      from './types'

export const createIgnorePatterns = ({
  ignore = [],
  monorepo
}: Partial<ConfigOptions>) => {
  const defaultPatterns = monorepo ? ['**/*'] : userIgnorePatterns

  return [...defaultPatterns, ...ignore]
}
