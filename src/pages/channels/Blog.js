import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "components/templates/Layout"
import Image from "components/atoms/Image"
import SEO from "components/organisms/Seo"


const Container = styled.div`
  background-color: red;
`

const BlogPage = () => (
  <Container>
    <Layout>
      <SEO title="Blog Page" />
    </Layout>
  </Container>
)

export default BlogPage
