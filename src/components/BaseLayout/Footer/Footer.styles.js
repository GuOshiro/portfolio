import Content, { WidthLimitation } from "@components/Content"
import React from "react"
import { Box, Flex, Link, Text } from "rebass"

export function Wrapper({ children }) {
  return (
    <Flex
      bg="blue"
      color="white"
      fontFamily="body"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      width="100%"
      paddingY={5}
      paddingX={3}
      sx={{
        bottom: 0,
      }}
    >
      <WidthLimitation flexDirection="column">{children}</WidthLimitation>
    </Flex>
  )
}

export function MessageWrapper({ children, ...props }) {
  return (
    <Flex
      height="100%"
      justifyContent="center"
      padding="90px 0"
      textAlign="center"
      sx={{
        backgroundColor: "blue",
        bottom: 0,
        ...props,
      }}
    >
      <Content flexDirection="column">{children}</Content>
    </Flex>
  )
}

export function FooterSection({ children, name, ...props }) {
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

export function FooterLineSection({ children }) {
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

export function FooterLink({ children, ...props }) {
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

export function Address({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}
