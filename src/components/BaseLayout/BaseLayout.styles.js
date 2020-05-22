import React from "react"
import { Flex } from "rebass"

export const Wrapper = props => (
  <Flex
    flexDirection="column"
    minHeight="100vh"
    position="relative"
    {...props}
  />
)
export const ContentWrapper = props => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    as="main"
    {...props}
  />
)
