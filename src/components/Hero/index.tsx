import React from "react"
import { EmptyProps } from "@/definitions"
import { ChevronRightIcon } from "@heroicons/react/solid"
import { Container } from "@/components"

export const Hero: React.FC<EmptyProps> = () => {
  return (
    <Container classNames="">
      <section className="py-16">
        <a
          href="#/"
          className="inline-flex items-center bg-skin-base-muted rounded-full p-1 pr-2"
        >
          <span className="px-3 py-0.5 text-xs font-semibold text-black leading-5 uppercase tracking-wide bg-skin-primary rounded-full">
            We're hiring
          </span>
          <span className="ml-4 text-sm">Visit our careers page</span>
          <ChevronRightIcon
            className="ml-2 w-5 h-5 opacity-40"
            aria-hidden="true"
          />
        </a>
        <h1 className="h1">
          In Design We Trust<span className="text-skin-primary">.</span>
        </h1>
        <p className="sm:text-lg lg:text-2xl max-w-screen-md">
          These areas of design are the foundations on which the Fiskaly Brand
          is built. Our aim is to create consistent and delightful user
          experiences across all platforms.
        </p>
        <dl className="font-mono mt-8">
          <dt className="text-sm">Last update</dt>
          <dd className="text-lg">October 2021</dd>
        </dl>
      </section>
    </Container>
  )
}
