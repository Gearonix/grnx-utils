import { AnyObject }              from '@grnx-utils/types'

import { LocalStorageClient }     from './local-storage-client'
import { LocalStorageClientOpts } from './types'

export const createStorage = <Storage extends AnyObject>(
  opts: LocalStorageClientOpts
) => {
  return new LocalStorageClient<Storage>(opts)
}
