import BaseLayout from "@components/BaseLayout"
import Post from "@components/Post"
import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/Seo"

function PortfolioItem({ data }) {
  const {
    markdownRemark: {
      frontmatter: { company, date, description },
      html,
      timeToRead,
    },
  } = data

  return (
    <BaseLayout>
      <Seo title={company} description={description} article />
      <Post
        title={company}
        {...{ company, date, description, html, timeToRead }}
      />
    </BaseLayout>
  )
}

export const query = graphql`
  query PortfolioItem($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        company
        description
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`

export default PortfolioItem
