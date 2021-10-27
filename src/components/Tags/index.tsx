import React from "react"
import { ITag } from "@/definitions"
import { Link } from "gatsby"

export const Tags: React.FC<ITag> = ({ tags }) => {

  if (!tags) {
    return null
  }
  return (
    <ul className="flex space-x-2 text-sm font-mono my-2">
      {tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0)
        .map(tag => (
          <li key={tag}>
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </li>
        ))}
    </ul>
  )
}
