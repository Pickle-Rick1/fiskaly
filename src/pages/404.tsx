import React from 'react';
import { PageProps } from 'gatsby';
import { Link } from 'gatsby';

const NotFound: React.FC<PageProps> = () => (
  <main>
    <p>Sorry, page not found!</p>
    <Link to="/">Go home</Link>
  </main>
);

export default NotFound;
