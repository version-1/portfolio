import React, { useState } from 'react'
import styled from 'styled-components'
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

const CHAT_INPUT_FORM = 'chat-input-form'

const Footer = ({ page, postMessage }) => {
  const [focus, setFocus] = useState(false)
  const [content, setContent] = useState('')
  const placeholder = [
    'Message',
    `#${page.name}.`,
    'Send message by pushing Enter..',
  ].join(' ')
  return (
    <Container>
      <Content focus={focus}>
        <Input
          className={CHAT_INPUT_FORM}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={e => {
            if (e.keyCode === 13) {
              return
            }
            setContent(e.target.value)
          }}
          onKeyUp={e => {
            const _content = content.replace(/\n$/, '')
            const __content = content.replace(/\n/g, '')
            if (!__content || !_content || e.keyCode !== 13) {
              return
            }
            if (e.shiftKey && e.keyCode === 13) {
              setContent(`${e.target.value}\n`)
              return
            }
            e.preventDefault()
            postMessage({ sender: 'you', content: _content })
            setContent('')
            const ele = document.querySelector(`.${CHAT_INPUT_FORM}`)
            ele.value = ''
          }}
        />
      </Content>
    </Container>
  )
}

export default Footer
