import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import "./fourBlock.scss"

const FourBlock = ({ header, data }) => (
  <div className="four-block">
    <h2 dangerouslySetInnerHTML={{ __html: header }} />
    <div className="block-containers">
      {data.map(item => (
        <div key={item.node.id} className="block-container">
          {item.node.title ? (
            <h3 dangerouslySetInnerHTML={{ __html: item.node.title }} />
          ) : (
            ""
          )}
          {item.node.featured_media ? (
            <div className="image-container">
              <img src={item.node.featured_media.source_url} alt="Thumbnail" />
            </div>
          ) : (
            ""
          )}
          <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
          <Link to={`/${item.node.path}`}>Read More</Link>
        </div>
      ))}
    </div>
  </div>
)

export default FourBlock
