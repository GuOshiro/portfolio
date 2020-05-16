import Menu from "@components/Menu/Menu.component"
import classnames from "classnames"
import React from "react"
import { Menu as MenuIcon, X } from "react-feather"
import * as Style from "./MenuMobile.styles"

function MenuMobile({ show, toggle }) {
  return (
    <>
      {show ? (
        <X className={"menu-icon"} onClick={toggle} />
      ) : (
        <MenuIcon className={"menu-icon"} onClick={toggle} />
      )}
      <Style.Wrapper
        className={classnames({
          show,
          hide: !show,
        })}
      >
        <Menu isMobile show={show} />
      </Style.Wrapper>
    </>
  )
}

export default MenuMobile
