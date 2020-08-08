import React from "react"
import { Box, Flex, Heading } from "rebass"

export const Wrapper = ({ children, className }) => {
  return (
    <Box
      sx={{
        ml: [0, 0, 0],
        flex: 1,
        "&.is-mobile": {
          display: "inline",
        },
        "&.show": {
          display: "inline",
        },
      }}
      className={className}
      display={["none", "none", "inline"]}
    >
      <Flex
        as="nav"
        color="white"
        alignItems="center"
        justifyContent="flex-end"
      >
        {children}
      </Flex>
    </Box>
  )
}

export const MenuItemsWrapper = ({ children }) => (
  <Box
    width="100%"
    as="ul"
    sx={{
      alignItems: "center",
      display: "flex",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexDirection: ["column", "column", "row"],
    }}
  >
    {children}
  </Box>
)

export const MenuLogo = ({ ...props }) => (
  <Heading
    as="h1"
    display="inline"
    color="blueNavy"
    sx={{
      fontFamily: "'Press Start 2P',sans-serif",
    }}
    {...props}
  />
)

export const MenuItem = ({ children }) => (
  <Box
    display={["block", "block", "inline"]}
    sx={{
      button: {
        color: "gray",
        span: {
          color: "gray",
        },
      },
      a: {
        background: "transparent",
        color: "gray",
        cursor: "poiter",
        textDecoration: "none",
        "&.active": {
          fontWeight: "bold",
        },
        "&:hover": {
          opacity: 0.8,
        },
      },
      "&:not(:first-of-type)": {
        ml: [0, 0, 3],
        mt: [3, 3, 0],
      },
    }}
    as="li"
  >
    {children}
  </Box>
)
