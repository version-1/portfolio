import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "components/templates/Layout"
import Image from "components/atoms/Image"
import SEO from "components/organisms/Seo"

const Container = styled.div`
  background-color: red;
`

const IndexPage = () => (
  <Container>
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/channels/AboutMe">Go to page 2</Link>
    </Layout>
  </Container>
)

export default IndexPage
