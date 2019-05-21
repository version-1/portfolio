import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "components/templates/Layout"
import Image from "components/atoms/Image"
import SEO from "components/organisms/Seo"

const Container = styled.div`
  background-color: red;
`

const AboutMePage = () => (
  <Container>
    <Layout>
      <SEO title="About Me" />
    </Layout>
  </Container>
)

export default AboutMePage
