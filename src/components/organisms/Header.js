import React from "react"
import styled from "styled-components"
import constants from 'constants'

const Container = styled.header`
  height: ${constants.headerHeight};
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid lightgray;
`

const Title = styled.h1`
  font-size : 20px;
`
const Header = ({ pageTitle }) => (
  <Container>
    <div>
      <Title>{pageTitle}</Title>
    </div>
  </Container>
)

export default Header
