import ContentContainer from "@components/Content"
import React from "react"
import { Box, Flex, Heading, Text } from "rebass"

export const ContentWrapper = props => (
  <ContentContainer
    flexDirection={["column", "column", "row"]}
    sx={{
      "& > *:not(:last-child)": {
        mb: [3, 3, 0],
        mr: [0, 0, 3],
      },
    }}
    {...props}
  />
)

export const PostWrapper = props => <Flex flexDirection={"column"} {...props} />
export const Title = props => (
  <Heading fontFamily="body" fontSize={5} color="heading" {...props} />
)
export const Subtitle = props => (
  <Text fontFamily="body" color="gray" fontSize={2} {...props} />
)
export const Category = props => <Text variant="caps" {...props} />
export const Date = props => (
  <Text color="gray" fontSize={1} fontStyle="italic" {...props} />
)

export const TimeToRead = props => (
  <Text color="gray" fontSize={1} fontStyle="italic" {...props} />
)

export const Content = props => (
  <Box
    sx={{
      fontSize: 2,
      maxWidth: "100%",
      lineHeight: "1.85",
      color: "text",
      fontFamily: "body",

      p: {
        fontSize: "1em",
        marginBottom: "1.3em",
        height: "auto",
        lineHeight: "1.45",
      },

      h1: {
        fontSize: 6,
        marginTop: 0,
        padding: "4em 0 !important",
      },

      h2: {
        fontSize: 5,
      },

      h3: {
        fontSize: 4,
      },

      h4: {
        fontSize: 3,
      },

      h5: {
        fontSize: 2,
      },

      h6: {
        fontSize: 1,
      },

      "h1, h2, h3, h4": {
        margin: "1.414em 0 0.5em",
        fontWeight: "bold",
        color: "heading",
        lineHeight: "1.42",
      },

      small: { fontSize: "0.707em" },
      "img, canvas, iframe, video, svg, select, textarea": {
        maxWidth: "100%",
      },

      div: { width: "100%" },
      "div img": { width: "100%" },

      "blockquote p": {
        fontSize: "1.5em",
        fontStyle: "italic",
        margin: "1em auto 1em",
        maxWidth: "48em",
      },

      li: { marginLeft: "2em" },

      "pre, code": { fontFamily: 'Menlo, Monaco, "Courier New", monospace' },

      pre: {
        backgroundColor: "#fafafa",
        fontSize: "0.8em",
        overflowX: "scroll",
        padding: "1.125em",
      },

      "a, a:visited": { color: "primary" },
      "a:hover, a:focus, a:active": { color: "#2980b9" },
    }}
    {...props}
  />
)
