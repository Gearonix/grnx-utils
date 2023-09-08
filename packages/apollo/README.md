## [@grnx-utils/apollo](https://github.com/Gearonix/grnx-utils/tree/master/packages/apollo)
[![npm version](https://img.shields.io/npm/v/@grnx-utils/apollo.svg?style=flat)](https://www.npmjs.com/package/@grnx-utils/apollo)  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)<br/>
<h3></h3>

Wrapper over [@apollo/client](https://www.apollographql.com/docs/react/), which makes the syntax cleaner.

For example, instead of this:
```ts
const response = await apollo.mutate({
    mutation: gql,
    variables: {
        _graphql: {
            username,
            id
        }
    }
})

const result = response.data.yourMethod
```

You can do this:
```ts
const result = await apollo.request<Res, Body>(gql, { username, id }, 'mutate')
```

## Installation

```
yarn add @grnx-utils/apollo -D
```

## Usage
```ts
// apollo-config.ts
import { createApolloClient } from '@grnx-utils/apollo'

const apollo = createApolloClient({
    url: 'http://localhost:6868',
    /** Enable library logs
     *  @default false
     */ 
    isDev: process.env.NODE_ENV === 'development',
    /** Additions @apollo/client config
     *  @default {}
     */
    extend: {
        queryDeduplication: false
    }
})
```

## Configure API ([apollo.request](./src/middleware/core.ts))

```ts
const response = await apollo.request<ResponsePayload, RequestBody>(
    /** graphql query
     *  @type {ApolloOperation}
     */
    mutation,
    /** graphql body
     *  @type {Record<string, unknown>}
     */
    { username: 'test' },
    /** graphql method
     *  @type {'query' | 'mutate'}
     *  @default 'query'
     */
    'mutate'
)
```
## Examples

### Case with query

```ts
// fetch-users.ts
import type { ApolloOperation } from '@grnx-utils/apollo'
import { apollo } from './apollo-config.ts'
import { gql } from 'graphql-tag'

interface User {
    name: string
    id: number
}

const query: ApolloOperation = {
    gql: gql`
    query {
      getUsers {
        name
        id
      }
    }
  `, 
  method: 'getUsers'
}

const users = await apollo.request<User[], void>(query, { page: 0 })
```

### Case with mutation
```ts
// delete-user.ts
import { apollo } from './apollo-config.ts'

export interface ApolloBody {
    username: string
}

const mutation: ApolloOperation = {
    gql: gql`
     mutation SignIn($payload: SignIn!) {
      signIn(_graphql: $payload) {
        accessToken
      }
    }
  `,
   method: 'signIn'
}

const payload = await apollo.request<User[], ApolloBody>(mutation, { username: 'test' }, 'mutate')
```
