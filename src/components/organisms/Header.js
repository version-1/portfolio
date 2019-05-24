import React from "react"
import styled from "styled-components"

const Container = styled.header`
  height: 65px;
  width: 100%;
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
