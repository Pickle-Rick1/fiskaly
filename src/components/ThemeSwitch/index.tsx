import React, { useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/outline"
import { EmptyProps } from "@/definitions"
import { getTheme, setDarkMode, setLightMode } from "@/utils/fns"

export const ThemeSwitch: React.FC<EmptyProps> = () => {
  const [isDark, toggleDark] = useState(getTheme() === "dark")
  const changeTheme = () => {
    toggleDark(!isDark)
    if (isDark) {
      setLightMode()
    } else {
      setDarkMode()
    }
  }
  return (
    <button
      type="button"
      className="rounded-md p-2 inline-flex items-center justify-center text-skin-header-fg border border-opacity-0 hover:border-opacity-100 transition-all"
      onClick={changeTheme}
    >
      {isDark ? (
        <>
          <SunIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <MoonIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </button>
  )
}
