import React, { ReactNode } from "react"
import { Location } from "history"
import { Header, Footer } from "@/components"

interface LayoutProps {
  location: Location
  title: string
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
