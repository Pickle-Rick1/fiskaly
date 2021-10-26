import React from "react"
import { EmptyProps } from "@/definitions"
import { Link } from "gatsby"

import "./Nav.styles.css"

export const Nav: React.FC<EmptyProps> = () => {
  return (
    <nav className="nav">
      <ul className="">
        <li className="navElem">
          <Link className="navLink" to="/">
            Explore
          </Link>
        </li>
        <li className="navElem">
          <Link className="navLink" to="/content">
            Content
          </Link>
        </li>
        <li className="navElem">
          <Link className="navLink" to="/design">
            Design
          </Link>
        </li>
      </ul>
    </nav>
  )
}
