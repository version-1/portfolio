import React from 'react'
import Helmet from 'react-helmet'
// @ts-ignore
import { useStaticQuery, graphql } from 'gatsby'
// @ts-ignore
import thumbnail from 'assets/thumbnail.png'
// @ts-ignore
import favicon from 'assets/favicon.ico'
import constants from 'constants/index'
import startCase from 'lodash/startCase'

interface Props {
  description?: string
  lang?: string
  meta?: any
  title: string
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>{`${startCase(title)} | ${site.siteMetadata.title}`}</title>
      {[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${startCase(title)} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:image`,
          content: `${constants.origin}${thumbnail}`,
        },
        {
          property: `og:image:width`,
          content: 640,
        },
        {
          property: `og:image:height`,
          content: 480,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${startCase(title)} | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'robots',
          content: 'noindex',
        },
        {
          name: 'googlebot',
          content: 'noindex',
        },
      ]
        .concat(meta)
        .map((item: any) => {
          if (!item) {
            return
          }
          return <meta key={`${item.name}-${item.property}`}{...item} />
        })}
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
  )
}

export default SEO
