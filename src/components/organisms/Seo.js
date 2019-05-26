import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import thumbnail from 'assets/thumbnail.png'
import favicon from 'assets/favicon.ico'
import constants from 'constants'
import { useStaticQuery, graphql } from 'gatsby'
import _ from 'lodash'

function SEO({ description, lang, meta, title }) {
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
      title={_.startCase(title)}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${_.startCase(title)} | ${site.siteMetadata.title}`,
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
          content: `${_.startCase(title)} | ${site.siteMetadata.title}`,
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
      ].concat(meta)}
    >
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
