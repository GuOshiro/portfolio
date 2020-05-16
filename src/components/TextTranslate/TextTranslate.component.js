import React from "react"
import { Text } from "rebass"

export const TextTranslate = ({ id, as, ...props }) => {
  const defaultProps = { fontFamily: "heading", ...props }
  const textProps = () => {
    switch (as) {
      case "h2":
        return {
          color: "white",
          fontWeight: "body",
          fontSize: 6,
          fontFamily: "heading",
          lineHeight: "1.06",
          ...defaultProps,
        }
      case "h3":
        return {
          fontHeight: "28px",
          fontSize: "32px",
          fontWeight: "body",
          letterSpacing: "0px",
          color: "blueNavy",
          ...defaultProps,
        }
      case "h4":
        return {
          fontHeight: "25px",
          fontSize: "25px",
          fontWeight: "body",
          letterSpacing: "0px",
          color: "blueNavy",
          ...defaultProps,
        }
      case "h6":
        return {
          fontHeight: "16px",
          fontSize: "20px",
          fontWeight: "body",
          letterSpacing: "0px",
          color: "blueNavy",
          ...defaultProps,
        }
      case "p":
        return {
          fontHeight: "19px",
          fontSize: "16px",
          fontWeight: "light",
          letterSpacing: "0px",
          color: "blueNavy",
          ...defaultProps,
        }
      default:
        return { ...defaultProps }
    }
  }
  return <Text as={as} sx={{ ...textProps() }}></Text>
}

export default TextTranslate
