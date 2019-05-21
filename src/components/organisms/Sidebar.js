import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const links = [
  { text: "Top", to: "/" },
  { text: "About Me", to: "/channels/AboutMe" },
  { text: "Works", to: "/channels/Works" },
  { text: "Blog", to: "/channels/Blog" },
]

const privateLinks = [
  { text: "You", to: "/channels/You" },
  { text: "To jjoo", to: "/channels/ToMe" },
]

const snsLinks = [
  { text: "blog", to: "https://ver-1-0.net" },
  { text: "github", to: "https://github.com/version-1" },
  {
    text: "linkedin",
    to: "https://www.linkedin.com/in/jiro-onodera-1b3766145",
  },
  { text: "twitter", to: "https://twitter.com/version1_2017" },
]

const Container = styled.div`
  width: 320px;
  display: flex;
`

const Left = styled.div``
const Right = styled.div``
const Header = styled.div``
const Public = styled.div``
const Private = styled.div``

const Sidebar = () => (
  <Container>
    <Left>
      <ul>
        {snsLinks.map(({ to, text }) => (
          <li>
            <h2>
              <Link to={to}>{text}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </Left>
    <Right>
      <Header>
        <h1>jjoo's Portfolio</h1>
      </Header>
      <Public>
        <ul>
          {links.map(({ to, text }) => (
            <li>
              <h2>
                <Link to={to}>{text}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </Public>
      <Private>
        <ul>
          {privateLinks.map(({ to, text }) => (
            <li>
              <h2>
                <Link to={to}>{text}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </Private>
    </Right>
  </Container>
)

export default Sidebar
