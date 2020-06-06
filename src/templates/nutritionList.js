import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import List from "./list"

export default ({ pageContext }) => (
  <Layout>
    <h1>All Nutrition</h1>
    <List pageContext={pageContext} path="/nutrition/" />
  </Layout>
)
