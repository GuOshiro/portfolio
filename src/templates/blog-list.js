import BaseLayout from "@components/BaseLayout"
import Blog from "@components/Blog"
import Hero from "@components/Hero"
import Seo from "@components/Seo"
import { useTranslate } from "@utils/hooks/useTranslate"
import { graphql } from "gatsby"
import React from "react"

function BlogList({ data, pageContext }) {
  const translate = useTranslate()
  return (
    <BaseLayout
      hero={<Hero title="blog.hero.title" subtitle="blog.hero.subtitle" />}
    >
      <Seo title={translate("menu.blog")} />
      <Blog {...{ data, pageContext }} />
    </BaseLayout>
  )
}

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/posts/*.md" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            category
            date
            description
            title
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
