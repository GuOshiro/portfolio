import BaseLayout from "@components/BaseLayout"
import Contact from "@components/Contact"
import Seo from "@components/Seo"
import React from "react"

function ContactPage() {
  return (
    <BaseLayout>
      <Seo title={"Contact"} />
      <Contact />
    </BaseLayout>
  )
}

export default ContactPage
