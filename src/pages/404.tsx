import React from 'react'
// @ts-ignore
import { Link } from 'gatsby'
import styled from 'styled-components'

import Modal from 'components/templates/Modal'
// @ts-ignore
import notFound from 'assets/404.png'

const Content = styled.div`
  display: flex;
  justify-content: center;
  & p,
  & h1 {
    text-align: center;
  }
`

const NotFoundPage = () => (
  <Modal
    show
    title="Not Found 404"
    hideModal={() => (window ? (window.location.href = '/') : undefined)}
    content={
      <Content>
        <div>
          <h1>NOT FOUND PAGE</h1>
          <Link to="/">
            <img src={notFound} alt="404" />
          </Link>
          <p>Click Image and Go to TOP.</p>
        </div>
      </Content>
    }
  />
)

export default NotFoundPage
