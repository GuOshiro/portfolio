import Button from "@components/Button"
import Logo from "@components/Logo"
import TextTranslate from "@components/TextTranslate"
import Translate, { TranslateHTML } from "@components/Translate"
import { navigate } from "gatsby-plugin-intl"
import React from "react"
import { Heading } from "rebass"
import SiteMap from "../SiteMap"
import * as Style from "./Footer.styles"

export default function Footer() {
  const goToContact = () => navigate("/contact/")
  return (
    <footer>
      <Style.MessageWrapper>
        <TextTranslate id="footer.didYouLikeIt" as="h4" color="white" />
      </Style.MessageWrapper>
      <Style.MessageWrapper backgroundColor="blueNavyLight">
        <TextTranslate id="footer.XAppsIsAnITProvider" as="p" color="white" />
        <Heading as="h4" color="white" fontFamily="body">
          Gartner
        </Heading>
        <Button margin="20px auto" width="200px" onClick={goToContact}>
          <Translate id="header.buttons.hireProject" />
        </Button>
      </Style.MessageWrapper>

      <Style.Wrapper>
        <Style.FooterLineSection>
          <Logo width="122px" />
        </Style.FooterLineSection>
        <Style.FooterLineSection>
          <Style.FooterSection fontWeight="100">
            <Translate id="footer.yourITTeam" />
          </Style.FooterSection>
          <Style.FooterSection
            as="address"
            name={<Translate id="footer.sections.letsTalk.title" />}
          >
            <Style.FooterLink
              fontWeight="100"
              href="mailto:gustavoaoshiro@gmail.com"
            >
              gustavoaoshiro@gmail.com
            </Style.FooterLink>
            <Style.FooterLink fontWeight="100" href="tel:+5511973701407">
              <Translate id="footer.sections.letsTalk.phone" />
            </Style.FooterLink>
            <Style.Address fontWeight="100" mt={3}>
              <TranslateHTML id="footer.sections.letsTalk.address" />
            </Style.Address>
          </Style.FooterSection>
          <Style.FooterSection
            name={<Translate id="footer.sections.siteMap" />}
          >
            <SiteMap />
          </Style.FooterSection>
        </Style.FooterLineSection>
      </Style.Wrapper>
    </footer>
  )
}
