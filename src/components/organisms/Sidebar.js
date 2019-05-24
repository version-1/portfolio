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
const Public = styled.div``
const Private = styled.div``

const Sidebar = () => (
  <Container>
    <Left>
      <SNSLinks />
    </Left>
    <Right>
      <Header />
      <Public>
        <ul>
          {links.map(({ to, text }) => (
            <li key={to}>
              <h2>
                <Link to={to}>{text}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </Public>
      <Private>
        <ul>
          {privateLinks.map(({ to, text }) => (
            <li key={to}>
              <h2>
                <Link to={to}>{text}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </Private>
    </Right>
  </Container>
)

export default Sidebar
