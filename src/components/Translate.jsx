import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import { translations } from "../data/translations"

export const Translate = ({ text }) => {
  const { language } = useContext(LanguageContext)
  return translations[language][text]
}