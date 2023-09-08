import {
  ApolloClient,
  ApolloClientOptions,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { ApolloMiddleware } from './middleware/core'

export interface CreateApolloClientOptions {
  url: string
  isDev?: boolean
  extend?: Partial<ApolloClientOptions<NormalizedCacheObject>>
}

export const createApolloClient = ({
  url,
  isDev = false,
  extend = {}
}: CreateApolloClientOptions) => {
  const graphqlUri = `${url}/graphql`

  const httpLink = createHttpLink({
    uri: graphqlUri
  })

  const apolloOptions: ApolloClientOptions<NormalizedCacheObject> = {
    cache: new InMemoryCache(),
    link: httpLink,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first'
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all'
      }
    },
    queryDeduplication: true,
    ...extend
  }

  const apolloClient = new ApolloClient(apolloOptions)

  return new ApolloMiddleware({
    client: apolloClient,
    isDev
  })
}
