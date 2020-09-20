import React from 'react'
import styled, { keyframes } from 'styled-components'
import colors from 'constants/colors'

const rotate = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

interface DIVProps {
  size?: number
}
const DIV = styled.div<DIVProps>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${({ size }) => (size ? `${size}px` : '51px')};
  height: ${({ size }) => (size ? `${size}px` : '51px')};
  margin: ${({ size }) => (size ? `${size / 10}px` : '5px')};
  border: ${({ size }) => (size ? `${size / 10}px` : '5px')} solid #fff;
  border-radius: 50%;
  animation: ${rotate} 0.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${colors.spinnerColor} transparent transparent transparent;
`

const Container = styled.div<DIVProps>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => (size ? `${size * 1.1}px` : '64px')};
  height: ${({ size }) => (size ? `${size * 1.1}px` : '64px')};
  & ${DIV}:nth-child(1) {
    animation-delay: -0.225s;
  }
  & ${DIV}:nth-child(2) {
    animation-delay: -0.15s;
  }
  & ${DIV}:nth-child(3) {
    animation-delay: -0.0725s;
  }
`
const Spinner = ({ size }: DIVProps) => (
  <Container size={size}>
    <DIV size={size} />
    <DIV size={size} />
    <DIV size={size} />
    <DIV size={size} />
  </Container>
)

export default Spinner
