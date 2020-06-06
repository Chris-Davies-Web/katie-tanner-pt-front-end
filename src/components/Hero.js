import React from "react"
import { graphql, useStaticQuery, StaticQuery, Link } from "gatsby"
import SiteInfo from "./SiteInfo"
import "./hero.scss"
import Slider from "./Slider"

const Hero = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPage {
          edges {
            node {
              acf {
                homepage_about_me_point_one
                homepage_about_me_point_two
                homepage_about_me_point_three
                homepage_about_me_point_four
                background_image_one {
                  id
                  source_url
                  slug
                  path
                }
                background_image_two {
                  id
                  source_url
                  slug
                  path
                }
                background_image_three {
                  id
                  source_url
                  slug
                  path
                }
              }
              slug
              featured_media {
                id
                source_url
                slug
                path
                media_details {
                  width
                  height
                  file
                  original_image
                }
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div className="hero">
        {props.allWordpressPage.edges.map(edge =>
          edge.node.slug == "home" ? (
            <div>
              <SiteInfo extraData={edge.node.acf} />
              <Slider />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    )}
  />
)

export default Hero
