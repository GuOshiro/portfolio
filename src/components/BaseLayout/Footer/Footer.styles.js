import React from "react"
import { Box, Flex, Link, Text } from "rebass"
// Components
import Content, { WidthLimitation } from "@components/Content"

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

export const MessageWrapper = ({ children, ...props }) => {
  return (
    <Flex
      height="100%"
      justifyContent="center"
      padding="90px 0"
      textAlign="center"
      sx={{
        backgroundColor: "gray",
        bottom: 0,
        ...props,
      }}
    >
      <Content flexDirection="column">{children}</Content>
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

export const FooterLineSection = ({ children }) => {
  return (
    <Flex
      as="section"
      flexWrap="wrap"
      justifyContent="space-between"
      sx={{
        "&:not(:last-child)": {
          mb: 3,
        },
        ".section": {
          width: ["100%", "100%", "20%"],
          "&:not(:last-child)": {
            mr: 5,
            mb: 4,
          },
        },
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
