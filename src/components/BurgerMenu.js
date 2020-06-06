import { Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import SiteInfo from "./SiteInfo"
import Logo from "./Logo"
import "./header.scss"
import MainMenu from "./MainMenu"
import Burger from "@animated-burgers/burger-arrow"
import "@animated-burgers/burger-arrow/dist/styles.css"

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuItems = useStaticQuery(graphql`
    {
      allWordpressMenusMenusItems {
        edges {
          node {
            items {
              title
              slug
              url
            }
          }
        }
      }
    }
  `)
  return (
    <div className="mobile-menu">
      <Burger
        className="burger burger-arrow"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
        isOpen={menuOpen}
      />
      <div
        className={menuOpen ? "open mobile-menu-items" : "mobile-menu-items"}
      >
        {menuItems.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
          <Link to={item.url} key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BurgerMenu
