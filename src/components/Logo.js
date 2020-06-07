import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const Logo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpMedia {
          edges {
            node {
              id
              slug
              source_url
              title
              path
              alt_text
            }
          }
        }
      }
    `}
    render={props => (
      <div className="logo">
        {props.allWordpressWpMedia.edges.map(edge =>
          edge.node.path === "/logo/" ? (
            <Link to="/" key={edge.node.id}>
              <img src={edge.node.source_url} alt={edge.node.alt_text} />
            </Link>
          ) : (
            ""
          )
        )}
      </div>
    )}
  />
)

export default Logo
