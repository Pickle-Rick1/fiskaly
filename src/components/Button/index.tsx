import React from "react"
import { ButtonProps } from "@/definitions"

export type Ref = HTMLButtonElement

export const Button = React.forwardRef<Ref, ButtonProps>((props, ref) => (
  <button ref={ref} className="MyCustomButtonClass" type={props.type}>
    {props.children}
  </button>
))
