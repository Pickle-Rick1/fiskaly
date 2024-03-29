import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Logo, Nav, Button, ThemeSwitch } from "@/components"
import { EmptyProps } from "@/definitions"

import "./Header.styles.css"

const navigation = {
  links: [
    { name: "Explore", to: "/" },
    { name: "Content", to: "/tag/content" },
    { name: "Design", to: "/tag/design" },
  ],
}

export const Header: React.FC<EmptyProps> = () => {
  const { links } = navigation
  return (
    <Popover className="headerWrapper">
      <header className="header">
        <div className="header__left">
          <Link to="/" className="brand">
            <Logo />
          </Link>
          <div className="hidden md:flex">
            <Nav links={links} />
          </div>
        </div>
        <div className="header__right">
          <ThemeSwitch />
          <Button
            as="externalLink"
            styleType="default"
            href="https://github.com/zeitvertrieb/fiskaly"
          >
            <span className="sr-only">GitHub repository</span>
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </Button>
          <div className="md:hidden">
            <Popover.Button className="btn">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </header>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-skin-header ring-opacity-5 bg-skin-header text-skin-header-fg border">
            <div className="p-4">
              <div className="z-50 flex items-center justify-between">
                <div className="brand">
                  <Logo />
                </div>
                <div className="-mr-2 -mt-2">
                  <Popover.Button className="btn">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-4 space-y-6">
              <Nav links={links} />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
