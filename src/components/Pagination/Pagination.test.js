import React from "react"
import ReactDOM from "react-dom"
import Pagination from "./Pagination.component"

it("render without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(
    <Pagination
      {...{
        currentPage: 1,
        total: 1,
        isLast: true,
        isFirst: true,
      }}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
