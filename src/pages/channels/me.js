import React from 'react'
import { Link } from 'gatsby'

import Context from 'context'
import { Body, P } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import Image from 'components/atoms/Image'
import SEO from 'components/organisms/Seo'
import Page from 'components/templates/Page'
import constants from 'constants'

class Component extends React.PureComponent {
  componentDidMount() {
    const {
      mutations: { init },
    } = this.props.context
    const path = this.props.props['*']
    init(path)
  }

  render() {
    const { getters, state } = this.props.context

    return (
      <Page state={state} getters={getters}>
        <Message
          title={constants.author}
          body={
            <>
            <P>If you want to contact me, please send message on this channel.</P>
            <P>I can't reply your message here so send message with your contact if you want it</P>
            <P>YOUR MESSAGE IS NOT SHARED OTHERS THROUGH THIS SITE. </P>
          </>
          }
        />
        <Message
          title={constants.author}
          body={
            <>
            <P>Don't Worry. YOUR MESSAGE IS NOT SHARED OTHER PERSON THROUGH THIS SITE </P>
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
