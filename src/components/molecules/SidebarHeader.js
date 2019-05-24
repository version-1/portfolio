import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SNSLinks from 'components/molecules/SNSLinks'
import colors from 'constants/colors'
import constants from 'constants'

const Container = styled.div`
  height: ${constants.headerHeight};
  padding: 16px;
  border-bottom: 1px solid ${colors.border};
`

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.pureWhite}
`

const SubTitle = styled.h2`
  color: ${colors.weakText};
  font-size: 14px;
`

const SidebarHeader = () => (
  <Container>
    <Title>jjoo</Title>
    <SubTitle>engineer portfolio site</SubTitle>
  </Container>
)

export default SidebarHeader
