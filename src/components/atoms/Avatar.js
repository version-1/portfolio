import React from 'react'
import styled from 'styled-components'
import avatar from 'assets/avatar.png'

const Container = styled.div``

const Img = styled.img`
  height: 52px;
  width: 52px;
  border-radius: 6px;
`

const Avatar = ({ icon }) => (
  <Container>
    <Img src={icon || avatar} alt="avatar" />
  </Container>
)
export default Avatar
