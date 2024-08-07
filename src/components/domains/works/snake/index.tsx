import React from 'react'
import styled from '@emotion/styled'
import { media } from 'components/styles'
import snakeVideo from 'assets/snake.mp4'

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

const Video = styled.video`
  width: 480px;
  ${media.mobile `width: 100%;`}
`
const Spacer = styled.div`
  height: 30px;
`

const Blog = () => {
  return (
    <Container>
      <Header>
        <Title>Blog: Snake Game</Title>
      </Header>
      <Body>
        <Video
          src={snakeVideo}
          controls
        />
        <p>
          Play Game
          <a href="https://version-1.github.io/react-snake-game">HERE</a>
        </p>
        <h3>Technolody</h3>
        <p>React</p>
        <h3>Description</h3>
        <p>
          Snake Game implemented with React. You can enjoy the game{' '}
          <a href="https://version-1.github.io/react-snake-game">here</a>
        </p>
        <Spacer/>
      </Body>
    </Container>
  )
}

export default Blog
