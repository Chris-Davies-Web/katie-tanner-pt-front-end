/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./global.scss"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </div>
)

export default Layout
