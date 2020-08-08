import React, { Fragment } from "react"
import { Element } from "react-scroll"
// Constants
import homeContent from "@constants/home"
import menuItems from "@constants/menu"
// Component
import Contact from "@components/Contact"
import Cover from "@components/Cover"
import HomePortfolio from "@components/HomePortfolio"
// Style
import { Section } from "./Home.styles"

const Home = () => {
  return (
    <Fragment>
      <Element name={menuItems.pages[0].id}>
        <Section mt={["0", "10%"]}>
          <Cover coverContent={homeContent.cover} />
        </Section>
      </Element>
      <Element name={menuItems.pages[1].id}>
        <Section>
          <HomePortfolio />
        </Section>
      </Element>
      <Element name={menuItems.pages[3].id}>
        <Section>
          <Contact />
        </Section>
      </Element>
    </Fragment>
  )
}

export default Home
