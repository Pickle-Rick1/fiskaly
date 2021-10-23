import React from 'react'
import { Logo, Nav } from '../'

import './Header.styles.css'

export const Header = () => {
    return (
      <div className="headerWrapper">
        <header className="header">
          <div className="header__left">
            <div className="brand">
              <Logo/>
            </div>
            <Nav/>
          </div>
          <div className="header__right">
            Github
          </div>
        </header>
      </div>
    )
}
