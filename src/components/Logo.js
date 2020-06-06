import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { node } from "prop-types"

const Logo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpMedia {
          edges {
            node {
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
            <Link to="/">
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
