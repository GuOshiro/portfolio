/** @jsx jsx */
import { Link } from "gatsby-plugin-intl"
import React from "react"
import { Box, Flex } from "rebass"
import { jsx } from "theme-ui"

export const Wrapper = props => (
  <Flex
    width="100%"
    marginTop={4}
    alignItems="center"
    flexWrap="wrap"
    justifyContent="space-between"
    sx={{
      "& > *": {
        width: ["100%", "auto"],
        textAlign: "center",
      },
    }}
    {...props}
  />
)

export const PageDisplayWrapper = props => <Box paddingY={2} {...props} />

export const CustomLink = ({ children, show, ...props }) => (
  <React.Fragment>
    <Flex>
      <Link
        {...props}
        sx={{
          visibility: show ? "visible" : "hidden",
          color: "secondary",
          textDecoration: "none",
          textTransform: "capitalize",
        }}
      >
        {children}
      </Link>
    </Flex>
  </React.Fragment>
)
