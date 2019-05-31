import React from 'react'
import styled from 'styled-components'
import SNSLinks from 'components/molecules/SNSLinks'
import ChannelList from 'components/molecules/ChannelList'
import Header from 'components/molecules/SidebarHeader'
import colors from 'constants/colors'
import constants from 'constants'
import { media } from 'components/styles'

const Container = styled.div`
  min-width: ${constants.sidebarWidth};
  width: ${constants.sidebarWidth};
  display: flex;
  ${media.mobile`
    ${({ mobile }) =>
      mobile.showSidebar
        ? `
        display: flex;
        min-width: 80%;
        width: 80%;
        transition: min-width cubic-bezier(0.25, 0.46, 0.45, 0.94) .3s, width cubic-bezier(0.25, 0.46, 0.45, 0.94) .3s;
      `
        : `
        display: none;
        min-width: 0;
        width: 0;
        transition: min-width cubic-bezier(0.25, 0.46, 0.45, 0.94) .3s, width cubic-bezier(0.25, 0.46, 0.45, 0.94) .3s;
      `}
  `}
`

const Left = styled.div`
  background-color: ${colors.sidebarLeft};
  height: 100vh;
  width: ${constants.sidebarLeftWidth};
  ${media.mobile`
    ${({ mobile }) =>
      mobile.showSidebar
        ? `
        width: ${constants.sidebarLeftWidth};
      `
        : `
        width: 0;
      `}
  `}
`
const Right = styled.div`
  background-color: ${colors.sidebarRight};
  height: 100vh;
  width: 100%;
`
const Body = styled.div``
const Public = styled.div`
  margin-bottom: 50px;
`
const Private = styled.div``
const Title = styled.div`
  padding: 16px;
  padding-bottom: 0;
  color: ${colors.weakText};
`

const Sidebar = ({ isMobile, state, channels, dm, toggleSidebar }) => {
  const onClick = () => isMobile && toggleSidebar()
  return (
    <Container mobile={state.mobile}>
      <Left mobile={state.mobile}>
        <SNSLinks />
      </Left>
      <Right>
        <Header />
        <Body>
          <Public>
            <Title>Channels</Title>
            <ChannelList page={state.page} list={channels} onClick={onClick} />
          </Public>
          <Private>
            <Title>Direct Messages</Title>
            <ChannelList page={state.page} list={dm} onClick={onClick} />
          </Private>
        </Body>
      </Right>
    </Container>
  )
}

export default Sidebar
