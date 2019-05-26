import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import MdClose from 'react-ionicons/lib/MdClose'
import colors from 'constants/colors'

const Container = styled.div`
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
  justify-content: center;
`

const Modal = ({ show, title, header, content, hideModal }) => {
  return (
    <Container show={show}>
      {header ? (
        header
      ) : (
        <Header show={show}>
          <Title>{title}</Title>
          <Close>
            <MdClose fontSize="30px" onClick={hideModal} />
          </Close>
        </Header>
      )}
      <Content>{content}</Content>
    </Container>
  )
}

export default Modal
