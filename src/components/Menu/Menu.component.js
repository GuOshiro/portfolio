import React from "react"
import { Link } from "gatsby-plugin-intl"
import { Button } from "rebass"
import classNames from "classnames"
// Constants
import { menuItems } from "@constants/home"
// Utils
import { useToggleLocale } from "@utils/hooks/useToggleLocale"
// Styles
import { Wrapper, MenuItemsWrapper, MenuItem } from "./Menu.styles"
// Components
import TextTranslate from "@components/TextTranslate"

const Menu = ({ show }) => {
  const { toggleLocale } = useToggleLocale()
  return (
    <Wrapper className={classNames({ show })}>
      <MenuItemsWrapper>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <Link activeClassName="active" to={`/${item}`}>
              <TextTranslate as="span" id={item} />
            </Link>
          </MenuItem>
        ))}
        <MenuItem>
          <Button variant="link" onClick={() => toggleLocale()}>
            <TextTranslate as="span" id="idioma" />
          </Button>
        </MenuItem>
      </MenuItemsWrapper>
    </Wrapper>
  )
}

export default Menu
