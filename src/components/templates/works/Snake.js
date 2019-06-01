import React from 'react'
import styled from 'styled-components'
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

const Video = styled.video`
  width: 480px;
  ${media.mobile `width: 100%;`}
`
const Spacer = styled.div`
  height: 30px;
`

const Blog = props => {
  return (
    <Container>
      <Header>
        <Title>Blog: Snake Game</Title>
      </Header>
      <Body>
        <Video
          poster="https://statics.ver-1-0.net/uploads/2018/06/20180627_react-snake-game-3/snake.png"
          src="https://statics.ver-1-0.net/uploads/2018/06/20180627_react-snake-game-3/snake.mp4"
          controls
        />
        <p>
          Play Game{'  '}
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
