import React from "react"
import Img from "gatsby-image"
import { Box, Card } from "rebass"

export const Wrapper = props => <Box width="100%" {...props} />

export const CardPortfolio = ({
  company,
  image,
  primaryColor,
  secondaryColor,
  urlProject,
}) => (
  <a
    href={urlProject}
    target="_blank"
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      textDecoration: "none",
    }}
  >
    <Card
      sx={{
        boxShadow: "none",
        cursor: "pointer",
        width: "130px",
        transition: "filter 200ms",
        zIndex: 1,
        color: primaryColor,
        textDecorationLine: "none",
        backgroundColor: secondaryColor,
        opacity: 0.9,
        filter: "grayscale(1)",
        ":hover": {
          filter: "grayscale(0)",
          zIndex: 2,
        },
      }}
    >
      {image && (
        <Img
          fluid={image.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={company}
        />
      )}
    </Card>
  </a>
)
