import React, { Fragment } from "react"
// Constants
import homeContent from "@constants/home"
// Component
import Contact from "@components/Contact"
import Cover from "@components/Cover"
// Style
import { Section } from "./Home.styles"

const Home = () => {
  return (
    <Fragment>
      <Section>
        <Cover coverContent={homeContent.cover} />
      </Section>
      <Section>
        <Contact contactContent={homeContent.contact}/>
      </Section>
    </Fragment>
  )
}

export default Home
