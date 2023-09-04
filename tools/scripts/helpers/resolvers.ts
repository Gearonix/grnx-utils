import {resolve} from 'node:path'

export const resolveRoot = () => {
  return resolve(__dirname, '..', '..', '..')
}
