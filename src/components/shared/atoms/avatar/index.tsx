import React from 'react'
import styled from '@emotion/styled'
import avatar from 'assets/avatar.png'
import { media } from 'components/styles'

const Container = styled.div`
`

const Img = styled.img`
  height: 52px;
  width: 52px;
  ${media.mobile `
    height: 32px;
    width: 32px;
  `}
  border-radius: 6px;
`

interface Props {
  icon?: string
}

const Avatar: React.FC<Props> = ({ icon }) => (
  <Container>
    <Img src={icon || avatar} alt="avatar" />
  </Container>
)
export default Avatar
