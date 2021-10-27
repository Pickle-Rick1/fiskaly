import React from "react"
import { HeadingsProps } from "@/definitions"

export const PageHeading: React.FC<HeadingsProps> = ({ text }) => {
  return (
    <h1 className="h1 capitalize pt-16">
      {text}
      <span className="period">.</span>
    </h1>
  )
}
