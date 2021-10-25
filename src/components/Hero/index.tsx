import React from "react"
import { EmptyProps } from "@/definitions"
import { Container } from "@/components"

export const Hero: React.FC<EmptyProps> = () => {
  return (
    <Container classNames="">
      <section className="py-16">
        <h1 className="h1">
          In Design We Trust<span className="text-skin-primary">.</span>
        </h1>
        <p className="sm:text-lg lg:text-2xl max-w-screen-md">
          These areas of design are the foundations on which the Fiskaly Brand
          is built. Our aim is to create consistent and delightful user
          experiences across all platforms.
        </p>
        <div className="grid grid-cols-6">
          <dl className="font-mono mt-8 text-skin-fg-muted">
            <dt className="text-sm">Last update</dt>
            <dd className="text-lg">October 2021</dd>
          </dl>
          <dl className="font-mono mt-8 text-skin-fg-muted">
            <dt className="text-sm">Articles</dt>
            <dd className="text-lg">2</dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}
