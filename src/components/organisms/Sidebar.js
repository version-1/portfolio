import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MdMenu from 'react-ionicons/lib/MdMenu'
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

const Input = styled.div`
  padding: 8px;
`
const TextInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9b444;
  color: ${colors.weakText};
  border-radius: 6px;
  height: 26px;
  padding: 3px;
`

const Sidebar = ({ channels, dm }) => (
  <Container>
    <Left>
      <SNSLinks />
    </Left>
    <Right>
      <Header />
      <Body>
        <Input>
          <TextInput>
            <MdMenu color={colors.weakText} />
            Jump to...
          </TextInput>
        </Input>
        <Public>
          <Title>Channels</Title>
          <ChannelList list={channels} />
        </Public>
        <Private>
          <Title>Direct Messages</Title>
          <ChannelList list={dm} />
        </Private>
      </Body>
    </Right>
  </Container>
)

export default Sidebar
