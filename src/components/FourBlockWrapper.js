import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import FourBlock from "./FourBlock"

const FourBlockWrapper = props => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpNutrition(limit: 4) {
        edges {
          node {
            id
            title
            content
            slug
            path
            featured_media {
              source_url
            }
          }
        }
      }
      allWordpressWpWorkout(limit: 4) {
        edges {
          node {
            id
            title
            content
            slug
            path
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `)

  return props.category == "Nutrition" ? (
    <div>
      <FourBlock
        header="Latest Recipes"
        data={data.allWordpressWpNutrition.edges}
      />
    </div>
  ) : (
    <div>
      <FourBlock
        header="Latest Workouts"
        data={data.allWordpressWpWorkout.edges}
      />
    </div>
  )
}

export default FourBlockWrapper
