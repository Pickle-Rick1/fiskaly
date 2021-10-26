import React from "react"
import { EmptyProps } from "@/definitions"

import "./Footer.styles.css"

export const Footer: React.FC<EmptyProps> = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        Copyright {new Date().getFullYear()} <span>Fiskaly GmbH</span>
      </p>
    </footer>
  )
}
