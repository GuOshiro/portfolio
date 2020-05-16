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

const Menu = ({ show }) => {
  const { toggleLocale } = useToggleLocale()
  return (
    <Wrapper className={classNames({ show })}>
      <MenuItemsWrapper>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <Link activeClassName="active" to={`/${item}`}></Link>
          </MenuItem>
        ))}
        <MenuItem>
          <Button variant="link" type="button" onClick={toggleLocale}></Button>
        </MenuItem>
      </MenuItemsWrapper>
    </Wrapper>
  )
}

export default Menu
