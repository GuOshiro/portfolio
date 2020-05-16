import React from "react"
import { Flex } from "rebass"

const widthLimitationStyle = {
  maxWidth: "1200px",
  width: "100%",
}

export function WidthLimitation({ children, ...props }) {
  return <Flex sx={{ ...widthLimitationStyle, ...props }}>{children}</Flex>
}

function Content({ children, sx, ...props }) {
  return (
    <Flex
      sx={{ ...widthLimitationStyle, padding: "50px 20px", ...sx }}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Content
