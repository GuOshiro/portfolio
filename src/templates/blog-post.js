import BaseLayout from "@components/BaseLayout"
import Post from "@components/Post"
import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/Seo"

function BlogPost({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title, date, description, category, image },
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
        image={image?.publicURL}
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
        image {
          publicURL
        }
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
