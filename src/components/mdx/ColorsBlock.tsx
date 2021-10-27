import React from "react"
import { MdxProps } from "@/definitions"

const Color: React.FC<MdxProps> = ({ children, colorCode }) => {
  return (
    <div
      aria-label={colorCode}
      className="p-8 flex-1 text-center text-sm"
      style={{ backgroundColor: colorCode }}
    >
      {children}
    </div>
  )
}

export const ColorsPrimaryBlock: React.FC<MdxProps> = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color colorCode="var(--color-primary-light)">
        <span className="text-skin-fg-focus">Light</span>
      </Color>
      <Color colorCode="var(--color-primary)">
        <span className="text-skin-fg-focus">Primary</span>
      </Color>
      <Color colorCode="var(--color-primary-dark)">
        <span className="text-skin-fg-focus">Dark</span>
      </Color>
    </div>
  </>
)

export const ColorsShadesBlock: React.FC<MdxProps> = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color colorCode="var(--color-background-flash)">
        <span>Background Flash</span>
      </Color>
      <Color colorCode="var(--color-background)">
        <span>Background Body</span>
      </Color>
      <Color colorCode="var(--color-background-muted)">
        <span>Background Muted</span>
      </Color>
      <Color colorCode="var(--color-focus)">
        <span className="text-skin-fg-focus">Background Focus</span>
      </Color>
      <Color colorCode="var(--color-text)">
        <span className="text-header">Text Base</span>
      </Color>
      <Color colorCode="var(--color-text-muted)">
        <span className="text-header">Text Muted</span>
      </Color>
    </div>
  </>
)

export const ColorsAccentBlock: React.FC<MdxProps> = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color colorCode="var(--color-accent-peach)">
        <span className="text-skin-fg-focus">Peach Accent</span>
      </Color>
      <Color colorCode="var(--color-accent-copper)">
        <span className="text-skin-fg-focus">Copper Accent</span>
      </Color>
      <Color colorCode="var(--color-accent-coral)">
        <span className="text-white">Coral Accent</span>
      </Color>
      <Color colorCode="var(--color-accent-blue)">
        <span className="text-skin-fg-focus">Blue Accent</span>
      </Color>
    </div>
  </>
)
