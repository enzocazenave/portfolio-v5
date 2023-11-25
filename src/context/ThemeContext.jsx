import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light')

  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('body').classList.remove('bg-[#111]')
      document.querySelector('html').classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    } else {
      document.querySelector('body').classList.add('bg-[#111]')
      document.querySelector('html').classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider 
      value={{
        setTheme,
        theme
      }}
    >
      { children }
    </ThemeContext.Provider>
  )
}