import React from "react"
import { Link } from "gatsby"
import { EmptyProps } from "@/definitions"

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
          <Link className="navLink" to="/tag/content">
            Content
          </Link>
        </li>
        <li className="navElem">
          <Link className="navLink" to="/tag/design">
            Design
          </Link>
        </li>
        <li className="navElem">
          <Link className="navLink" to="/docs">
            Docs
          </Link>
        </li>
      </ul>
    </nav>
  )
}
