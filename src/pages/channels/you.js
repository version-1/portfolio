import React from 'react'

import Context from 'context'
import Page from 'components/templates/Page'

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
        <></>
      </Page>
    )
  }
}

export default props => (
  <Context.Consumer>
    {context => <Component props={props} context={context} />}
  </Context.Consumer>
)
