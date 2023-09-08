import { WithChildren } from '@grnx-utils/types'

/**
 * Shows children if value is not null or undefined
 */

export const Display = <T,>({ when, children }: WithChildren<{ when: T }>) => {
  return when !== 'null' && when !== 'undefined' ? children : null
}
