import Translate from "@components/Translate"
import { menuItems } from "@constants/home"
import { useToggleLocale } from "@utils/hooks/useToggleLocale"
import classNames from "classnames"
import { Link } from "gatsby-plugin-intl"
import React from "react"
import { Button } from "rebass"
import * as Style from "./Menu.styles"

function Menu({ show, isMobile = false }) {
  const { toggleLocale } = useToggleLocale()
  return (
    <Style.Wrapper
      className={classNames({
        isMobile,
        show,
      })}
    >
      <Style.MenuItemsWrapper>
        {menuItems.map((item, index) => (
          <Style.MenuItem key={index}>
            <Link activeClassName="active" to={`/${item}`}>
              <Translate id={`menu.${item}`} />
            </Link>
          </Style.MenuItem>
        ))}
        <Style.MenuItem>
          <Button variant="link" type="button" onClick={toggleLocale}>
            <Translate id="header.changeLocale" />
          </Button>
        </Style.MenuItem>
      </Style.MenuItemsWrapper>
    </Style.Wrapper>
  )
}

export default Menu
