import React from "react"
import { Flex } from "rebass"
import { MENU_HEIGHT } from "./Header/Header.styles"

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
    marginTop={MENU_HEIGHT}
    {...props}
  />
)
