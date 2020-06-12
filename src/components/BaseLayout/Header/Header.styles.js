import React, { forwardRef } from "react"
import { Flex } from "rebass"

export const MENU_HEIGHT = [66, 66, 88]

export const Wrapper = forwardRef((props, ref) => (
  <Flex
    ref={ref}
    as="header"
    backgroundColor="white"
    alignItems="center"
    justifyContent="center"
    flexDirection="row"
    width="100vw"
    padding={3}
    sx={{
      position: "fixed",
      top: 0,
      transition: "height 5s ease-in",
      zIndex: 10,
      ".menu-icon": {
        display: ["inline", "inline", "none"],
        color: "gray",
      },
    }}
    {...props}
  />
))
