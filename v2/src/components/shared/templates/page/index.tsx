import React, { ReactNode } from 'react'
import { Body, P } from 'components/styles'
import Layout from 'components/layout'
import Message from 'components/domains/channel/message'
import SEO from 'components/layout/seo'
import constants from 'constants/index'
import { useApp } from 'hooks/useApp'
import Loading from 'components/shared/templates/loading'
import Modal from 'components/shared/templates/modal'

import you from 'assets/you.png'

const parseContent = (content: string) => {
  return <>{content.split('\n').map(line => (line ? <P>{line}</P> : <p />))}</>
}

interface Props {
  children?: ReactNode
  title?: string
  messages?: any[]
}

const Page: React.FC<Props> = ({ children, title }) => {
  const { value, Provider } = useApp()
  if (!value.ready) {
    return <Loading show />
  }
  const { state, messages, postMessage, hideModal, toggleSidebar } = value
  if (constants.development) {
    console.log('rerender', state)
    console.log('page', state.page)
    console.log('messages', messages)
  }
  return (
    <Provider value={value}>
      <Layout
        state={value.state}
        postMessage={postMessage}
        hideModal={hideModal}
        toggleSidebar={toggleSidebar}
      >
        <SEO title={title} />
        <Body>
          <>
            {children}
            {messages?.map((message: any, index: number) => (
              <Message
                key={index}
                icon={you}
                title={message.sender}
                body={parseContent(message.content)}
              />
            ))}
          </>
        </Body>
      </Layout>
       <Modal/>
    </Provider>
  )
}

export default Page
