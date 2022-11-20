import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SEOPropsType = {
    description?: string
    lang?: string
    keywords?: string[]
    title?: string
    type?: string
}

const SEO: React.FC<SEOPropsType> = ({
    description,
    lang = 'en',
    keywords,
    title,
    type,
}) => {
    const { site } = useStaticQuery(detailsQuery)
    const metaDescription = description || site.siteMetadata.description
    const ogType = type || 'website'

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`${site.siteMetadata.title} | %s`}
            meta={[
                {
                    name: `viewport`,
                    content:
                        'width=device-width, height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: ogType,
                },
            ].concat(
                (keywords?.length ?? 0) > 0
                    ? {
                        name: `keywords`,
                        content: keywords?.join(`, `),
                    }
                    : [],
            )}
        />
    )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
