import React, { Fragment } from "react"
import { Menu as MenuIcon, X } from "react-feather"
import classnames from "classnames"
// Components
import Menu from "@components/Menu/Menu.component"
// Styles
import { Wrapper } from "./MenuMobile.styles"

function MenuMobile({ show, toggle }) {
  return (
    <Fragment>
      {show ? (
        <X className="menu-icon" onClick={toggle} />
      ) : (
        <MenuIcon className="menu-icon" onClick={toggle} />
      )}
      <Wrapper
        className={classnames({
          show,
          hide: !show,
        })}
      >
        <Menu show={show} />
      </Wrapper>
    </Fragment>
  )
}

export default MenuMobile
