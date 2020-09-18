import React, { ReactNode } from 'react'
// @ts-ignore
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
// @ts-ignore
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
import Context from 'context/index'
import usePage from 'hooks/usePage'
import constants from 'constants/index'
import colors from 'constants/colors'
import { media } from 'components/styles'

const Container = styled.div`
  display: flex;
`

const Body = styled.div`
  overflow: scroll;
  height: calc(100vh - 180px);
  ${media.mobile`height: calc(calc(var(--vh, 1vh) * 100) - 160px);`};
`

const Menu = styled.div`
  padding: 16px;
  cursor: pointer;
  border-bottom: 1px solid ${colors.border};
`

interface ContentProps {
  pathname: string
  children: ReactNode
  state: any
  mutations: any
  channels: any
  dm: any
}

const Content: React.FC<ContentProps> = ({
  pathname,
  children,
  state,
  mutations,
  channels,
  dm,
}) => {
  const { postMessage } = mutations
  const { page, loading } = state
  return (
    <>
      <Sidebar pathname={pathname} mobile={false} channels={channels} dm={dm} />
      <main>
        <Header page={page} />
        {loading.content ? (
          <ContentLoading show={loading.content} />
        ) : (
          <Body className="content-body">{children}</Body>
        )}
        <Footer page={page} postMessage={postMessage} />
      </main>
    </>
  )
}

const MobileContent: React.FC<ContentProps> = ({
  pathname,
  children,
  state,
  mutations,
  channels,
  dm,
}) => {
  const { postMessage, toggleSidebar } = mutations
  const { page, loading, mobile } = state
  return (
    <>
      <Sidebar
        mobile
        pathname={pathname}
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
    </>
  )
}

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { mobile, pathname } = usePage()
  return (
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
      render={() => (
        <Context.Consumer>
          {(context: any) => {
            const { state, mutations } = context
            if (constants.development) {
              console.log('rerender', state)
              console.log('mobile', mobile)
            }
            const channels = Object.values(state.channels)
            const dm = Object.values(state.dm)
            const { hideModal } = mutations
            const { loading, modal } = state
            return (
              <>
                <GlobalStyle />
                <Container>
                  {mobile ? (
                    <MobileContent
                      mobile={mobile}
                      children={children}
                      state={state}
                      mutations={mutations}
                      channels={channels}
                      dm={dm}
                    />
                  ) : (
                    <Content
                      mobile={mobile}
                      pathname={pathname}
                      children={children}
                      state={state}
                      mutations={mutations}
                      channels={channels}
                      dm={dm}
                    />
                  )}
                  <Modal {...modal} hideModal={hideModal} />
                  <Loading show={loading.page} />
                </Container>
              </>
            )
          }}
        </Context.Consumer>
      )}
    />
  )
}

export default Layout
