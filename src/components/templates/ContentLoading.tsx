import React from 'react'
import styled from 'styled-components'

import Spinner from 'components/atoms/Spinner'

interface ContainerProps {
  show: boolean
}

const Container = styled.div<ContainerProps>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  z-index: 1000;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  height: calc(100vh - 180px);
  opacity: ${({ show }) => (show ? 1 : 0)};
  width: 100%;
`

const Loading: React.FC<ContainerProps> = ({ show }) => {
  return (
    <Container show={show}>
      <Spinner />
    </Container>
  )
}

export default Loading
