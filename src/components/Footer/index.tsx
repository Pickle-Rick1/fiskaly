import React from 'react'
import { BaseComponentProps } from '@/types';

import './Footer.styles.css';

export const Footer: React.FC<BaseComponentProps> = () => {
    return (
      <footer className="text-center py-8">
          <p>Copyright 2021 <span>Fiskaly.</span></p>
      </footer>
    )
}
