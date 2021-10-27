import { Location } from "history"

export interface ButtonProps {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
  label?: string
  isLarge?: boolean
}

export interface MdxProps {
  colorCode?: string
}

interface EmptyProps {
  classNames?: string
}

interface PageProps {
  data: {
    mdx: INode
    previous: INode
    next: INode
    allMdx: {
      totalCount: INode
      edges: IEdge[]
    }
    site: ISite
  }
  location: Location
}

interface ISite {
  siteMetadata: {
    title: string
    description: string
    author: {
      name: string
      summary: string
    }
    social: {
      twitter: string
      linkedin: string
      github: string
    }
  }
}

interface IEdge {
  node: INode
}

interface INode {
  excerpt: string
  body: string
  fields: {
    slug: string
  }
  frontmatter: {
    order: number
    date: string
    title: string
    tags?: string
    description: string
  }
}