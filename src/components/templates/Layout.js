import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import GlobalStyle from 'components/styles/GlobalStyle'

import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import Sidebar from 'components/organisms/Sidebar'
import Modal from 'components/templates/Modal'
import Context from 'context'

const Container = styled.div`
  display: flex;
`

const Body = styled.div`
  overflow: scroll;
  height: calc(100vh - 180px);
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Context.Consumer>
        {context => {
          const {
            state: { page, modal, channels, dm },
            mutations: { hideModal, postMessage },
          } = context
          console.log('rerender', context.state)
          return (
            <>
              <GlobalStyle />
              <Container>
                <Sidebar
                  state={context.state}
                  channels={Object.values(channels)}
                  dm={Object.values(dm)}
                />
                <main>
                  <Header page={page} />
                  <Body>{children}</Body>
                  <Footer page={page} postMessage={postMessage} />
                </main>
                <Modal {...modal} hideModal={hideModal} />
              </Container>
            </>
          )
        }}
      </Context.Consumer>
    )}
  />
)

export default Layout
