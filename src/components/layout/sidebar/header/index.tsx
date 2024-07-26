import React from 'react'
import styled from '@emotion/styled'
import colors from 'constants/colors'
import constants from 'constants/index'

const Container = styled.div`
  height: ${constants.headerHeight};
  padding: 16px;
`

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.pureWhite};
`

const SubTitle = styled.h2`
  color: ${colors.weakText};
  font-size: 14px;
`

const SPAN = styled.span`
  color: ${colors.weakText};
`

const SidebarHeader = () => (
  <Container>
    <Title>{constants.author}<SPAN>{"'s"}</SPAN></Title>
    <SubTitle>portfolio site</SubTitle>
  </Container>
)

export default SidebarHeader
