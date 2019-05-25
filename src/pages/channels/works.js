import React from 'react'
import { Link } from 'gatsby'

import Context from 'context'
import { Body } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import Image from 'components/atoms/Image'
import SEO from 'components/organisms/Seo'

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
    const { page, channels } = this.props.context.state

    return (
      <Layout>
        <SEO title={page.name} />
        <Body>
          <Message
            title="My Blog implemented by Gatsbyjs"
            body={
              <>
                Blog's Theme is engineering, work for freelnce, travel. I
                designed UI and developed and wrote all articles in this blog.
                <p>more...</p>
              </>
            }
          />
          <Message
            title="React Snake Game"
            body={
              <>
                Well-known Snake Game implemented with React. you can play it on
                web.
                <p>more...</p>
              </>
            }
          />
          <Message
            title="React Native Various Form"
            body={
              <>
                npm package.
                <p>more...</p>
              </>
            }
          />
          <Message
            title="KUROUTO ACT"
            body={
              <>
                React Native application for real estate agent. They can output
                documents required on trade easily with this.
                <p>more...</p>
              </>
            }
          />
          <Message
            title="SMAMA"
            body={
              <>
                C to C Web Service. User can sale their used home applicances and buy them cheaper.
                <p>more...</p>
              </>
            }
          />
        </Body>
      </Layout>
    )
  }
}

export default props => (
  <Context.Consumer>
    {context => <Component props={props} context={context} />}
  </Context.Consumer>
)
