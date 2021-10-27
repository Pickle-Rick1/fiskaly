import * as React from "react"
import { graphql, Link } from "gatsby"

import { Layout, PageHeading, Seo, Container } from "@/components"
import { PageProps } from "@/definitions"

const NotFoundPage: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Container classNames="text-center">
        <section className="py-16">
          <PageHeading text="Sorry, Not Found" />
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
