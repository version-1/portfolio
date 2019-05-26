import React from 'react'
import styled from 'styled-components'
import SNSLinks from 'components/molecules/SNSLinks'
import ChannelList from 'components/molecules/ChannelList'
import Header from 'components/molecules/SidebarHeader'
import colors from 'constants/colors'
import constants from 'constants'

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

const Sidebar = ({ state, channels, dm }) => (
  <Container>
    <Left>
      <SNSLinks />
    </Left>
    <Right>
      <Header />
      <Body>
        <Public>
          <Title>Channels</Title>
          <ChannelList page={state.page} list={channels} />
        </Public>
        <Private>
          <Title>Direct Messages</Title>
          <ChannelList page={state.page} list={dm} />
        </Private>
      </Body>
    </Right>
  </Container>
)

export default Sidebar
