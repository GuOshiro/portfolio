import BaseLayout from "@components/BaseLayout"
import SEO from "@components/Seo"
import React from "react"

const NotFoundPage = () => (
  <BaseLayout>
    <SEO title="404" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </BaseLayout>
)

export default NotFoundPage
