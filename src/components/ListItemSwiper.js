import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const ListItemSwiper = ({ node }) => {
  return (
    <div key={node.id}>
      {data.acf.before_image && data.acf.after_image ? (
        <Swiper
          before_image={data.acf.before_image}
          after_image={data.acf.after_image}
        />
      ) : data.acf.general_image ? (
        <img src={data.acf.general_image.source_url} />
      ) : (
        ""
      )}
      <h3 dangerouslySetInnerHTML={{ __html: data.acf.client_name }} />
      <div dangerouslySetInnerHTML={{ __html: data.acf.testimonial_quote }} />
    </div>
  )
}

export default ListItemSwiper
