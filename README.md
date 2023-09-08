<h1 align="center">
@grnx-utils
</h1>
<p align="center">
    🛠️ General configs, utilities, tools that can be used in other projects 🛠️
<p>
<br/>

## What is it?

This is just a set of small utilities and presets for other
projects to avoid copying the source code in each project.

Over time, the project will expand.
<br/>

## Available packages

- [@grnx-utils/eslint](./packages/eslint)  &mdash; eslint config built on top of [eslint-kit](https://github.com/eslint-kit/eslint-kit) presets
- [@grnx-utils/apollo](./packages/apollo) &mdash; wrapper over [@apollo/client](https://www.apollographql.com/docs/react/), which makes the syntax cleaner
- [@grnx-utils/local-storage](./packages/local-storage) &mdash; convenient API for working with localStorage
- [@grnx-utils/react-hooks](./packages/react-hooks) &mdash; collection of React hooks
- [@grnx-utils/types](./packages/types) &mdash; collection of types and interfaces for your project
- [@grnx-utils/css-presets](./packages/css-presets) &mdash; set of mixins and variables for different CSS libraries and frameworks
- [@grnx-utils/react](./packages/react) &mdash; set of React components that make React syntactically better


## Quick installation

```
yarn add @grnx-utils/<library>
```

## Development and contribution

### Internal scripts

#### Create library

```shell
nx gen --type=library --name=<your-library>
```

#### Create react library

```shell
nx gen --type=react-library --name=<your-library>
```

This commands will launch [`@grnx-utils/generator`](./tools/generator)

#### Run tests with Vitest

```shell
nx test
```
