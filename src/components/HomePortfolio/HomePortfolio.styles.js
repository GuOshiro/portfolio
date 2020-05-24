import React from "react"
import { Box, Card, Heading } from "rebass"

export const Wrapper = props => <Box {...props} />

export const CardPortfolio = ({
  company,
  image,
  description,
  primaryColor,
  secondaryColor,
  ...props
}) => (
  <Card>
    <Heading as="h6">{company}</Heading>
  </Card>
)
