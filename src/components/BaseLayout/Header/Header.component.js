import { WidthLimitation } from "@components/Content"
import Logo from "@components/Logo"
import Menu from "@components/Menu"
import MenuMobile from "@components/MenuMobile"
import Translate from "@components/Translate"
import { useOnClickOutside } from "@utils/hooks/useOnClickOutside"
import { useToggle } from "@utils/hooks/useToggle"
import { Link, navigate } from "gatsby-plugin-intl"
import React, { useRef } from "react"
import { Box, Button, Flex } from "rebass"
import * as Style from "./Header.styles"

function Header() {
  const [showMobileMenu, toggleMobileMenu, hideMenu] = useToggle()
  const headerRef = useRef()

  useOnClickOutside(headerRef, hideMenu)

  const goToContact = () => navigate("/contact/")

  return (
    <Style.Wrapper ref={headerRef}>
      <WidthLimitation
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Link to="/">
          <Logo height="auto" width={"7.625em"} />
        </Link>

        <Menu />

        <Box flex={1} display={["none", "none", "inline"]}>
          <Flex justifyContent="flex-end" alignItems="center">
            <Button onClick={goToContact} variant="outlined" mr={3}>
              <Translate id="header.buttons.hireSquad" />
            </Button>
            <Button onClick={goToContact}>
              <Translate id="header.buttons.hireProject" />
            </Button>
          </Flex>
        </Box>

        <MenuMobile show={showMobileMenu} toggle={toggleMobileMenu} />
      </WidthLimitation>
    </Style.Wrapper>
  )
}

export default Header
