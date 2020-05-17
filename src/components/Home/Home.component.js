import React, { Fragment } from "react"
// Constants
import homeContent from "@constants/home"
// Component
import Cover from "@components/Cover"
// Style
import { Section } from "./Home.styles"

const Home = () => {
  return (
    <Fragment>
      <Section>
        <Cover coverContent={homeContent.cover} />
      </Section>
    </Fragment>
  )
}

export default Home
