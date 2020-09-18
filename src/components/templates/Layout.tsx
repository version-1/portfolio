import React, { useContext, ReactNode } from 'react'
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
import usePage from 'hooks/usePage'
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
  page: any,
  loading: any,
  mobile: any,
  postMessage?: any
  toggleSidebar?: any
  channels: any
  dm: any
}

const Content: React.FC<ContentProps> = ({
  page,
  loading,
  pathname,
  children,
  postMessage,
  channels,
  dm,
}) => {
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
  page,
  loading,
  mobile,
  pathname,
  children,
  postMessage,
  toggleSidebar,
  channels,
  dm,
}) => {
  return (
    <>
      <Sidebar
        mobile
        pathname={pathname}
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
  state: any
  hideModal: () => void
  postMessage: (message: string) => void
  toggleSidebar: () => void
}

const Layout: React.FC<Props> = ({
  state,
  children,
  hideModal,
  postMessage,
  toggleSidebar,
}) => {
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
      render={() => {
        const channels = Object.values(state.channels)
        const dm = Object.values(state.dm)
        const { loading, modal } = state
        return (
          <>
            <GlobalStyle />
            <Container>
              {mobile ? (
                <MobileContent
                  {...state}
                  pathname={pathname}
                  children={children}
                  postMessage={postMessage}
                  toggleSidebar={toggleSidebar}
                  channels={channels}
                  dm={dm}
                />
              ) : (
                <Content
                  {...state}
                  pathname={pathname}
                  children={children}
                  postMessage={postMessage}
                  toggleSidebar={toggleSidebar}
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
    />
  )
}

export default Layout
