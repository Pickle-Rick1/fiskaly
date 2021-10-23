import React from "react"
import { Link } from "gatsby"

import './Nav.styles.css'

export default function Nav():JSX.Element {
    return (
      <nav className="nav">
          <ul className="flex">
              <li className=""><Link to="/">Explore</Link></li>
          </ul>
      </nav>
    )
}
