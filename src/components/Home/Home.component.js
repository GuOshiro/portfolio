import React, { Fragment } from "react"
// Constants
import homeContent from "@constants/home"
// Component
import Contact from "@components/Contact"
import Cover from "@components/Cover"
import HomePortfolio from "@components/HomePortfolio"
// Style
import { Section } from "./Home.styles"

const Home = () => {
  return (
    <Fragment>
      <Section sx={{ mt: ["0", "10%"] }}>
        <Cover coverContent={homeContent.cover} />
      </Section>
      <Section>
        <HomePortfolio />
      </Section>
      <Section>
        <Contact contactContent={homeContent.contact} />
      </Section>
    </Fragment>
  )
}

export default Home
