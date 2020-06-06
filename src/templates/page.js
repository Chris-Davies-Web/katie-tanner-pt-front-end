import React from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    {pageContext.featured_media ? (
      <img src={pageContext.featured_media.source_url} alt="Biography Image" />
    ) : (
      ""
    )}
  </Layout>
)
