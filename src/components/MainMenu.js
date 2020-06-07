import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressMenusMenusItems {
          edges {
            node {
              items {
                title
                slug
                url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div className="menu-items">
        {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
          <Link to={item.slug !== null ? item.slug : item.url} key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
    )}
  />
)

export default MainMenu
