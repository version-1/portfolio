import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Context from 'context'
import { Body, More } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'
import colors from 'constants/colors'

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
              <p><More onClick={() => showModal({ title: 'Work', content })}>more...</More></p>
            </>
          }
        />
        <Message
          title="React Snake Game"
          body={
            <>
              Well-known Snake Game implemented with React. you can play it on
              web.
              <p><More>more...</More></p>
            </>
          }
        />
        <Message
          title="React Native Various Form"
          body={
            <>
              npm package.
              <p><More>more...</More></p>
            </>
          }
        />
        <Message
          title="KUROUTO ACT"
          body={
            <>
              React Native application for real estate agent. They can output
              documents required on trade easily with this.
              <p><More>more...</More></p>
            </>
          }
        />
        <Message
          title="SMAMA"
          body={
            <>
              C to C Web Service. User can sale their used home applicances and
              buy them cheaper.
              <p><More>more...</More></p>
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
