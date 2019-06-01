import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import MdMenu from 'react-ionicons/lib/MdMenu'
import GlobalStyle from 'components/styles/GlobalStyle'

import Header from 'components/organisms/Header'
import MobileHeader from 'components/organisms/MobileHeader'
import Footer from 'components/organisms/Footer'
import MobileFooter from 'components/organisms/MobileFooter'
import Sidebar from 'components/organisms/Sidebar'
import Modal from 'components/templates/Modal'
import Loading from 'components/templates/Loading'
import ContentLoading from 'components/templates/ContentLoading'
import Context from 'context'
import constants from 'constants'
import colors from 'constants/colors'
import { media } from 'components/styles'

const Container = styled.div`
  display: flex;
`

const Body = styled.div`
  overflow: scroll;
  height: calc(100vh - 180px);
  ${media.mobile `height: calc(calc(var(--vh, 1vh) * 100) - 160px);` };
`

const Menu = styled.div`
  padding: 16px;
  cursor: pointer;
  border-bottom: 1px solid ${colors.border};
`

const Content = ({ children, state, mutations, channels, dm }) => {
  const { hideModal, postMessage } = mutations
  const { page, loading, modal } = state
  return (
    <>
      <Sidebar state={state} channels={channels} dm={dm} />
      <main>
        <Header page={page} />
        {loading.content ? (
          <ContentLoading show={loading.content} />
        ) : (
          <Body className="content-body">{children}</Body>
        )}
        <Footer page={page} postMessage={postMessage} />
      </main>
      <Modal {...modal} hideModal={hideModal} />
      <Loading show={loading.page} />
    </>
  )
}

const MobileContent = ({ children, state, mutations, channels, dm }) => {
  const { hideModal, postMessage, toggleSidebar } = mutations
  const { page, loading, modal, mobile } = state
  return (
    <>
      <Sidebar
        isMobile
        state={state}
        channels={channels}
        dm={dm}
        toggleSidebar={toggleSidebar}
      />
      {!mobile.showSidebar ? (
        <main>
          <MobileHeader page={page} toggleSidebar={toggleSidebar} />
          {!mobile.showSidebar && loading.content ? (
            <ContentLoading show={loading.content} />
          ) : (
            <Body className="content-body">{children}</Body>
          )}
          <MobileFooter page={page} postMessage={postMessage} />
        </main>
      ) : (
        <main>
          <Menu onClick={toggleSidebar}>
            <MdMenu />
          </Menu>
        </main>
      )}
      <Modal {...modal} hideModal={hideModal} />
      <Loading mobile show={loading.page} />
    </>
  )
}

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
          const { state, mutations, getters } = context
          if (constants.development) {
            console.log('rerender', state)
            console.log('mobile', getters.mobile())
          }
          const isMobile = getters.mobile()
          const channels = Object.values(state.channels)
          const dm = Object.values(state.dm)
          return (
            <>
              <GlobalStyle />
              <Container>
                {isMobile ? (
                  <MobileContent
                    children={children}
                    state={state}
                    mutations={mutations}
                    getters={getters}
                    channels={channels}
                    dm={dm}
                  />
                ) : (
                  <Content
                    children={children}
                    state={state}
                    mutations={mutations}
                    getters={getters}
                    channels={channels}
                    dm={dm}
                  />
                )}
              </Container>
            </>
          )
        }}
      </Context.Consumer>
    )}
  />
)

export default Layout
