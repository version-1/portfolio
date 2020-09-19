import React from 'react'
import styled from 'styled-components'
import SNSLinks from 'components/molecules/SNSLinks'
import ChannelList from 'components/molecules/ChannelList'
import Header from 'components/molecules/SidebarHeader'
import colors from 'constants/colors'
import constants from 'constants/index'
import { media } from 'components/styles'

const Container = styled.div`
  min-width: ${constants.sidebarWidth};
  width: ${constants.sidebarWidth};
  display: flex;
  ${media.mobile`
    ${({ mobile }: any) =>
      mobile.showSidebar
        ? `
        display: flex;
        visibility: visible;
        min-width: 80%;
        width: 80%;
        transition: min-width linear .05s, width linear .05s;
        `
        : `
        visibility: hidden;
        min-width: 0;
        width: 0;
      `}
  `}
`

const Left = styled.div`
  background-color: ${colors.sidebarLeft};
  height: 100vh;
  width: ${constants.sidebarLeftWidth};
  ${media.mobile`
    ${({ mobile }: any) =>
      mobile.showSidebar
        ? `
        display: block
        width: ${constants.sidebarLeftWidth};
      `
        : `
        display: none
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

interface Props {
  mobile: boolean
  pathname: string
  channels: any
  dm: any
  toggleSidebar?: () => void
}

const Sidebar: React.FC<Props> = ({
  mobile,
  pathname,
  channels,
  dm,
  toggleSidebar,
}) => {
  const onClick = () => mobile && toggleSidebar && toggleSidebar()
  return (
    <Container mobile={mobile}>
      <Left mobile={mobile}>
        <SNSLinks />
      </Left>
      <Right>
        <Header />
        <Body>
          <Public>
            <Title>Channels</Title>
            <ChannelList pathname={pathname} list={channels} onClick={onClick} />
          </Public>
          <Private>
            <Title>Direct Messages</Title>
            <ChannelList pathname={pathname} list={dm} onClick={onClick} />
          </Private>
        </Body>
      </Right>
    </Container>
  )
}

export default Sidebar
