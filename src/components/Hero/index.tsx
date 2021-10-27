import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { EmptyProps } from "@/definitions"
import { Container, DefinitionList, PageHeading } from "@/components"

import "./Hero.styles.css"

export const Hero: React.FC<EmptyProps> = () => {
  return (
    <StaticQuery
      query={graphql`
        query ArticlesQuery {
          allMdx {
            totalCount
          }
        }
      `}
      render={data => (
        <Container classNames="">
          <section className="">
            <PageHeading itemProp="headline" text="Bold Fiskaly Design" />
            <p className="lead">
              Our design system{" "}
              <strong>
                <em>Bold</em>
              </strong>{" "}
              helps us work together to build a great experience for all of
              Fiskaly’s devs. These areas of design are the foundations on which
              the Fiskaly Brand is built. Our aim is to create consistent and
              delightful user experiences across all platforms.
            </p>
            <div className="kpiList">
              <DefinitionList term="Last update" definition="October 2021" />
              <DefinitionList term="Articles" definition={data.allMdx.totalCount} />
            </div>
          </section>
        </Container>
      )}
    />
  )
}
