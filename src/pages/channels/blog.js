import React from 'react'
import Parser from 'rss-parser'

import Context from 'context'
import { Body } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import Image from 'components/atoms/Image'
import SEO from 'components/organisms/Seo'

class Component extends React.PureComponent {
  get limit() {
    return 10
  }

  async componentDidMount() {
    const {
      state: { channels },
      updatePage,
      fetchRssFeedAsync
    } = this.props.context

    const path = this.props.props['*']
    if (path === '/') {
      updatePage(channels.top)
    } else {
      const [key] = path.split('/').slice(-1)
      updatePage(channels[key])
    }

    await fetchRssFeedAsync()
  }

  render() {
    const { page, articles } = this.props.context.state

    return (
      <Layout>
        <SEO title={page.name} />
        <Body>
          {articles.slice(0, this.limit).reverse().map(article => (
            <Message
              key={article.title}
              title={article.title}
              body={<>{article.content.slice(0, 150)}</>}
            />
          ))}
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
