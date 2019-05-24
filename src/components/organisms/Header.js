import React from "react"
import styled from "styled-components"
import constants from 'constants'

const Container = styled.header`
  height: ${constants.headerHeight};
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid lightgray;
`
const Header = ({ siteTitle }) => (
  <Container>
    <div>
      <h1>{siteTitle}</h1>
    </div>
  </Container>
)

export default Header
