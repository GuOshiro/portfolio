import React from "react"
import { Box, Flex } from "rebass"
// Components
import TextTranslate from "@components/TextTranslate"

const Cover = ({ coverContent }) => {
  return (
    <Box>
      <Box mb="3">
        <TextTranslate
          id={coverContent.title1.id}
          as={coverContent.title1.as}
        />
        <TextTranslate
          id={coverContent.title2.id}
          as={coverContent.title2.as}
        />
      </Box>
      <TextTranslate
        id={coverContent.subtitle1.id}
        as={coverContent.subtitle1.as}
      />
      <TextTranslate
        id={coverContent.subtitle2.id}
        as={coverContent.subtitle2.as}
      />
      <Flex sx={{ flexDirection: ["column", "row"] }}>
        <TextTranslate
          id={coverContent.subtitle3.id}
          as={coverContent.subtitle3.as}
          mr="2"
        />
        <TextTranslate
          as="a"
          fontSize="30px"
          href="mailto:gustavoaoshiro@gmail.com"
        >
          gustavoaoshiro@gmail.com
        </TextTranslate>
      </Flex>
    </Box>
  )
}

export default Cover
