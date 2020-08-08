import React from "react"
import { Button } from "rebass"
import { Link as LinkScrool } from "react-scroll"
import { Link, useIntl } from "gatsby-plugin-intl"
import classNames from "classnames"
// Constants
import menuItems from "@constants/menu"
// Utils
import { useToggleLocale } from "@utils/hooks/useToggleLocale"
// Styles
import { Wrapper, MenuItemsWrapper, MenuItem, MenuLogo } from "./Menu.styles"
// Components
import TextTranslate from "@components/TextTranslate"

const Menu = ({ show }) => {
  const { toggleLocale } = useToggleLocale()
  const { locale } = useIntl()
  const pathname = typeof window !== "undefined" ? window.location.pathname : ""

  const renderLink = item => {
    if (pathname === "/blog") {
      return (
        <Link
          activeClassName="active"
          to={item.link === "blog" ? `/${item.link}` : `/`}
        >
          <TextTranslate as="span" id={item.id} />
        </Link>
      )
    }
    if (item.link === "") {
      return (
        <Link activeClassName="active" to={`/${item.link}`}>
          <MenuItem icon>
            <MenuLogo>GuOshiro</MenuLogo>
          </MenuItem>
        </Link>
      )
    }
    if (item.link === "blog") {
      return (
        <Link activeClassName="active" to={`/${item.link}`}>
          <TextTranslate as="span" id={item.id} />
        </Link>
      )
    } else {
      return (
        <LinkScrool
          activeClassName="active"
          to={item.id}
          spy={true}
          smooth={true}
          duration={500}
        >
          <TextTranslate as="span" id={item.id} />
        </LinkScrool>
      )
    }
  }

  return (
    <Wrapper className={classNames({ show })}>
      <MenuItemsWrapper>
        {menuItems.pages.map((item, index) => (
          <MenuItem key={index}>{renderLink(item)}</MenuItem>
        ))}
        <MenuItem>
          <Button variant="link" onClick={() => toggleLocale()}>
            <TextTranslate as="span">
              {locale === "en" ? "Português" : "English"}
            </TextTranslate>
          </Button>
        </MenuItem>
      </MenuItemsWrapper>
    </Wrapper>
  )
}

export default Menu
