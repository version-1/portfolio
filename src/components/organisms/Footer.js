import React from "react"
import styled from "styled-components"
import constants from 'constants'
import colors from 'constants/colors'

const Container = styled.footer`
  height: 66px;
  width: 100%;
  padding: 16px;
`

const Input = styled.div`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
  height: 40px;
`

const Footer = ({ siteTitle }) => (
  <Container>
    <div>
      <Input />
    </div>
  </Container>
)

export default Footer
