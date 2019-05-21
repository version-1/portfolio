import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "components/templates/Layout"
import Image from "components/atoms/Image"
import SEO from "components/organisms/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
