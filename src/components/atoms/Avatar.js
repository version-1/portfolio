import React from "react"
import styled from 'styled-components'

const Container = styled.div`
`
const Content = styled.div`
  height: 52px;
  width: 52px;
  background-color: lightgray;
  border-radius: 6px;
`

const Avatar = () => (
  <Container><Content /></Container>
)
export default Avatar;
