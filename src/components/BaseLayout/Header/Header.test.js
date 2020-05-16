import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.component"

jest.mock("gatsby-plugin-intl", () => {
  return {
    Link: () => {
      return null
    },
    useIntl: () => ({}),
    FormattedMessage: ({ id }) => {
      return id
    },
  }
})

it("render without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Header />, div)
  ReactDOM.unmountComponentAtNode(div)
})
