import { Location } from "history"

export interface ButtonProps {
  type: "button" | "submit" | "reset"
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
  label?: string
  isLarge?: boolean
}

export interface MdxProps {
  colorCode?: string
  colorName?: string
  colorHEX?: string
  colors?: sting[]
}

interface EmptyProps {}

interface ListProps {
  term?: string
  definition?: string
}

interface HeadingsProps {
  text?: string
  itemProp?: string
}

interface ArticleCardProps {
  link?: any
  title?: string
  order?: number
  description?: any
  tags?: keyof JSX.IntrinsicElements | string
  date?: string
}

interface PageProps {
  data: {
    mdx: INode
    previous: INode
    next: INode
    tag: INode
    slug: INode
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

interface ITag {
  tags?: keyof JSX.IntrinsicElements | string
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
