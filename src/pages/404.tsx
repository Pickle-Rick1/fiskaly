import * as React from "react"
import { graphql, Link } from "gatsby"

import { Layout, Seo, Container } from "@/components"
import { PageProps } from "@/definitions"

const NotFoundPage: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Container classNames="text-center">
        <section className="py-16">
          <h1>
            Sorry, Not Found<span className="ml-1 text-skin-primary">.</span>
          </h1>
          <p className="my-8 text-xl">
            You just hit a route that doesn’t exist... the sadness.
          </p>
          <Link className="text-xl" to="/">
            Back Home
          </Link>
        </section>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
