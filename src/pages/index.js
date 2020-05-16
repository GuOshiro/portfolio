import React from "react"

// Components
import BaseLayout from "@components/BaseLayout"
import Home from "@components/Home"
import SEO from "@components/Seo"

const IndexPage = ({ location }) => {
  return (
    <BaseLayout>
      <SEO title="Home" />
      <Home />
    </BaseLayout>
  )
}

export default IndexPage
