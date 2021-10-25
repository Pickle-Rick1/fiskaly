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
        <h2 className="my-8">Articles</h2>
        <ol className="sm:grid md:grid-cols-2 gap-4 -mx-4">
          {posts.map(({ node }: { node: INode }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li
                key={node.fields.slug}
                className="border border-skin-base-muted group hover:bg-skin-base-muted transition-all p-4"
                >
                <article itemScope itemType="http://schema.org/Article">
                  <header>
                    <small className="font-mono text-sm text-skin-fg-muted">
                      {node.frontmatter.date}
                    </small>
                    <h2 className="text-3xl font-display mt-3 text-skin-primary group-hover:underline group-hover:text-skin-fg">
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
                  <section className="md:text-sm space-x-2 mt-3 text-skin-fg-muted">
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
