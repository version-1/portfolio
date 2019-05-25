import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import constants from 'constants'
import colors from 'constants/colors'
import Spinner from 'components/atoms/Spinner'

const Container = styled.div`
  display: flex;
  z-index: 1000;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  opacity: ${({ show }) => (show ? 1 : 0)};
  width: 100%;
  transition: transform ease-in-out 0.3s;
  transform: ${({ show }) => (show ? 'scale(1)' : 'scale(0)')};
  transform: ${({ show }) => (show ? 'tranlateY(0)' : 'translateY(100%)')};
`

const Header = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  height: 60px;
  align-items: center;
`
const Title = styled.h2`
  margin: 0px;
  text-align: center;
  width: 100%;
`

const Close = styled.div`
  position: fixed;
  right: 16px;
  top: 16px;
  cursor: pointer;
`
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Sidebar = styled.div`
  display: flex;
  height: 100%;
  min-width: ${constants.sidebarWidth};
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

const Loading = ({ show }) => {
  return (
    <Container show={show}>
      <Sidebar>
        <SidebarLeft />
        <SidebarRight />
      </Sidebar>
      <Main>
        <Spinner/>
      </Main>
    </Container>
  )
}

export default Loading
