import { useStaticQuery } from "gatsby"
import React from "react"
import ReactDOM from "react-dom"
import LatestPosts from "./LatestPosts.component"

it("render without crashing", () => {
  const div = document.createElement("div")
  useStaticQuery.mockReturnValueOnce({
    allMarkdownRemark: {
      edges: [],
    },
  })

  ReactDOM.render(<LatestPosts />, div)
  ReactDOM.unmountComponentAtNode(div)
})
