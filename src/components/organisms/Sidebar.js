import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SNSLinks from 'components/molecules/SNSLinks'
import ChannelList from 'components/molecules/ChannelList'
import Header from 'components/molecules/SidebarHeader'
import colors from 'constants/colors'
import constants from 'constants'

const channels = [
  { text: 'Top', to: '/' },
  { text: 'About Me', to: '/channels/AboutMe' },
  { text: 'Works', to: '/channels/Works' },
  { text: 'Blog', to: '/channels/Blog' },
]

const directMessages = [
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
  color: ${colors.weakText};
`

const Sidebar = ({ updatePage }) => (
  <Container>
    <Left>
      <SNSLinks />
    </Left>
    <Right>
      <Header />
      <Body>
        <Public>
          <Title>Channels</Title>
          <ChannelList list={channels} updatePage={updatePage} />
        </Public>
        <Private>
          <Title>Direct Messages</Title>
          <ChannelList list={directMessages} updatePage={updatePage} />
        </Private>
      </Body>
    </Right>
  </Container>
)

export default Sidebar
