import { WithChildren } from '@grnx-utils/types'

/**
 * Repeats a component a specified number of times
 */

export const Map = ({ count, children }: WithChildren<{ count: number }>) => {
  const generateArray = (count: number) => {
    return Array.from(new Array(count).keys())
  }

  return <>{generateArray(count).map(() => children)}</>
}
