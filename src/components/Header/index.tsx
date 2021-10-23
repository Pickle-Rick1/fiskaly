import React from 'react';
import { BaseComponentProps } from '@/types';
import { Logo, Nav } from '@/components';

import './Header.styles.css';

export const Header: React.FC<BaseComponentProps> = () => {
  return (
    <div className="headerWrapper">
      <header className="header">
        <div className="header__left">
          <div className="brand">
            <Logo />
          </div>
          <Nav />
        </div>
        <div className="header__right">
          <a
            href="https://github.com/zeitvertrieb/fiskaly"
            title="Go to GitHub Repositiory"
            target="_blank"
          >
            Github
          </a>
        </div>
      </header>
    </div>
  );
};
