import React, { Fragment } from "react"
import { Box, Flex, Link } from "rebass"
// Constants
import { homeContent } from "@constants/home"
import TextTranslate from "@components/TextTranslate"
// Style
import { Section } from "./Home.styles"

const Home = () => {
  return (
    <Fragment>
      <Section>
        <Box>
          <Box mb="3">
            <TextTranslate
              id={homeContent.cover.title1.id}
              as={homeContent.cover.title1.as}
            />
            <TextTranslate
              id={homeContent.cover.title2.id}
              as={homeContent.cover.title2.as}
            />
          </Box>
          <TextTranslate
            id={homeContent.cover.subtitle1.id}
            as={homeContent.cover.subtitle1.as}
          />
          <TextTranslate
            id={homeContent.cover.subtitle2.id}
            as={homeContent.cover.subtitle2.as}
          />
          <Flex sx={{ flexDirection: ["column", "row"] }}>
            <TextTranslate
              id={homeContent.cover.subtitle3.id}
              as={homeContent.cover.subtitle3.as}
            />
            <TextTranslate
              as="a"
              fontSize="30px"
              href="mailto:gustavoaoshiro@gmail.com"
              sx={{
                ml: [0, 3],
              }}
            >
              gustavoaoshiro@gmail.com
            </TextTranslate>
          </Flex>
        </Box>
      </Section>
    </Fragment>
  )
}

export default Home
