import Card from "@components/Card"
import { WidthLimitation } from "@components/Content"
import { Link as IntlLink } from "gatsby-plugin-intl"
import React from "react"
import { Flex, Heading, Text } from "rebass"

export const Section = ({ title, children, backgroundColor, ...props }) => (
  <Flex backgroundColor={backgroundColor} width="100vw" height="98vh" {...props}>
    <WidthLimitation marginY="5" marginX="auto">
      <Flex
        as="section"
        flexWrap="wrap"
        justifyContent="space-between"
        padding="3"
        width="100%"
        alignItems="center"
      >
        {title}
        {children}
      </Flex>
    </WidthLimitation>
  </Flex>
)

export const Link = props => (
  <IntlLink
    style={{
      textDecoration: "none",
    }}
    {...props}
  />
)

export const SectionTitle = props => (
  <Heading
    {...{
      fontHeight: "25px",
      fontSize: "25px",
      fontWeight: "body",
      letterSpacing: "0px",
      mb: 2,

      textDecoration: "none",
    }}
    as="h4"
    {...props}
  />
)

export const SectionSubtitle = props => (
  <Text
    {...{
      fontHeight: "19px",
      fontSize: "16px",
      fontWeight: "light",
      letterSpacing: "0px",
      mb: 2,
      fontFamily: "heading",
      width: "100%",
    }}
    as="p"
    {...props}
  />
)

export const HomeCard = props => (
  <Card
    textAlign="center"
    maxWidth={["unset", "unset", "268px"]}
    width="100%"
    overflow="hidden"
    sx={{
      "&:not(:last-child)": {
        mb: [3, 3, 0],
      },
    }}
    {...props}
  />
)
