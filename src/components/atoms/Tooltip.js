import React from 'react'
import styled from 'styled-components'

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
const Tooltip = ({ text, children }) => (
  <Container>
    {children}
    <Text>{text}</Text>
  </Container>
)

export default Tooltip
