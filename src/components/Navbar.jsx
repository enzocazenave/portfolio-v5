import { useContext } from "react";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  const { theme, setTheme } = useContext(ThemeContext)

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const handleChangeLanguage = () => {
    setLanguage(prevLanguage => {
      const current = prevLanguage === 'ES' ? 'EN' : 'ES'
      window.localStorage.setItem('language', current)
      return current
    })
  }

  return (
    <header className="relative md:sticky top-0 z-20 bg-white dark:bg-[#111] animate-in">
      <nav className="px-4 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-end">
        <ul className="animated-list flex gap-4">
          <li className="flex transition-opacity">
            <button className="text-primary dark:text-primaryDark" onClick={handleChangeLanguage}>{ language === 'ES' ? 'EN' : 'ES' }</button>
          </li>
          <li className="flex transition-opacity">
            <button className="text-primary dark:text-primaryDark" onClick={handleChangeTheme}>{ theme === 'light' ? <IoMoonOutline /> : <GoSun /> }</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}