import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import ListItem from "../components/ListItem"
import Testimonial from "../components/Testimonial"
import "./list.scss"

export default ({ pageContext, path, listItem }) => (
  <div className="list">
    {pageContext.posts.map(post => (
      <div key={post.node.id}>
        {listItem === "testimonial" ? (
          <Testimonial data={post.node} />
        ) : (
          <ListItem node={post.node} />
        )}
      </div>
    ))}
    {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
      <div
        key={index}
        className={index + 1 === pageContext.currentPage ? "active" : ""}
      >
        <Link to={index === 0 ? path : path + (index + 1)}>{index + 1}</Link>
      </div>
    ))}
  </div>
)
