import React from "react"
import { Box, Flex } from "rebass"

export const Wrapper = props => (
  <Flex alignItems="center" flexDirection="column" width="100%" {...props} />
)

export const PostGrid = props => (
  <Box
    display="grid"
    width={"100%"}
    sx={{
      gridGap: 3,
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    }}
    {...props}
  />
)
