import React from 'react';
import { BaseComponentProps } from '@/types';
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Header, Footer, ThemeToggle } from '@/components';

export const Layout: React.FC<BaseComponentProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
