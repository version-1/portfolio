import React from 'react'
import styled from 'styled-components'
import kuroutoThumbnail from 'assets/kurouto.thumbnail.png'
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

const Blog = props => {
  return (
    <Container>
      <Header>
        <Title>App: KUROUTO. ACT</Title>
      </Header>
      <Body>
        <a href="https://itunes.apple.com/us/app/kurouto-act/id1460146002?mt=8">
          <Thumbnail src={kuroutoThumbnail} alt="kurouto thumbanail" />
        </a>
        <h3>Technolody</h3>
        <p>React, React Native, Ruby on Rails, Firebase Realtime Databse</p>
        <h3>Description</h3>
        <p>
          This is for Real Estate Agent. They can automate to output documents on their contract.
          I wrote the Most of Code (especially base) and select libraries.
        </p>
      </Body>
    </Container>
  )
}

export default Blog
