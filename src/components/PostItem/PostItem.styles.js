/** @jsx jsx */
import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Box, Flex, Text } from "rebass"
import { jsx } from "theme-ui"

export const Category = ({ children }) => {
  return <Text variant="caps">{children}</Text>
}

export const Title = props => (
  <Text {...props} fontFamily="heading" fontSize={4} color="primary" />
)

export const Date = props => <Text {...props} fontSize={2} color="gray" />

export const Wrapper = props => (
  <Flex
    as="article"
    height="100%"
    flexDirection="column"
    sx={{
      boxShadow: "card",
      transition: "box-shadow .2s ease",
      "&:hover": {
        boxShadow: "cardHovered",
      },
    }}
    {...props}
  />
)

export const InfoWrapper = props => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    flex={1}
    height="100%"
    p={2}
    {...props}
  />
)

export const PostImage = ({ image, height = [250, 300, 320] }) => (
  // used fragment here to avoid auto removing unused dep
  <React.Fragment>
    <Img
      sx={{
        height,
      }}
      fluid={image.childImageSharp.fluid}
    />
  </React.Fragment>
)

export const CardLink = props => (
  <Link
    sx={{
      textDecoration: "none",
      alignSelf: "stretch",
      display: "flex",
    }}
    {...props}
  />
)

export const TitleWrapper = props => <Box width={"100%"} {...props} />
