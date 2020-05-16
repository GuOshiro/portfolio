import { useStaticQuery } from "gatsby"
import React from "react"
import ReactDOM from "react-dom"
import Post from "./Post.component"

it("render without crashing", () => {
  const div = document.createElement("div")
  useStaticQuery.mockReturnValueOnce({
    allMarkdownRemark: {
      edges: [],
    },
  })

  ReactDOM.render(<Post />, div)
  ReactDOM.unmountComponentAtNode(div)
})
