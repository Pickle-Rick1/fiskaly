import React, { ReactNode } from "react"
import { Location } from "history"
import { Header, Footer } from "@/components"

interface LayoutProps {
  location: Location
  title: string
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
