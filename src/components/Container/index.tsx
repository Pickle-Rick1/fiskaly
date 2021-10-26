import React from "react"
import { EmptyProps } from "@/definitions"

import "./Container.styles.css"

export const Container: React.FC<EmptyProps> = ({ children, classNames }) => {
  return (
    <div className={"stack " + classNames}>
      <div>{children}</div>
    </div>
  )
}
