import React from "react"
import styled from "styled-components"
import LogoGithub from "react-ionicons/lib/LogoGithub"
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin"
import LogoTwitter from "react-ionicons/lib/LogoTwitter"
import { Link } from "gatsby"

const Container = styled.div`
  height: 22px;
  width: 22px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlogIcon = props => <Container>B</Container>

export default BlogIcon
