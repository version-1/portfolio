import React from 'react'
import styled from 'styled-components'

import constants from 'constants'
import colors from 'constants/colors'
import Spinner from 'components/atoms/Spinner'
import { media } from 'components/styles'

const Container = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  z-index: 1000;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  opacity: ${({ show }) => (show ? 1 : 0)};
  width: 100%;
`

const Sidebar = styled.div`
  display: flex;
  height: 100%;
  min-width: ${constants.sidebarWidth};
  ${media.mobile `display: none;`}
`
const SidebarLeft = styled.div`
  background-color: ${colors.sidebarLeft};
  height: 100%;
  width: ${constants.sidebarLeftWidth};
`
const SidebarRight = styled.div`
  background-color: ${colors.sidebarRight};
  width: 100%;
  height: 100%;
`
const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading = ({ mobile, show }) => {
  return (
    <Container show={show}>
      {!mobile && (
        <Sidebar>
          <SidebarLeft />
          <SidebarRight />
        </Sidebar>
      )}
      <Main>
        <Spinner />
      </Main>
    </Container>
  )
}

export default Loading
