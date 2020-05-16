import Content from "@components/Content"
import Pagination from "@components/Pagination"
import PostItem from "@components/PostItem"
import React from "react"
import * as Style from "./Blog.styles"

function getBlogPageUrl(pageNumber) {
  if (pageNumber === 1) {
    return `/blog`
  }
  return `/blog/page/${pageNumber}`
}

function Blog({ data, pageContext }) {
  const postList = data.allMarkdownRemark.edges
  const { total, currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === total
  const nextPage = getBlogPageUrl(currentPage + 1)
  const prevPage = getBlogPageUrl(currentPage - 1)

  return (
    <Style.Wrapper>
      <Content flexDirection="column">
        <Style.PostGrid>
          {postList.map(
            (
              {
                node: {
                  frontmatter: { category, date, description, title, image },
                  fields: { slug },
                  timeToRead,
                },
              },
              index
            ) => (
              <PostItem
                key={index}
                slug={slug}
                category={category}
                date={date}
                timeToRead={timeToRead}
                title={title}
                description={description}
                image={image}
              />
            )
          )}
        </Style.PostGrid>
        <Pagination
          total={total}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          isFirst={isFirst}
          isLast={isLast}
        />
      </Content>
    </Style.Wrapper>
  )
}

export default Blog
