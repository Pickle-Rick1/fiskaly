import * as React from "react"
import { graphql } from "gatsby"
import { INode, PageProps } from "@/definitions"
import { Layout, ArticleCard, Container, Hero, Seo } from "@/components"

const Home: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Explore the Fiskaly Design System" />
        <Hero />
        <p>No blog posts found. Add markdown posts to "content/articles".</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Explore the Fiskaly Design System" />
      <Hero />
      <Container>
        <h2 className="my-8 pt-8">Articles</h2>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mx-4">
          {posts.map(({ node }: { node: INode }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li key={node.fields.slug} className="group">
                <ArticleCard
                  link={node.fields.slug}
                  title={title}
                  order={node.frontmatter.order}
                  description={node.frontmatter.description}
                  tags={node.frontmatter.tags}
                  date={node.frontmatter.date}
                />
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
    allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            order
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
