import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import constants from 'constants'
import colors from 'constants/colors'
import Separator from 'components/atoms/Separator'
import MdMenu from 'react-ionicons/lib/MdMenu'

const Container = styled.header`
  height: ${constants.headerHeight};
  width: 100%;
`
const Content = styled.div`
  padding: 16px;
  display: flex;
`

const Title = styled.h1`
  width: 100%;
  font-size: 16px;
  &::before {
    content: '#';
  }
  &:hover {
    opacity: 0.6;
  }
`

const Left = styled.div`
  margin-right: 16px;
`

// ex) Friday, May 24
const date = moment()
  .format('LLLL')
  .split(' ')
  .slice(0, 3)
  .join(' ')
  .slice(0, -1)

const MobileHeader = ({ page }) => {
  return (
    <Container>
      <Content>
        <Left>
          <MdMenu />
        </Left>
        <Title>{page.name}</Title>
      </Content>
      <Separator text={date} />
    </Container>
  )
}

export default MobileHeader
