import React from "react"
import "./global.scss"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </div>
)

export default Layout
