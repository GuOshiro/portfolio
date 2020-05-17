import React, { Fragment } from "react"
import { Box } from "rebass"
import TextTranslate from "@components/TextTranslate"

const Contact = ({ contactContent }) => {
  return (
    <Box>
      <TextTranslate
        as={contactContent.title.as}
        fontWeight="body"
        id={contactContent.title.id}
        textTransform="uppercase"
      />
    </Box>
  )
}

export default Contact
