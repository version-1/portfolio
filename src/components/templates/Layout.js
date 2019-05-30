import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import GlobalStyle from 'components/styles/GlobalStyle'

import Header from 'components/organisms/Header'
import MobileHeader from 'components/organisms/MobileHeader'
import Footer from 'components/organisms/Footer'
import Sidebar from 'components/organisms/Sidebar'
import Modal from 'components/templates/Modal'
import Loading from 'components/templates/Loading'
import ContentLoading from 'components/templates/ContentLoading'
import Context from 'context'
import constants from 'constants'

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
            state: { page, modal, channels, dm, loading },
            mutations: { hideModal, postMessage },
            getters: { mobile },
          } = context
          if (constants.development) {
            console.log('rerender', context.state)
            console.log('mobile', mobile())
          }
          const isMobile = mobile()
          return (
            <>
              <GlobalStyle />
              <Container>
                {!isMobile && (
                  <Sidebar
                    mobile={isMobile}
                    state={context.state}
                    channels={Object.values(channels)}
                    dm={Object.values(dm)}
                  />
                )}
                <main>
                  {isMobile ? (
                    <MobileHeader page={page} />
                  ) : (
                    <Header mobile={mobile} page={page} />
                  )}
                  {loading.content ? (
                    <ContentLoading show={loading.content} />
                  ) : (
                    <Body className="content-body">{children}</Body>
                  )}
                  <Footer
                    mobile={isMobile}
                    page={page}
                    postMessage={postMessage}
                  />
                </main>
                <Modal {...modal} hideModal={hideModal} />
                <Loading mobile={isMobile} show={loading.page} />
              </Container>
            </>
          )
        }}
      </Context.Consumer>
    )}
  />
)

export default Layout
