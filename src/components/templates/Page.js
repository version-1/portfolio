import React from 'react'

import you from 'assets/you.png'
import { Body, P } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import SEO from 'components/organisms/Seo'

const parseContent = content => {
  return <>{content.split('\n').map(line => (line ? <P>{line}</P> : <p />))}</>
}

const Page = ({ children, state, getters }) => {
  const { page } = state
  const { messages } = getters

  return (
    <Layout>
      <SEO title={page.name} />
      <Body>
        <>
          {children}
          {messages().map(message => (
            <Message
              icon={you}
              title={message.sender}
              body={parseContent(message.content)}
            />
          ))}
        </>
      </Body>
    </Layout>
  )
}

export default Page
