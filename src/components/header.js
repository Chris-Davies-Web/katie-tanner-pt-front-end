import React, { useEffect, useState } from "react"
import Logo from "./Logo"
import "./header.scss"
import MainMenu from "./MainMenu"
import BurgerMenu from "./BurgerMenu"

const Header = () => {
  const [headerFixed, setheaderFixed] = useState(false)
  useEffect(() => {
    const onScroll = e => {
      window.scrollY > 0 ? setheaderFixed(true) : setheaderFixed(false)
    }
    window.addEventListener("scroll", onScroll)
  })
  return (
    <header className={headerFixed ? "fixed" : ""}>
      <div className="header-items">
        <BurgerMenu />
        <Logo />
        <MainMenu />
      </div>
    </header>
  )
}

export default Header
