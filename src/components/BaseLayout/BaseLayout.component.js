import "@styles/reset.css"
import React from "react"
import { ToastContainer } from "react-toastify"
import * as Styles from "./BaseLayout.styles"
import Footer from "./Footer"
import Header from "./Header"

function BaseLayout({ children, hero }) {
  return (
    <Styles.Wrapper>
      <Header />
      <Styles.ContentWrapper>
        {hero}
        {children}
      </Styles.ContentWrapper>
      <Footer />
      <ToastContainer />
    </Styles.Wrapper>
  )
}

export default BaseLayout
