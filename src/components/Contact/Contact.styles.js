import React from "react"
import { Box } from "rebass"

export const Form = props => (
  <Box
    as="form"
    width="100%"
    sx={{
      label: {
        mb: 3,
      },
    }}
    {...props}
  />
)
