## [@grnx-utils/react-hooks](https://github.com/Gearonix/grnx-utils/tree/master/packages/types)
[![npm version](https://img.shields.io/npm/v/@grnx-utils/react-hooks.svg?style=flat)](https://www.npmjs.com/package/@grnx-utils/react-hooks)  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)<br/>
<h3></h3>

A collection of react hooks such as `useDebounce`, `useLocalStorage`, `useFilteredEffect`, `useAsyncEffect` and many others.
## Installation

```
yarn add @grnx-utils/react-hooks -D
```

## Available Hooks
- [`useAltKeyDown`](./src/hooks/use-alt-keydown.ts)
- [`useAsyncEffect`](./src/hooks/use-async-effect.ts)
- [`useBooleanState`](./src/hooks/use-boolean-state.ts)
- [`useDebounce`](./src/hooks/use-debounce.ts)
- [`useFilteredEffect`](./src/hooks/use-filtered-effect.ts)
- [`useFullScreen`](./src/hooks/use-full-screen.ts)
- [`useInterval`](./src/hooks/use-interval.ts)
- [`useLocalStorage`](./src/hooks/use-local-storage.ts)
- [`useOverflow`](./src/hooks/use-overflow.ts)
- [`useThrottle`](./src/hooks/use-throttle.ts)

## Development and contribution

### Internal scripts

#### Run vitest

```shell
nx test react-hooks --ui --coverage
```
