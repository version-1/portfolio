import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SNSLinks from 'components/molecules/SNSLinks'
import Header from 'components/molecules/SidebarHeader'
import colors from 'constants/colors'
import constants from 'constants'

const links = [
  { text: 'Top', to: '/' },
  { text: 'About Me', to: '/channels/AboutMe' },
  { text: 'Works', to: '/channels/Works' },
  { text: 'Blog', to: '/channels/Blog' },
]

const privateLinks = [
  { text: 'You', to: '/channels/You' },
  { text: 'To jjoo', to: '/channels/ToMe' },
]

const Container = styled.div`
  min-width: ${constants.sidebarWidth};
  width: ${constants.sidebarWidth};
  display: flex;
`

const Left = styled.div`
  background-color: ${colors.sidebarLeft};
  height: 100vh;
  width: ${constants.sidebarLeftWidth};
`
const Right = styled.div`
  background-color: ${colors.sidebarRight};
  height: 100vh;
  width: 100%;
`
const Body = styled.div`
  padding: 16px;
`
const Public = styled.div`
  margin-bottom: 50px;
`
const Private = styled.div``
const Title = styled.div`
  color: ${colors.weakText}
`

const Channel = styled.h2`
  color: ${colors.weakText};
  font-size: 16px;
  font-weight: normal;
  &::before {
    content: '#  ';
  }
`
const Sidebar = () => (
  <Container>
    <Left>
      <SNSLinks />
    </Left>
    <Right>
      <Header />
      <Body>
        <Public>
          <Title>Channels</Title>
          <div>
            <ul>
              {links.map(({ to, text }) => (
                <li key={to}>
                  <Link to={to}>
                    <Channel>{text}</Channel>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Public>
        <Private>
          <Title>Direct Messages</Title>
          <div>
            <ul>
              {privateLinks.map(({ to, text }) => (
                <li key={to}>
                  <Link to={to}>
                    <Channel>{text}</Channel>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Private>
      </Body>
    </Right>
  </Container>
)

export default Sidebar
