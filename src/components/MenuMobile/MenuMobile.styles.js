import { MENU_HEIGHT } from "@components/BaseLayout/Header/Header.styles"
import React from "react"
import { Box } from "rebass"

export const Wrapper = props => (
  <Box
    sx={{
      transition: "transform .3s ease-in",
      width: "100%",
      backgroundColor: "primary",
      position: "absolute",
      top: MENU_HEIGHT,
      paddingX: 3,
      paddingTop: 0,
      paddingBottom: 3,
      right: 0,
      transform: "translateX(-100%)",
      boxShadow: "card",

      "&.show": {
        display: ["inline", "inline", "none"],
        transform: "translateX(0%)",
      },
    }}
    {...props}
  />
)
