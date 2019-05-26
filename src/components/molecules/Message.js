import React from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'
import Avatar from 'components/atoms/Avatar'

const Container = styled.div`
  padding: 16px;
  display: flex;
  :hover {
    background: #efefef40;
    opacity: 0.8;
  }
`

const Left = styled.div`
  padding: 0 8px;
`
const Right = styled.div``
const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkText};
`
const Body = styled.div`
  padding: 3px;
  font-size: 16px;
  color: ${colors.darkText};
`
const Message = ({ icon, left, title, body }) => {
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
