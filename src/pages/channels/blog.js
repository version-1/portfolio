import React from 'react'
import moment from 'moment'

import Context from 'context'
import More from 'components/atoms/More'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'
import { Thumbnail } from 'components/styles'

class Component extends React.PureComponent {
  componentDidMount() {
    const {
      mutations: { init, fetchRssFeedAsync },
    } = this.props.context
    const path = this.props.props['*']
    init(path)

    fetchRssFeedAsync()
  }

  render() {
    if (!this.props.context) {
      // block beause error occurs on build
      return <></>
    }
    const { getters, state } = this.props.context
    const { list } = state.articles

    return (
      <Page state={state} getters={getters}>
        {list.map(article => {
          return (
            <Message
              key={article.title}
              title={article.title}
              body={
                <>
                  <p>{moment(article.pubDate).format('LL')}</p>
                  <a href={article.guid}>
                    <Thumbnail src={article.thumbnail} alt={article.title} />
                  </a>
                  <p>{article.contentSnippet}</p>
                  <More href={article.guid} />
                </>
              }
            />
          )
        })}
      </Page>
    )
  }
}

export default props => (
  <Context.Consumer>
    {context => <Component props={props} context={context} />}
  </Context.Consumer>
)
