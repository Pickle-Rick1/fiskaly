import React from "react"
import { graphql, Link } from "gatsby"
import { INode, PageProps } from "@/definitions"
import { Layout, Container, Tags, Seo } from "@/components"

const TagPageTemplate: React.FC<PageProps> = ({ data, location, pageContext: { tag, slugs } }) => {
  const posts = data.allMdx.edges
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={` Articles taged with #${tag}`} />
      <Container>
        <h1
          className="font-black text-skin-fg text-4xl md:text-6xl capitalize"
          itemProp="headline"
        >
          {tag}
          <span className="ml-1 text-skin-primary">.</span>
        </h1>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mx-4">
          {posts.map(({ node }: { node: INode }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li
                key={node.fields.slug}
                className="rounded-2xl p-4 group bg-skin-base shadow hover:shadow-light hover:z-10 hover:bg-skin-base-flash transition-all"
              >
                <article
                  itemScope
                  itemType="http://schema.org/Article"
                  className="flex flex-col h-full"
                >
                  <header className="flex space-x-2">
                    <h2 className="text-3xl font-display mt-3 group-hover:text-skin-fg transition-all">
                      <Link
                        to={node.fields.slug}
                        itemProp="url"
                        className="group-hover:text-skin-fg"
                      >
                        <span itemProp="headline">{title}</span>
                      </Link>
                      <span className="opacity-0 group-hover:opacity-100 ml-0.5 text-skin-primary">
                        .
                      </span>
                      <sup className="font-mono text-skin-fg-muted text-sm -top-4">
                        {node.frontmatter.order}
                      </sup>
                    </h2>
                  </header>
                  <section className="flex-1">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description,
                      }}
                      itemProp="description"
                      className="text-lg font-yrsa text-skin-fg mt-3"
                    />
                    <Tags tags={node.frontmatter.tags} />
                  </section>
                  <footer className="flex justify-between font-mono text-xs mt-2 pt-2 border-t border-skin-base-muted mt-2">
                    <span className="text-skin-fg-muted">
                      {node.frontmatter.date}
                    </span>
                    <Link to={node.fields.slug} itemProp="url" className="">
                      <span>Read</span>
                    </Link>
                  </footer>
                </article>
              </li>
            )
          })}
        </ol>

      </Container>
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query ($slugs: [String]) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: { slug: { in: $slugs } }
    ) {
      edges {
        node {
          frontmatter {
            order
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`