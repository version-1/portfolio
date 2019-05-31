import React from 'react'
import styled from 'styled-components'
import blogThumbnail from 'assets/ver-1-0.net.thumbnail.png'
import constants from 'constants'
import { media } from 'components/styles'

const Container = styled.div``
const Header = styled.div``
const Body = styled.div`
  max-width: 640px;
  text-align: center;
  & p,
  & h3 {
    text-align: center;
  }
  ${media.mobile `padding: 8px;`}
`
const Title = styled.h2`
  text-align: center;
`

const Thumbnail = styled.img`
  width: 100%;
`

const Blog = props => {
  return (
    <Container>
      <Header>
        <Title>Blog: So Far, So Tech</Title>
      </Header>
      <Body>
        <a href={constants.url.blog}>
          <Thumbnail src={blogThumbnail} alt="blog thumbanail" />
        </a>
        <h3>Technolody</h3>
        <p>Gatsbyjs, React, GraphQL, Sass</p>
        <h3>Description</h3>
        <p>
          Designed UI and Developed by myself. Wrote articles Reguraly and It
          has about 150 articles now. I have a plan to post english articles
          from now.
        </p>
      </Body>
    </Container>
  )
}

export default Blog
