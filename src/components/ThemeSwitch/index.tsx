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
      className="transition duration-500 ease-in-out rounded-full cursor-pointer h-6 w-6 rounded-full focus:outline-none focus:ring-2 focus:ring-skin-focus focus:bg-skin-focus focus:text-skin-fg-focus"
      onClick={changeTheme}
    >
      {isDark ? (
        <SunIcon className="text-2xl cursor-pointer" />
      ) : (
        <MoonIcon className="text-2xl cursor-pointer" />
      )}
    </button>
  )
}
