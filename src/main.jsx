import { createRoot } from 'react-dom/client'
import { Layout } from './components'
import { AppRouter } from './router/AppRouter'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </LanguageProvider>
)