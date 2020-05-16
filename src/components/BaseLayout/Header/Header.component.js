import React, { useRef } from "react"
import { Box, Button, Flex } from "rebass"
import { Link, navigate } from "gatsby-plugin-intl"
// Components
import { WidthLimitation } from "@components/Content"
import Menu from "@components/Menu"
import MenuMobile from "@components/MenuMobile"
// Utils
import { useOnClickOutside } from "@utils/hooks/useOnClickOutside"
import { useToggle } from "@utils/hooks/useToggle"
// Styles
import { Wrapper } from "./Header.styles"

const Header = () => {
  const [showMobileMenu, toggleMobileMenu, hideMenu] = useToggle()
  const headerRef = useRef()

  useOnClickOutside(headerRef, hideMenu)

  const goToContact = () => navigate("/contact/")

  return (
    <Wrapper ref={headerRef}>
      <WidthLimitation
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Link to="/"></Link>
        <Menu />
        <Box flex={1} display={["none", "none", "inline"]}>
          <Flex justifyContent="flex-end" alignItems="center">
            <Button onClick={goToContact} variant="outlined" mr={3}></Button>
            <Button onClick={goToContact}></Button>
          </Flex>
        </Box>
        <MenuMobile show={showMobileMenu} toggle={toggleMobileMenu} />
      </WidthLimitation>
    </Wrapper>
  )
}

export default Header
