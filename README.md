<h1 align="center">
@grnx-utils
</h1>
<p align="center">
    🛠️ General configs, utilities, tools that can be used in other projects 🛠️
<p>
<br/>

## What is it?

This is just a set of utilities and presets for other
projects to avoid copying the source code in each project.

Over time, the project will expand.
<br/>

## Available packages

- [@grnx-utils/eslint](./packages/eslint)  &mdash; eslint config built on top of [eslint-kit](https://github.com/eslint-kit/eslint-kit) presets.
- [@grnx-utils/react-hooks](./packages/react-hooks) &mdash; a collection of react hooks.
- [@grnx-utils/types](./packages/types) &mdash; collection of types and interfaces for your project

## Quick installation

```
yarn add @grnx-utils/<library>
```

## Development and contribution

### Internal scripts

#### Create new library

```shell
nx library --name=<your-library>
```
This command will launch [`@grnx-utils/generator`](./tools/generator)

#### Run tests with Vitest

```shell
nx test
```
