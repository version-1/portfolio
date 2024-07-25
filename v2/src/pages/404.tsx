import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Modal from 'components/templates/Modal'
import notFound from 'assets/404.png'

const Content = styled.div`
  display: flex;
  justify-content: center;
  & p,
  & h1 {
    text-align: center;
  }
`

const NotFoundPage = () => {
  return <h1>NOT FOUND PAGE</h1>
}

export default NotFoundPage
