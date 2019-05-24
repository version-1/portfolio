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
      updatePage,
    } = this.props.context
    updatePage(channels[3])
  }

  render() {
    const { channels } = this.props.context.state

    return (
      <Layout>
        <SEO title="blog" />
        <Body>
          <Message title="Hello World" body={<></>} />
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
