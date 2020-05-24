import React from "react"
import { Text } from "rebass"
import { FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"

export const TextTranslate = ({
  as,
  children,
  href,
  id,
  isHTML = false,
  target,
  ...props
}) => {
  const defaultProps = {
    color: "blueNavy",
    fontFamily: "heading",
    "::selection": {
      backgroundColor: "orange",
      color: "white",
    },
  }
  const textProps = () => {
    switch (as) {
      case "h1":
        return {
          ...defaultProps,
          fontWeight: "body",
          fontSize: [5, 6],
          fontFamily: "heading",
          lineHeight: ["1.3", "1.5"],
          ...props,
        }
      case "h2":
        return {
          ...defaultProps,
          fontWeight: "body",
          fontSize: [4, 6],
          fontFamily: "heading",
          lineHeight: "1.06",
          span: {
            span: {
              highlighter: {
                color: "orange",
              },
            },
          },
          ...props,
        }
      case "h3":
        return {
          ...defaultProps,
          fontHeight: "28px",
          fontSize: ["28px", "32px"],
          fontWeight: "body",
          letterSpacing: "0px",
          color: "blueNavy",
          ...props,
        }
      case "h4":
        return {
          ...defaultProps,
          fontHeight: "25px",
          fontSize: "25px",
          fontWeight: "body",
          letterSpacing: "0px",
          color: "blueNavy",
          ...props,
        }
      case "h5":
        return {
          ...defaultProps,
          fontSize: ["20px", "25px"],
          fontWeight: "thin",
          lineHeight: ["1.5", "2"],
          letterSpacing: "0px",
          color: "blueNavy",
          ...props,
        }
      case "h6":
        return {
          ...defaultProps,
          fontHeight: "16px",
          fontSize: "20px",
          fontWeight: "body",
          letterSpacing: "0px",
          color: "blueNavy",
          ...props,
        }
      case "a":
        return {
          ...defaultProps,
          color: "orange",
          fontWeight: "light",
          ...props,
        }
      case "p":
        return {
          ...defaultProps,
          fontHeight: "19px",
          fontSize: "16px",
          fontWeight: "light",
          letterSpacing: "0px",
          ...props,
        }
      case "span":
        return {
          ...defaultProps,
          letterSpacing: "0px",
          ...props,
        }
      default:
        return { ...defaultProps }
    }
  }

  return (
    <Text as={as} href={href} target={target} sx={{ ...textProps() }}>
      {children ? (
        children
      ) : isHTML ? (
        <FormattedHTMLMessage id={id} {...props} />
      ) : (
        <FormattedMessage id={id} {...props} />
      )}
    </Text>
  )
}

export default TextTranslate
