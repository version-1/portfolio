import React from 'react'
import styled from '@emotion/styled'

import Modal from 'components/shared/templates/modal'
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
