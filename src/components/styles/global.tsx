import React from 'react'
import { Global, css } from '@emotion/react'

const styles = css`
  *, *:before, *:after {
      -webkit-box-sizing: border-box;
         -moz-box-sizing: border-box;
           -o-box-sizing: border-box;
          -ms-box-sizing: border-box;
              box-sizing: border-box;
  }
  body {
    font-family: "Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif;
    letter-spacing: 0.2px;
    margin: 0;
    overflow: hidden;
  }
  main {
    width: 100%;
  }
  ul {
    margin-left: 0;
    padding-left: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  h1 {
    margin: 0;
  }
`

export default function GlobalStyle() {
  return <Global styles={styles} />
}

