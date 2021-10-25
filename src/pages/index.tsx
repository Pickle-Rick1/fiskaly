import * as React from "react"
import { Link, graphql } from "gatsby"
import { INode, PageProps } from "@/definitions"
import { Layout, Container, Hero, Seo } from "@/components"

const Home: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Hero />
        <p>No blog posts found. Add markdown posts to "content/articles".</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All articles" />
      <Hero />
      <Container>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <h2 className="my-8">Brand</h2>
            <ol className="flex">
              <li className="bg-skin-primary border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
              <li className="bg-skin-secondary border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
            </ol>
          </div>
          <div>
            <h2 className="my-8">Backgrounds</h2>
            <ol className="flex">
              <li className="bg-skin-base border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
              <li className="bg-skin-base-muted border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
              <li className="bg-skin-focus border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2">
                <span className="text-fg-focus text-xs">Focus</span>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="my-8">Text</h2>
            <ol className="flex">
              <li className="bg-skin-fg border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
              <li className="bg-skin-fg-muted border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
            </ol>
          </div>
        </section>
        <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 -mx-4">
          {posts.map(({ node }: { node: INode }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li key={node.fields.slug} className="p-4 rounded border border-transparent hover:border-fg transition-all">
                <article itemScope itemType="http://schema.org/Article">
                  <header>
                    <small className="font-mono text-sm">
                      {node.frontmatter.date}
                    </small>
                    <h2 className="text-3xl font-display mt-3 text-brand">
                      <Link
                        to={node.fields.slug}
                        itemProp="url"
                        className="focus:bg-skin-focus focus:text-skin-fg-focus focus:outline-none"
                      >
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                  </header>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt || node.frontmatter.description,
                    }}
                    itemProp="description"
                    className="text-lg font-yrsa text-skin-fg mt-3"
                  />
                  <section className="md:text-sm space-x-2 mt-3">
                    {(node.frontmatter.tags || "")
                      .split(",")
                      .map((s: string) => s.trim())
                      .map((s: string) => (
                        <span key={s}>{`#${s}`}</span>
                      ))}
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </Container>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
