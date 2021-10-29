import * as React from "react"
import { graphql, Link } from "gatsby"

import { Layout, CalloutHeading, Seo, Container } from "@/components"
import { PageProps } from "@/definitions"

const NotFoundPage: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Container>
        <section className="">
          <CalloutHeading text="Sorry" />
          <p className="my-8 text-xl">
            The content you are looking for could not be found.
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
