import React from 'react'
import styled from 'styled-components'
import smamaThumbnail from 'assets/smama.thumbnail.png'
import constants from 'constants'

const Container = styled.div``
const Header = styled.div``
const Body = styled.div`
  max-width: 640px;
  text-align: center;
  & p,
  & h3 {
    text-align: center;
  }
`
const Title = styled.h2`
  text-align: center;
`

const Thumbnail = styled.img``

const Smama = props => {
  return (
    <Container>
      <Header>
        <Title>Web Service: SMAMA</Title>
      </Header>
      <Body>
        <a href="https://smama.jp/">
          <Thumbnail src={smamaThumbnail} alt="sumama thumbanail" />
        </a>
        <h3>Technolody</h3>
        <p>Reac, Ruby on Rails, MySQL, JQuery</p>
        <h3>Description</h3>
        <p>
          CtoC Web Sevice. User can sale their mobile device(appliences too) on this site and Buyer buy it reasonable.
        </p>
      </Body>
    </Container>
  )
}

export default Smama
