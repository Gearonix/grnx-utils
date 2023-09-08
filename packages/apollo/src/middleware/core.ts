import {
  ApolloClient,
  FetchResult,
  NormalizedCacheObject
} from '@apollo/client'
import { AnyObject, Nullable } from '@grnx-utils/types'

import {
  ApolloOperation,
  OperationType,
  ToPayload,
  WithTypeName
} from './types'

export interface ApolloMiddlewareOptions {
  client: ApolloClient<NormalizedCacheObject>
  isDev: boolean
}

export class ApolloMiddleware {
  client: ApolloClient<NormalizedCacheObject>
  isDev: boolean

  constructor(opts: ApolloMiddlewareOptions) {
    this.client = opts.client
    this.isDev = opts.isDev
  }

  public async request<Payload extends AnyObject, Args extends AnyObject>(
    operation: ApolloOperation,
    args?: Args,
    type: OperationType = 'query'
  ): Promise<[Nullable<WithTypeName<Payload>>, Nullable<string>]> {
    const options = {
      headers: {
        'apollo-require-preflight': true
      },
      variables: args
        ? {
            payload: args
          }
        : undefined
    }
    let response: FetchResult<Payload>

    try {
      if (type === 'mutate') {
        response = await this.client.mutate<Payload, ToPayload<Args>>({
          mutation: operation.gql,
          ...options
        })
      } else {
        response = await this.client.query<Payload, ToPayload<Args>>({
          query: operation.gql,
          ...options
        })
      }

      //eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      return [response.data?.[operation.method] as WithTypeName<Payload>, null]
    } catch (error: unknown) {
      if (this.isDev) {
        console.log(error)
      }

      return [null, error as string]
    }
  }
}
