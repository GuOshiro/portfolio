import React from "react"
import { Box } from "rebass"

export const Wrapper = props => (
  <Box
    as="form"
    width={1}
    sx={{
      label: {
        mb: 3,
      },
    }}
    {...props}
  />
)
