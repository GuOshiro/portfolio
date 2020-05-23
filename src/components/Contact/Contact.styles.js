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
      input: {
        fontSize: [3, 5],
        mt: [2, 4],
        border: "1px solid #0e0b5b",
        padding: "10px 20px",
      },
      textarea: {
        border: "1px solid #0e0b5b",
        fontSize: [2, 4],
        mt: 2,
        padding: "10px 20px",
        resize: "none",
        minHeight: "200px",
      },
    }}
    {...props}
  />
)
