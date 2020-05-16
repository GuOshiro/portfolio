import React from "react"
import { Box, Heading } from "rebass"

export const Wrapper = props => <Box {...props} />

export const PostsGrid = props => (
  <Box
    {...props}
    sx={{
      display: `grid`,
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gridGap: 3,
    }}
  />
)
export const Title = props => <Heading variant="caps" mb={2} {...props} />
