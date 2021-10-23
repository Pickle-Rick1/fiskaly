import React from 'react';
import { PageProps } from 'gatsby';
import { Blog, Layout, Hero } from '@/components';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <Hero />
    <Blog />
  </Layout>
}

export default Home;
