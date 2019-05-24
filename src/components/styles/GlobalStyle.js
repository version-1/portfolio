import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
      -webkit-box-sizing: border-box;
         -moz-box-sizing: border-box;
           -o-box-sizing: border-box;
          -ms-box-sizing: border-box;
              box-sizing: border-box;
  }
  body {
    font-family: "Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif;
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

export default GlobalStyle
