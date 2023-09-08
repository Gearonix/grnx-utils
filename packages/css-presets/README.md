## [@grnx-utils/css-presets](https://github.com/Gearonix/grnx-utils/tree/master/packages/css-presets)
[![npm version](https://img.shields.io/npm/v/@grnx-utils/css-presets.svg?style=flat)](https://www.npmjs.com/package/@grnx-utils/css-presets)  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)<br/>
<h3></h3>

Provides a set of mixins and variables for different CSS libraries and frameworks

## Installation

```
yarn add @grnx-utils/css-presets -D
```

## Usage

### Styled components

```ts
import styled from 'styled-components'

import { absolute, antdColor, color, flex, hover, margin, wh } from '@grnx-utils/css-presets'

export const TerminalButtons = styled.div`
  ${absolute({
    right: '44px',
    top: '23px'
  })}
  ${flex('flex-end')};
  gap: 23px;
  ${wh('100px', '22px')};
  cursor: pointer;
  svg {
    path {
      stroke: ${color('secondaryGrey')};
      ${({ theme }) => hover(theme.light)};
    }
    ${wh('22px')}
    color: ${color('secondaryGrey')};
    ${({ theme }) => hover(theme.light)}
  }
`
```

### SCSS

```scss
@use '@grnx-utils/css-presets/scss/index.scss' as s;
@use './variables.scss' as v;

.content-buttons {
  @include s.size(100%, 40px);
  @include s.flex(flex-start, center);
  @include s.customScroll;
  

  padding-bottom: 10px;
  // Your custom variables
  border-bottom: v.$br v.$bg-150;
  position: relative;

  .content {
      svg {
        @include s.size(15px, 15px);
      }
      @include absolute(50%, 50%);
  }
  
  .title {
    @include itemBorder;
  }
}
```
