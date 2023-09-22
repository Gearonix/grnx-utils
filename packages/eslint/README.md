## [@grnx-utils/eslint](https://github.com/Gearonix/grnx-utils/tree/master/packages/eslint)
[![npm version](https://img.shields.io/npm/v/@grnx-utils/eslint.svg?style=flat)](https://www.npmjs.com/package/@grnx-utils/eslint)  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request) <br/>
<h3></h3>

Custom `eslint` configuration built on top of [eslint-kit](https://github.com/eslint-kit/eslint-kit) presets. <br/>
Adds eslint plugins like `@nx` , `prefer-arrow` and more.
The config will be expanded in the future.

[Eslint-kit](https://github.com/eslint-kit/eslint-kit) is a library that provides ready-made
eslint presets and it belongs to Evgeny Zakharov.

## Installation

```
yarn add @grnx-utils/eslint eslint@^8.46.0 prettier@^3.0.0 -D
```

## Usage
After installing, add the `.eslintrc.js` file in your project root:
```js
const grnx = require('@grnx-utils/eslint')


module.exports = grnx({
  root: __dirname,   // project root (required)
  monorepo: true,
  tsconfig: 'tsconfig.base.json'   // when using a monorepo like Nx
})

```

## Configure API

```js
grnx({
  /** project root
   * @type {string}
   * @example __dirname
   */
  root: __dirname,
  /** enables monorepo mode
   * @default false
   */
  monorepo: true,
  /** eslint ignore patterns
   * @default ['**//*'] (in monorepo mode)
   */
  ignore: ['**/*'],
  /** tsconfig path
   * @example tsconfig.base.json
   * @default tsconfig.json
   */
  tsconfig: 'tsconfig.json',
  /** extensions provided by eslint-kit
   * in the default configuration there
   * are only 5 presets
   * @default []
   */
  extensions: ['vue', 'solidJs'],
  /**
   * enables eslint-kit allowDebug
   * @default false
   */
  allowDebug: true,
  /** enables presets.imports() - unstable preset,
   * errors are possible.
   * @default true
   */
  enableImports: false
})
```
<br/>

### List of packages used by @grnx-utils/eslint
Will be expanded in the future.

- [eslint-kit](https://github.com/eslint-kit/eslint-kit)
- [prettier-plugin-layout](https://github.com/LIMPIX31/plugin-layout)
- [@nx/eslint-plugin](https://nx.dev/packages/eslint-plugin)
- [eslint-plugin-prefer-arrow](https://github.com/TristonJ/eslint-plugin-prefer-arrow)

---

> **Warning**
> The package does not support the new `eslint.config.js` <br/>
> file provided by the latest versions of eslint. Possible configuration errors
