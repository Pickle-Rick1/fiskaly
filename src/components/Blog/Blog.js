import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { BlogItem, Container } from "../"

import './Blog.styles.css'

export const Blog = () => {

    const articles = useStaticQuery(graphql`
    {
        allMarkdownRemark {
        nodes {
            frontmatter {
                title
                tag
                slug
                image {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    }
                }
            }
            html
            }
        }
    }
    `)

    const allArticles = articles.allMarkdownRemark.nodes.map((item, index) => (
        <BlogItem
            key={index}
            image={item.frontmatter.image.childImageSharp.gatsbyImageData}
            slug={item.frontmatter.slug}
            alt={item.frontmatter.title}
            title={item.frontmatter.title}
        />
    ))
    return (
      <Container>
          <section className="py-16">
              <h2>Brand</h2>
              <ol className="list">
                {allArticles}
              </ol>
          </section>
      </Container>
    )
}
