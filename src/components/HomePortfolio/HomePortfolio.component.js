import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
// Styles
import { Wrapper } from "./HomePortfolio.styles"
// Components
import TextTranslate from "@components/TextTranslate"
// Constant
import PortfolioContent from "@constants/portfolio"

const HomePortfolio = ({}) => {
  const {
    portfolio: { edges: portfolios },
  } = useStaticQuery(graphql`
    query portfolioQuery {
      portfolio: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/api/portfolio/*.md" } }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              company
              description
              clientName
              clientPosition
              description
              primaryColor
              secondaryColor
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Fade bottom>
        <TextTranslate
          as="h2"
          fontSize="100px"
          fontWeight="bold"
          id={PortfolioContent.title}
          textTransform="uppercase"
        />
      </Fade>
    </Wrapper>
  )
}

export default HomePortfolio
