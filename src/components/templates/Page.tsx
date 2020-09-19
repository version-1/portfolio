import React, { ReactNode } from 'react'
// @ts-ignore
import you from 'assets/you.png'
import { Body, P } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import SEO from 'components/organisms/Seo'
import constants from 'constants/index'
import { useApp } from 'hooks/useApp'
import Loading from 'components/templates/Loading'
import Modal from 'components/templates/Modal'

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
  const { state, postMessage, hideModal, toggleSidebar } = value
  if (constants.development) {
    console.log('rerender', state)
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
            {value.messages?.map((message: any, index: number) => (
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
