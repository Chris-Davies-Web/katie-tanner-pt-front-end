import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Testimonial from "./Testimonial"
import "../components/testimonial.scss"

const TestimonialWrapper = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpTestimonial(limit: 4) {
            edges {
              node {
                acf {
                  testimonial_quote
                  client_name
                  before_image {
                    id
                    source_url
                    alt_text
                  }
                  after_image {
                    id
                    source_url
                    alt_text
                  }
                  general_image {
                    id
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
        <div className="testimonial-container">
          <h2>What my clients say...</h2>
          <div className="testimonial-wrapper">
            {props.allWordpressWpTestimonial.edges.map(testimonial => (
              <Testimonial data={testimonial.node} key={testimonial.node.id} />
            ))}
          </div>
        </div>
      )}
    />
  )
}

export default TestimonialWrapper
