import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import GlobalStyle from 'components/styles/GlobalStyle'

import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import Sidebar from 'components/organisms/Sidebar'
import Context from 'context'

const Container = styled.div`
  display: flex;
`

const Body = styled.div`
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
            state: { page, channels, dm },
            updatePage,
          } = context
          return (
            <>
              <GlobalStyle />
              <Container>
                <Sidebar channels={channels} dm={dm} updatePage={updatePage} />
                <main>
                  <Header page={page} />
                  <Body>{children}</Body>
                  <Footer />
                </main>
              </Container>
            </>
          )
        }}
      </Context.Consumer>
    )}
  />
)

export default Layout
