import React from "react"
import { Button as ButtonRebass } from "rebass"

function Button({ children, ...props }) {
  return <ButtonRebass {...props}>{children}</ButtonRebass>
}

export default Button
