import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"
import { Button } from "rebass"
import classNames from "classnames"
// Constants
import menuItems from "@constants/menu"
// Utils
import { useToggleLocale } from "@utils/hooks/useToggleLocale"
// Styles
import { Wrapper, MenuItemsWrapper, MenuItem } from "./Menu.styles"
// Components
import TextTranslate from "@components/TextTranslate"

const Menu = ({ show }) => {
  const { toggleLocale } = useToggleLocale()
  const { locale } = useIntl()
  return (
    <Wrapper className={classNames({ show })}>
      <MenuItemsWrapper>
        {menuItems.pages.map((item, index) => (
          <MenuItem key={index}>
            <Link activeClassName="active" to={`/${item.link}`}>
              <TextTranslate as="span" id={item.id} />
            </Link>
          </MenuItem>
        ))}
        <MenuItem>
          <Button variant="link" onClick={() => toggleLocale()}>
            <TextTranslate as="span">{locale === 'en'? "Português": "English" }</TextTranslate>
          </Button>
        </MenuItem>
      </MenuItemsWrapper>
    </Wrapper>
  )
}

export default Menu
