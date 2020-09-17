import React from 'react'

import Context from 'context/index'
import Page from 'components/templates/Page'

interface Props {
  context: any
  props: any
}

class Component extends React.PureComponent<Props> {
  componentDidMount() {
    const {
      mutations: { init },
    } = this.props.context
    const path = this.props.props['*']
    init(path)
  }

  render() {
    if (!this.props.context) {
      // block beause error occurs on build
      return <></>
    }
    const { getters, state } = this.props.context

    return (
      <Page state={state} getters={getters}>
        <></>
      </Page>
    )
  }
}

export default (props: any) => (
  <Context.Consumer>
    {context => <Component props={props} context={context} />}
  </Context.Consumer>
)
