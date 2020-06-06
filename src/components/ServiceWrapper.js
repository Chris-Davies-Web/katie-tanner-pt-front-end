import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Service from "./Service"
import "../components/services.scss"

const ServiceWrapper = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpServices(limit: 4) {
            edges {
              node {
                id
                title
                acf {
                  service_name
                  service_summary
                  service_icon
                  service_image {
                    source_url
                    alt_text
                  }
                }
              }
            }
          }
        }
      `}
      render={props => (
        <div class="services-container">
          <h2>What I do</h2>
          <div className="services-wrapper">
            {props.allWordpressWpServices.edges.map(service => (
              <Service data={service.node} key={service.node.id} />
            ))}
          </div>
        </div>
      )}
    />
  )
}

export default ServiceWrapper
