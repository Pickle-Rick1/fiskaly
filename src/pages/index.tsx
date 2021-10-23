import React from 'react';
import { BaseComponentProps } from '@/types';
import { Layout, Hero } from '@/components';

const Home: React.FC<BaseComponentProps> = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
