import React from "react"
import { Flex } from "rebass"
// Styles
import { FooterLineSection, FooterSection, Wrapper } from "./Footer.styles"
// Component
import TextTranslate from "@components/TextTranslate"
// Constants
import footerContent from "@constants/footer"

const Footer = () => {
  return (
    <Wrapper>
      <FooterLineSection>
        {footerContent.description.map((footer, index) => (
          <FooterSection key={index}>
            <TextTranslate
              as={footer.title.as}
              color="white"
              fontWeight="body"
              id={footer.title.id}
            />
            <Flex flexDirection="column">
              {footer.content.map((content, i) => (
                <TextTranslate
                  as={content.as}
                  color="white"
                  href={content.href}
                  id={content.id}
                  key={i}
                  opacity="0.5"
                  target={content.target}
                />
              ))}
            </Flex>
          </FooterSection>
        ))}
      </FooterLineSection>
    </Wrapper>
  )
}

export default Footer
