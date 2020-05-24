import Content from "@components/Content"
import Pagination from "@components/Pagination"
import PostItem from "@components/PostItem"
import React from "react"
import * as Style from "./Portfolio.styles"

function getPortfolioPageUrl(pageNumber) {
  if (pageNumber === 1) {
    return `/portfolio`
  }
  return `/portfolio/page/${pageNumber}`
}

function Portfolio({ data, pageContext }) {
  const postList = data.allMarkdownRemark.edges
  const { total, currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === total
  const nextPage = getPortfolioPageUrl(currentPage + 1)
  const prevPage = getPortfolioPageUrl(currentPage - 1)

  return (
    <Style.Wrapper>
      <Content flexDirection="column">
        <Style.PostGrid>
          {postList.map(
            (
              {
                node: {
                  frontmatter: { company, date, description, primaryColor, secondaryColor },
                  fields: { slug },
                  timeToRead,
                },
              },
              index
            ) => (
              <PostItem
                key={index}
                slug={`/portfolio/${slug}`}
                date={date}
                timeToRead={timeToRead}
                title={company}
                description={description}
             
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

export default Portfolio
