import React from 'react'
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
    <>
      <title>{title ?? site.siteMetadata.title}</title>
      <meta name='viewport' content='width=device-width, height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />
      <meta name='description' content={metaDescription} />
      <meta name='author' content={site.siteMetadata.author} />
      <meta property='ng:title' content={title} />
      <meta property='og:type' content={ogType} />
      <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
      <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
    </>
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
