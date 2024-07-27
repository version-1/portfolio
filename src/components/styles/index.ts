import styled from '@emotion/styled'
import { css } from '@emotion/react'
import colors from 'constants/colors'

export const breakpoints = {
  desktop: 1024,
  tablet: 896,
  mobile: 480,
}

export const media: any = Object.keys(breakpoints).reduce(
  (acc: any, label: string) => {
    acc[label] = (...args: any[]) => css`
      @media (max-width: ${breakpoints[label as keyof typeof breakpoints]}px) {
        ${css(...args)}
      }
    `
    return acc
  },
  {}
)

type Props = {
  fontSize?: number
}

export const Body = styled.div<Props>`
  margin-top: 30px;
`

export const H3 = styled.h3<Props>`
  margin: 5px 0;
  font-size: ${({ fontSize }: any) =>
    fontSize ? [fontSize, 'px'].join('') : '16px'};
  font-weight: ${({ fontWeight }: any) => (fontWeight ? fontWeight : 'bold')};
`


export const P = styled.p<{ indent?: number }>`
  margin: 0px;
  margin-bottom: 2px;
  padding: 0;
  padding-left: ${({ indent }) => (indent ? [indent, 'px'].join('') : 0)};
`

export const LI = styled.p`
  margin: 12px 0px;
  padding: 0;
  ::before {
    content: '■  ';
  }
`

export const Bold = styled.span`
  font-weight: bold;
`

export const More = styled.span`
  color: ${colors.linkText};
  cursor: pointer;
  :hover {
    color: ${colors.linkHoverText};
  }
`

export const Thumbnail = styled.img`
  cursor: pointer;
  width: 320px;
  ${media.mobile`width: 100%;`}
  margin: 16px 0px;
`



export const Table = styled.table``
export const Tr = styled.tr``
export const Th = styled.th`
  padding: 8px 0;
  padding-right: 16px;
  text-align: left;
`
export const Td = styled.td``

