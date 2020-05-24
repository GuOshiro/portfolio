import React from "react"
import { Box, Card, Heading } from "rebass"
import { Link } from "gatsby"

export const Wrapper = props => <Box width="100%" {...props} />

export const CardPortfolio = ({
  company,
  description,
  image,
  primaryColor,
  secondaryColor,
  slug,
  ...props
}) => (
  <Link to={`/portfolio/${slug}`}>
    <Card
      sx={{
        boxShadow: "none",
        cursor: "pointer",
        width: "350px",
        transition: "box-shadow 100ms",
        zIndex: 1,
        backgroundColor: primaryColor,
        ":hover": {
          boxShadow: "4px 10px 18px #0D0D361A",
          zIndex: 2,
        },
      }}
    >
      <Heading as="h6">{company}</Heading>
    </Card>
  </Link>
)
