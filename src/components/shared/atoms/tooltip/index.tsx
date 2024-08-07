import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

const Text = styled.span`
  visibility: hidden;
  width: 80px;
  background-color: #1d1d1d;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  top: 135%;
  left: 50%;
  margin-left: -40px;

  position: absolute;
  z-index: 1;
`

const Container = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  :hover ${Text} {
    visibility: visible;
  }
`

interface Props {
  children: ReactNode
  text: string
}
const Tooltip: React.FC<Props> = ({ text, children }) => (
  <Container>
    {children}
    <Text>{text}</Text>
  </Container>
)

export default Tooltip
