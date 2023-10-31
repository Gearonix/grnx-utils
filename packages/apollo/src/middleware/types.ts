import { AnyObject }    from '@grnx-utils/types'
import { DocumentNode } from 'graphql/language'

export type WithTypeName<P extends AnyObject> = P & { __typename: string }

export interface ToPayload<A extends AnyObject> {
  payload: A
}

export type OperationType = 'query' | 'mutate'

export interface ApolloOperation {
  gql: DocumentNode
  method: string
}
