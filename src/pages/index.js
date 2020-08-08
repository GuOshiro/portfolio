import React from "react"

// Components
import BaseLayout from "@components/BaseLayout"
import Home from "@components/Home"
import SEO from "@components/Seo"

const IndexPage = ({ location }) => {
  return (
    <BaseLayout>
      <SEO title="GuOshiro" />
      <Home />
    </BaseLayout>
  )
}

export default IndexPage
