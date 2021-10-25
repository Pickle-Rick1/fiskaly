import React from 'react';
import { BaseComponentProps } from '@/types';

import './Container.styles.css';

export const Container: React.FC<BaseComponentProps> = ({ children, classNames }) => {
  return (
    <div className={'stack ' + classNames}>
      <div>{children}</div>
    </div>
  );
};
