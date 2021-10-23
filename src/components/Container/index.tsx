import React from 'react';

import './Container.styles.css';

type Props = {
  classNames?: string;
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children, classNames }) => {
  return (
    <div className={'stack ' + classNames}>
      <div>{children}</div>
    </div>
  );
};
