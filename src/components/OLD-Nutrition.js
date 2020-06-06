import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const NutritionItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpNutrition {
            edges {
              node {
                id
                title
                content
                slug
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props =>
        props.allWordpressWpNutrition.edges.map(nutrition => (
          <div key={nutrition.node.id}>
            <h2>{nutrition.node.title}</h2>
            <img
              src={nutrition.node.featured_media.source_url}
              alt="Thumbnail"
            />
            <div dangerouslySetInnerHTML={{ __html: nutrition.node.excerpt }} />
            <Link to={`/nutrition/${nutrition.node.slug}`}>Read More</Link>
          </div>
        ))
      }
    />
  )
}

export default NutritionItems
