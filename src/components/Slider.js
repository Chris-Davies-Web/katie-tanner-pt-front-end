import React from "react"
import { graphql, useStaticQuery, StaticQuery, Link } from "gatsby"
// JSX
import HeroSlider, { Slide, SideNav, Nav, OverlayContainer } from "hero-slider"

const Slider = () => (
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
      <HeroSlider
        slidingAnimation="top_to_bottom"
        orientation="vertical"
        initialSlide={1}
        style={{
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 8000,
          height: "80vh",
        }}
      >
        <Slide
          shouldRenderMask
          navDescription="Captain America"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#8A8A8A",
            backgroundImage:
              props.allWordpressPage.edges[0].node.acf.background_image_one
                .source_url,
          }}
        />
        <Slide
          shouldRenderMask
          navDescription="Iron Man"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#EA2329",
            backgroundImage:
              props.allWordpressPage.edges[0].node.acf.background_image_two
                .source_url,
          }}
        />
        <Slide
          shouldRenderMask
          navDescription="Thor"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#2D7791",
            backgroundImage:
              props.allWordpressPage.edges[0].node.acf.background_image_three
                .source_url,
          }}
        />
        />
      </HeroSlider>
    )}
  />
)

export default Slider
