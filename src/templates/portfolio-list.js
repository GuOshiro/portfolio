import BaseLayout from "@components/BaseLayout"
import Blog from "@components/Blog"
import Seo from "@components/Seo"
import { useTranslate } from "@utils/hooks/useTranslate"
import { graphql } from "gatsby"
import React from "react"

function BlogList({ data, pageContext }) {
  const translate = useTranslate()
  return (
    <BaseLayout>
      <Seo title={translate("menu.blog")} />
      <Blog {...{ data, pageContext }} />
    </BaseLayout>
  )
}

export const query = graphql`
  query PortfolioList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/api/portfolio/*.md" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            company
            description
            primaryColor
            secondaryColor
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
