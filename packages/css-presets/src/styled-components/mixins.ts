import { css } from 'styled-components'

export const wh = (w = '100%', h = w) => css`
  width: ${w};
  height: ${h};
`

export const testBorder = css`
  border: 1px solid red;
`

export const hPadding = (size: number) => css`
  padding-left: ${size}px;
  padding-right: ${size}px;
`
export const flex = (jc = 'flex-start', ai = 'stretch', dir = 'row') => css`
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
  flex-direction: ${dir};
`

export const hover = (color: string) => css`
  transition: color 200ms;
  &:hover {
    color: ${color};
  }
`

type Font = 'Poppins' | 'Consolas'

export const font = (font: Font) => css`
  font-family: '${font}', sans-serif;
`

export const antdColor = (color: string) =>
  ({ theme }: any) =>
    `${theme[color]} !important;`

export const customScrollbar = (elem = '&') => css`
  ${elem}::-webkit-scrollbar {
    width: 10px;
  }

  ${elem}::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.lightGrey};
  }

  ${elem}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`

export const color = (color: string) => css`
  ${({ theme }) => theme[color]}
`

type AbsoluteProps = Partial<{
  left: string
  top: string
  right: string
  bottom: string
}>

export const absolute = (props: AbsoluteProps) => css`
  position: absolute;
  ${Object.entries(props)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')}
`

export const margin = (left: number, top: number) => css`
  margin-left: ${left}px;
  margin-top: ${top}px;
`

export const shadow = css`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`
