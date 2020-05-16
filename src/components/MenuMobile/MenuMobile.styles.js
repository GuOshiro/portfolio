import React from "react"
import { Box } from "rebass"
// styles
import { MENU_HEIGHT } from "@components/BaseLayout/Header/Header.styles"

export const Wrapper = props => (
  <Box
    sx={{
      backgroundColor: "white",
      boxShadow: "card",
      height: "100vh",
      paddingBottom: 3,
      paddingTop: 0,
      paddingX: 3,
      position: "absolute",
      right: 0,
      top: MENU_HEIGHT,
      transform: "translateX(-100%)",
      transition: "transform .3s ease-in",
      width: "100%",
      "&.show": {
        display: ["inline", "inline", "none"],
        transform: "translateX(0%)",
      },
    }}
    {...props}
  />
)
