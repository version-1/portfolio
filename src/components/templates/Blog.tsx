import React, { useState, useEffect } from 'react'
import moment from 'moment'

import More from 'components/atoms/More'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'
import { Thumbnail } from 'components/styles'
import { fetchRss } from 'services/rss'
import { scrollBottom } from '../../utils'

interface Props {
  title: string
  language?: string
}

const Blog: React.FC<Props> = ({
  title,
  language = 'ja'
}) => {
  const [articles, setArticles] = useState<any[]>([])
  useEffect(() => {
    const fetch = async () => {
      try {
        const feed = await fetchRss(language)

        setArticles(feed.items || [])
        setTimeout(() => scrollBottom(), 500)
      } catch (e) {
        alert('Fetch Feeds Failed')
      }
    }
    fetch()
  }, [])

  if (!articles) {
    return <></>
  }

  return (
    <Page title={title}>
      {articles.map((article: any) => {
        return (
          <Message
            key={article.title}
            title={article.title}
            body={
              <>
                <p>{moment(article.pubDate).format('LL')}</p>
                <a href={article.guid}>
                  <Thumbnail src={article.thumbnailUrl} alt={article.title} />
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

export default Blog
