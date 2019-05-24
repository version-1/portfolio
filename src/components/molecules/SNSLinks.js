import React from "react"
import styled from "styled-components"
import LogoGithub from "react-ionicons/lib/LogoGithub"
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin"
import LogoTwitter from "react-ionicons/lib/LogoTwitter"
import { Link } from "gatsby"

import LogoBlog from "components/atoms/BlogIcon"

const BlogIcon = styled.div`
  height: 60;
  width: 60;
  margin: 10px;
  padding: 10px;
  background-color: gray;
  border-radius: 6px;
  padding: 10;
  color: "#ffffff";
`
const Item = styled.li`
  text-align: center;
`
const Container = styled.div``

const snsLinks = [
  {
    text: "blog",
    to: "https://ver-1-0.net",
    icon: (
      <BlogIcon>
        <LogoBlog />
      </BlogIcon>
    ),
  },
  {
    text: "github",
    to: "https://github.com/version-1",
    icon: (
      <BlogIcon>
        <LogoGithub color="#ffffff" />
      </BlogIcon>
    ),
  },
  {
    text: "linkedin",
    to: "https://www.linkedin.com/in/jiro-onodera-1b3766145",
    icon: (
      <BlogIcon>
        <LogoLinkedin color="#ffffff" />
      </BlogIcon>
    ),
  },
  {
    text: "twitter",
    to: "https://twitter.com/version1_2017",
    icon: (
      <BlogIcon>
        <LogoTwitter color="#ffffff" />
      </BlogIcon>
    ),
  },
]

const SNSLinks = props => {
  return (
    <Container>
      <ul>
        {snsLinks.map(({ to, icon }) => (
          <Item key={to}>
            <a href={to} target="_blank">{icon}</a>
          </Item>
        ))}
      </ul>
    </Container>
  )
}
export default SNSLinks
