import React from 'react'
import { Link } from 'gatsby'

import Context from 'context'
import { Body, H3, P, LI, Bold } from 'components/styles'
import Layout from 'components/templates/Layout'
import Image from 'components/atoms/Image'
import Message from 'components/molecules/Message'
import SEO from 'components/organisms/Seo'
import colors from 'constants/colors'

const parseContent = content => {
  return (
    <>
      {content.split('\n').map(line => (
        line ? <P>{line}</P> : <p></p>
      ))}
    </>
  )
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
