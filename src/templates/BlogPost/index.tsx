import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout, Container, Seo } from "@/components"
import { PageProps } from "@/definitions"

import "./BlogPost.styles.css"

const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container>
        <article
          className="article"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="col-start-1 grid grid-cols-blog">
            <h1
              className="font-black text-skin-fg text-4xl md:text-6xl"
              itemProp="headline"
            >
              {post.frontmatter.title}
              <span className="ml-1 text-skin-primary">.</span>
            </h1>
            <div className="col-start-1">
              <dl className="font-mono mt-8 text-skin-fg-muted">
                <dt className="text-sm">Last update</dt>
                <dd className="text-lg">{post.frontmatter.date}</dd>
              </dl>
            </div>
          </header>
          <section
            itemProp="articleBody"
            className="prose prose-xl mt-8 mx-auto"
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
        <nav className="mt-8 pt-16 grid grid-cols-blog border-t border-skin-base-muted">
          <ul className="col-start-2 text-lg flex flex-wrap justify-between">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev" className="py-2">
                  ← <span>{previous.frontmatter.order}.</span>{" "}
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next" className="py-2">
                  <span>{next.frontmatter.order}.</span>{" "}
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        order
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        order
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        order
      }
    }
  }
`
