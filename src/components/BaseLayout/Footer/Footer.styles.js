import React from "react"
import { Box, Flex, Link, Text } from "rebass"
// Components
import { WidthLimitation } from "@components/Content"

export const Wrapper = ({ children }) => {
  return (
    <Flex
      alignItems="center"
      as="footer"
      backgroundColor="gray"
      color="white"
      flexWrap="wrap"
      fontFamily="body"
      justifyContent="center"
      paddingX={3}
      paddingY={5}
      width="100%"
      sx={{
        bottom: 0,
      }}
    >
      <WidthLimitation flexDirection="column">{children}</WidthLimitation>
    </Flex>
  )
}

export const FooterSection = ({ children, name, ...props }) => {
  return (
    <Box as="section" className="section" lineHeight={1.5625} {...props}>
      {name && (
        <Box mb={2}>
          <Text fontWeight="bold">{name}</Text>
        </Box>
      )}
      {children}
    </Box>
  )
}

export const FooterLineSection = ({ children, ...props }) => {
  return (
    <Flex
      as="section"
      flexWrap="wrap"
      justifyContent="space-between"
      sx={{
        ".section": {
          width: ["100%", "100%", "20%"],
          "&:not(:last-child)": {
            mr: 5,
            mb: 4,
          },
        },
        ...props
      }}
    >
      {children}
    </Flex>
  )
}

export const FooterLink = ({ children, ...props }) => {
  return (
    <Link
      lineHeight={1.5625}
      display="block"
      sx={{
        textDecoration: "none",
        color: "inherit",
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

export const Address = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}
