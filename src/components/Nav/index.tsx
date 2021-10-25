import React from "react"
import { EmptyProps } from "@/definitions"
import { Link } from "gatsby"

import "./Nav.styles.css"

export const Nav: React.FC<EmptyProps> = () => {
  return (
    <nav className="nav">
      <ul className="flex">
        <li className="">
          <Link className="navLink" to="/">Explore</Link>
        </li>
        <li className="">
          <Link className="navLink" to="/colors">Colors</Link>
        </li>
      </ul>
    </nav>
  )
}
