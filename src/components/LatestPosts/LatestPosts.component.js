import PostItem from "@components/PostItem"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as Style from "./LatestPosts.styles"

function LatestPosts() {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(graphql`
    query LatestPosts {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/api/posts/*.md" } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 5
      ) {
        edges {
          node {
            frontmatter {
              category
              date
              description
              title
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)
  return (
    <Style.Wrapper>
      <Style.Title></Style.Title>
      <Style.PostsGrid>
        {posts.map(({ node }, index) => (
          <PostItem
            height={150}
            key={index}
            slug={node.fields.slug}
            category={node.frontmatter.category}
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            // image={node.frontmatter.image}
          />
        ))}
      </Style.PostsGrid>
    </Style.Wrapper>
  )
}

export default LatestPosts
