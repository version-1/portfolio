import React from 'react'
import Parser from 'rss-parser'

import Context from 'context'
import { Body } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'

class Component extends React.PureComponent {
  get limit() {
    return 10
  }

  async componentDidMount() {
    const {
      mutations: { init, fetchRssFeedAsync }
    } = this.props.context
    const path = this.props.props['*']
    init(path)

    await fetchRssFeedAsync()
  }

  render() {
    const { getters, state } = this.props.context
    const { articles } = state

    return (
      <Page state={state} getters={getters}>
        {articles
          .slice(0, this.limit)
          .reverse()
          .map(article => (
            <Message
              key={article.title}
              title={article.title}
              body={<>{article.content.slice(0, 150)}</>}
            />
          ))}
      </Page>
    )
  }
}

export default props => (
  <Context.Consumer>
    {context => <Component props={props} context={context} />}
  </Context.Consumer>
)
