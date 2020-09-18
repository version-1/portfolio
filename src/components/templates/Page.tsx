import React, { ReactNode } from 'react'
// @ts-ignore
import you from 'assets/you.png'
import { Body, P } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import SEO from 'components/organisms/Seo'
import { useApp } from 'hooks/useApp'

const parseContent = (content: string) => {
  return <>{content.split('\n').map(line => (line ? <P>{line}</P> : <p />))}</>
}

interface Props {
  children: ReactNode
  title: string
  messages?: any[]
}

const Page: React.FC<Props> = ({ children, title }) => {
  const { value, Provider } = useApp()
  if (!value.ready) {
    return null
  }
  return (
    <Provider value={value}>
      <Layout>
        <SEO title={title} />
        <Body>
          <>
            {children}
            {value.messages?.map((message: any) => (
              <Message
                icon={you}
                title={message.sender}
                body={parseContent(message.content)}
              />
            ))}
          </>
        </Body>
      </Layout>
    </Provider>
  )
}

export default Page
