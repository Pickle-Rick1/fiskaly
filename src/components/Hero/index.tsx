import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { EmptyProps } from "@/definitions"
import { Container, DefinitionList, CalloutHeading } from "@/components"

const Globe = React.lazy(() => import("../Globe"))

import "./Hero.styles.css"

export const Hero: React.FC<EmptyProps> = () => {
  const isSSR = typeof window === "undefined"

  return (
    <StaticQuery
      query={graphql`
        query ArticlesQuery {
          allMdx {
            totalCount
          }
          currentBuildDate {
            currentDate
          }
        }
      `}
      render={data => (
        <Container>
          <div className="flex max-w-full overflow-hidden">
            <section>
              <CalloutHeading itemProp="headline" text="Design System" />
              <p className="lead">
                Our{" "}
                <strong>
                  <em>Design System</em>
                </strong>{" "}
                helps us work together to build a great experience for all of
                Fiskaly’s devs. These areas of design are the foundations on
                which the Fiskaly Brand is built. Our aim is to create
                consistent and delightful user experiences across all platforms.
              </p>
              <div className="kpiList">
                <DefinitionList
                  term="Last update"
                  definition={data.currentBuildDate.currentDate}
                />
                <DefinitionList
                  term="Articles"
                  definition={data.allMdx.totalCount}
                />
              </div>
            </section>
            <section className="max-w-sm lg:max-w-screen-sm hidden md:block">
              {!isSSR && (
                <React.Suspense fallback={<div />}>
                  <Globe />
                </React.Suspense>
              )}
            </section>
          </div>
        </Container>
      )}
    />
  )
}
