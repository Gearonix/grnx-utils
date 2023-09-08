## [@grnx-utils/local-storage](https://github.com/Gearonix/grnx-utils/tree/master/packages/local-storage)
[![npm version](https://img.shields.io/npm/v/@grnx-utils/local-storage.svg?style=flat)](https://www.npmjs.com/package/@grnx-utils/local-storage)  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)<br/>
<h3></h3>

Provides a convenient API for working with localStorage.

## Features:
- Automatic parsing if the value is in JSON format
- Automatic JSON.stringify if you want to set non-primitive type to localStorage
- `Next.js` support (check if `typeof window !== 'undefined'`)
- Ability to add a prefix to keys (useful if you have several applications on the same domain. For example, turns `AUTH_TOKEN` into `myapp__AUTH_TOKEN`)
- Ability to disable setting new values if necessary
- LocalStorage key typing (with typescript)

## Installation

```
yarn add @grnx-utils/local-storage -D
```

## Basic Usage

```ts
import { createStorage } from '@grnx-utils/local-storage'

export enum LocalStorage {
    someKey = 'someKey'
}

const storage = createStorage<LocalStorage>({
    layer: 'my-app'
})

```

```ts
storage.set('someKey', {
    someKey: 'value'
})

storage.get('someKey') // { someKey: 'value' }

storage.clear('someKey')

storage.get('someKey') // void

storage.disable() // will stop work
```
## Comparison with regular localStorage
```ts
// @grnx-utils/local-storage

storage.set('someKey', {
    someKey: 'value'
})

// common localStorage

if (typeof window !== 'undefined') {
    localStorage.setItem(
        'my-app__someKey',
        JSON.stringify({
            someKey: 'value'
        })
    )
}
```

## Configure API
```ts
const storage = createStorage<LocalStorage>({
    /** Application layer
     * @type string
     * @default - undefined
     */
    layer: 'my-app',
    /**
     * @type boolean
     * @default - false
     */
    isDisabled: true
})

```
