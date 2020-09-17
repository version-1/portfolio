import React, { ReactNode } from 'react'
// @ts-ignore
import you from 'assets/you.png'
import { Body, P } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import SEO from 'components/organisms/Seo'

const parseContent = (content: string) => {
  return <>{content.split('\n').map(line => (line ? <P>{line}</P> : <p />))}</>
}

interface Props {
  children: ReactNode
  state: any
  getters: any
}

const Page: React.FC<Props> = ({ children, state, getters }) => {
  const { page } = state
  const { messages } = getters

  return (
    <Layout>
      <SEO title={page.name} />
      <Body>
        <>
          {children}
          {messages().map((message: any) => (
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
