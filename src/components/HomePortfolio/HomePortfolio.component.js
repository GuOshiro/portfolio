import React from "react"
import Fade from "react-reveal/Fade"
import { Flex } from "rebass"
import { useStaticQuery, graphql } from "gatsby"
// Styles
import { Wrapper, CardPortfolio } from "./HomePortfolio.styles"
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
              image
              description
              primaryColor
              secondaryColor
            }
          }
        }
      }
    }
  `)
  const portfolioList = portfolios.map(portfolio => portfolio.node.frontmatter)
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
      <Flex>
        {portfolioList.map((portfolio, index) => (
          <CardPortfolio
            company={portfolio.company}
            description={portfolio.description}
            image={portfolio.image}
            key={index}
            primaryColor={portfolio.primaryColor}
            secondaryColor={portfolio.secondaryColor}
          />
        ))}
      </Flex>
    </Wrapper>
  )
}

export default HomePortfolio
