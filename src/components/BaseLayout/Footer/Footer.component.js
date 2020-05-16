import React from "react"
// Styles
import {
  FooterLineSection,
  FooterSection,
  FooterLink,
  Address,
  Wrapper,
} from "./Footer.styles"

const Footer = () => {
  return (
    <Wrapper>
      <FooterLineSection>
        <FooterSection fontWeight="100"></FooterSection>
        <FooterSection as="address">
          <FooterLink fontWeight="100" href="mailto:gustavoaoshiro@gmail.com">
            gustavoaoshiro@gmail.com
          </FooterLink>
          <FooterLink fontWeight="100" href="tel:+5511973701407"></FooterLink>
          <Address fontWeight="100" mt={3}></Address>
        </FooterSection>
      </FooterLineSection>
    </Wrapper>
  )
}

export default Footer