import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import GlobalStyle from 'components/styles/GlobalStyle'

import Header from 'components/organisms/Header'
import Sidebar from 'components/organisms/Sidebar'

const Container = styled.div`
  display: flex;
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
      <>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <main>
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
          </main>
          <footer />
        </Container>
      </>
    )}
  />
)

export default Layout
