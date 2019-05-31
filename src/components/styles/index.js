import styled, { css } from 'styled-components'
import colors from 'constants/colors'
const breakpoints = {
  desktop: 1024,
  tablet: 896,
  mobile: 480,
}

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const Body = styled.div`
  margin-top: 30px;
`

export const H3 = styled.h3`
  margin: 5px 0;
  font-size: ${({ fontSize }) =>
    fontSize ? [fontSize, 'px'].join('') : '16px'};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'bold')};
`
export const P = styled.p`
  margin: 0px;
  margin-bottom: 2px;
  padding: 0;
  padding-left: ${({ indent }) => (indent ? [indent, 'px'].join('') : 0)};
`

export const LI = styled.p`
  margin: 0px;
  margin-bottom: 10px;
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
  ${media.mobile`width: 280px;`}
  margin: 16px 0px;
`
