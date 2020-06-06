import React from "react"
import { graphql, StaticQuery } from "gatsby"

const SiteInfo = ({ extraData }) => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <div className="site-info">
        <h1>{props.allWordpressSiteMetadata.edges[0].node.name}</h1>
        <p>{props.allWordpressSiteMetadata.edges[0].node.description}</p>
        {extraData.homepage_about_me_point_one ? (
          <p>{extraData.homepage_about_me_point_one}</p>
        ) : (
          ""
        )}
        {extraData.homepage_about_me_point_two ? (
          <p>{extraData.homepage_about_me_point_two}</p>
        ) : (
          ""
        )}
        {extraData.homepage_about_me_point_three ? (
          <p>{extraData.homepage_about_me_point_three}</p>
        ) : (
          ""
        )}
        {extraData.homepage_about_me_point_four ? (
          <p>{extraData.homepage_about_me_point_four}</p>
        ) : (
          ""
        )}
      </div>
    )}
  />
)

export default SiteInfo
