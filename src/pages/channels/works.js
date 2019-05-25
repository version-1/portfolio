import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Context from 'context'
import { Body } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'
import colors from 'constants/colors'

const More = styled.p`
  color: ${colors.linkText};
  cursor: pointer;
`

class Component extends React.PureComponent {
  componentDidMount() {
    const {
      state: { channels },
      mutations: { updatePage },
    } = this.props.context

    const path = this.props.props['*']
    if (path === '/') {
      updatePage(channels.top)
    } else {
      const [key] = path.split('/').slice(-1)
      updatePage(channels[key])
    }
  }

  render() {
    const { mutations, getters, state } = this.props.context
    const { page } = state
    const { showModal } = mutations
    const content = <div>Hello World</div>

    return (
      <Page state={state} getters={getters}>
        <Message
          title="My Blog implemented by Gatsbyjs"
          body={
            <>
              Blog's Theme is engineering, work for freelnce, travel. I designed
              UI and developed and wrote all articles in this blog.
              <More onClick={() => showModal({ title: 'Work', content })}>more...</More>
            </>
          }
        />
        <Message
          title="React Snake Game"
          body={
            <>
              Well-known Snake Game implemented with React. you can play it on
              web.
              <More>more...</More>
            </>
          }
        />
        <Message
          title="React Native Various Form"
          body={
            <>
              npm package.
              <More>more...</More>
            </>
          }
        />
        <Message
          title="KUROUTO ACT"
          body={
            <>
              React Native application for real estate agent. They can output
              documents required on trade easily with this.
              <More>more...</More>
            </>
          }
        />
        <Message
          title="SMAMA"
          body={
            <>
              C to C Web Service. User can sale their used home applicances and
              buy them cheaper.
              <More>more...</More>
            </>
          }
        />
      </Page>
    )
  }
}

export default props => (
  <Context.Consumer>
    {context => <Component props={props} context={context} />}
  </Context.Consumer>
)
