import React from 'react';
import { BaseComponentProps } from '@/types';
import { Link } from 'gatsby';

import './Nav.styles.css';

export const Nav: React.FC<BaseComponentProps> = () => {
  return (
    <nav className="nav">
      <ul className="flex">
        <li className="">
          <Link to="/">Explore</Link>
        </li>
      </ul>
    </nav>
  );
};
