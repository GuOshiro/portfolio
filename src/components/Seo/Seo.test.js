import React from "react"
import ReactDOM from "react-dom"
import Seo from "./Seo.component"

it("render without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Seo metatags={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
