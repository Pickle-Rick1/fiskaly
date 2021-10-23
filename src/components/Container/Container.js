import React from 'react'

import './Container.styles.css'

export const Container = ({children, classNames}) => {
    return (
        <div className={"stack " + classNames}>
          <div>{children}</div>
        </div>
    )
}
