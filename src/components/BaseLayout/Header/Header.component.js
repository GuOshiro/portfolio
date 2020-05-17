import React, { useRef } from "react"
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

  // const goToContact = () => navigate("/contact/")

  return (
    <Wrapper ref={headerRef}>
      <WidthLimitation
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Menu />
        <MenuMobile show={showMobileMenu} toggle={toggleMobileMenu} />
      </WidthLimitation>
    </Wrapper>
  )
}

export default Header
