import BaseLayout from "@components/BaseLayout"
import Contact from "@components/Contact"
import contactContent from "@constants/contact"
import Seo from "@components/Seo"
import React from "react"

function ContactPage() {
  return (
    <BaseLayout>
      <Seo title={"Contact"} />
      <Contact contactContent={contactContent} />
    </BaseLayout>
  )
}

export default ContactPage
