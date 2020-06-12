import BaseLayout from "@components/BaseLayout"
import Contact from "@components/Contact"
import contactContent from "@constants/contact"
import Seo from "@components/Seo"
import React from "react"
import { Flex } from "rebass"
import { WidthLimitation } from "@components/Content"

function ContactPage() {
  return (
    <BaseLayout>
      <Seo title="Contact" />
      <Flex width="100vw" minHeight="98vh">
        <WidthLimitation marginY="5" marginX="auto">
          <Flex
            as="section"
            flexWrap="wrap"
            justifyContent="space-between"
            padding="3"
            width="100%"
            alignItems="center"
          >
            <Contact contactContent={contactContent} />
          </Flex>
        </WidthLimitation>
      </Flex>
    </BaseLayout>
  )
}

export default ContactPage
