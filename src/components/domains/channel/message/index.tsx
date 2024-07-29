import React from 'react'
import styled from '@emotion/styled'
import colors from 'constants/colors'
import Avatar from 'components/shared/atoms/avatar'
import { media } from 'components/styles'

const Container = styled.div`
  padding: 16px;
  ${media.mobile`padding: 8px;`}
  display: flex;
  :hover {
    background: #efefef40;
    opacity: 0.8;
  }
`

const Left = styled.div`
  padding: 0 8px;
  padding-right: 16px;
`
const Right = styled.div``
const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkText};
`
const Body = styled.div`
  font-size: 16px;
  color: ${colors.darkText};
`

interface Props {
  icon?: string
  left?: JSX.Element
  title?: React.ReactNode | string
  body?: string | React.ReactNode
}

const Message: React.FC<Props> = ({ icon, left, title, body }) => {
  return (
    <Container>
      <Left>{left ? left : <Avatar icon={icon} />}</Left>
      <Right>
        <Header>{title}</Header>
        <Body>{body}</Body>
      </Right>
    </Container>
  )
}

export default Message
