import PostItem from "@components/PostItem"
import Translate from "@components/Translate"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as Style from "./LatestPosts.styles"

function LatestPosts() {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(graphql`
    query LatestPosts {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/posts/*.md" } }
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
  `)
  return (
    <Style.Wrapper>
      <Style.Title>
        <Translate id="post.latestPosts" />
      </Style.Title>
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
            image={node.frontmatter.image}
          />
        ))}
      </Style.PostsGrid>
    </Style.Wrapper>
  )
}

export default LatestPosts
