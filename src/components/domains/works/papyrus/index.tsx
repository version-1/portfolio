import React from 'react'
import styled from '@emotion/styled'
import constants from 'constants/index'
import { media } from 'components/styles'
import papyrusThumbnail from 'assets/papyrus.png'

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

const Papyrus: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Papyrus | Desktop Memo Application</Title>
      </Header>
      <Body>
        <a href={constants.url.papyrus}>
          <Thumbnail src={papyrusThumbnail} alt="papyrus thumbanail" />
        </a>
        <h3>Technolody</h3>
        <label>Desktop</label>
        <p>React, Redux, Electron, Webpack, Apollo, Sass</p>
        <label>API</label>
        <p>Gin, MySQL, AWS EC2, Docker, GraphQL</p>
        <label>Web</label>
        <p>Next.js, React, TypeScript</p>
        <h3>Description</h3>
        <p>
          Designed UI and Wrote web, api and desktoop code.
          Published as Beta.
        </p>
      </Body>
    </Container>
  )
}

export default Papyrus
