import React, { useState } from 'react'
import styled from 'styled-components'
import constants from 'constants'
import colors from 'constants/colors'

const Container = styled.footer`
  width: 100%;
  height: 62px;
  padding: 8px 16px;
`

const Content = styled.div`
  border: ${({ focus }) => (focus ? '2px' : '1px')} solid ${colors.border};
  border-radius: 6px;
  width: 100%;
  height: 100%;
  padding: 6px;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
`

const Input = styled.textarea`
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 6px;
  resize: none;
  border: 0;
  font-size: 16px;
  :focus {
    outline: none;
    bor
  }
`

const Footer = ({ siteTitle }) => {
  const [focus, setFocus] = useState(false)
  return (
    <Container>
      <Content focus={focus}>
        <Input placeholder="Message" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
      </Content>
    </Container>
  )
}

export default Footer
