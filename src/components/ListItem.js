import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Fade from "react-reveal/Fade"

const ListItem = ({ node }) => {
  return (
    <div key={node.id}>
      <Fade>
        <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        {node.featured_media ? (
          <img
            src={node.featured_media.source_url}
            alt={node.featured_media.alt_text}
          />
        ) : (
          ""
        )}
        <Link to={node.path}>Read more</Link>
      </Fade>
    </div>
  )
}

export default ListItem
