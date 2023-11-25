import { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext({})

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(window.localStorage.getItem('language') || 'ES')

  return (
    <LanguageContext.Provider 
      value={{
        setLanguage,
        language
      }}
    >
      { children }
    </LanguageContext.Provider>
  )
}