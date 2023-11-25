import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Experiences, HomePage, NotFoundPage } from '../pages'
import { Layout, Navbar } from '../components'

const ROUTES = [
  { path: '/', element: <HomePage /> },
  { path: '/:experience', element: <Experiences /> },
  { path: '/*', element: <NotFoundPage /> }
]

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      
      <Layout>
        <Routes>
          {ROUTES.map((route, index) => (
            <Route key={index} path={ route.path } element={ route.element } />
          ))}
        </Routes>
      </Layout>
    </Router>
  )
}