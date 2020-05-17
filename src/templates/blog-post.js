import BaseLayout from "@components/BaseLayout"
import Post from "@components/Post"
import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/Seo"

function BlogPost({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title, date, description, category },
      html,
      timeToRead,
    },
  } = data

  return (
    <BaseLayout>
      <Seo
        lang={"en"}
        title={title}
        description={description}
        article
      />
      <Post {...{ title, date, description, category, html, timeToRead }} />
    </BaseLayout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
        category
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
