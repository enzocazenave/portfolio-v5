import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ExperiencesPage, HomePage, NotFoundPage, ProjectsPage } from '../pages'
import { Layout, Navbar, ScrollToTop } from '../components'

const ROUTES = [
  { path: '/', element: <HomePage /> },
  { path: '/experiences/:experience', element: <ExperiencesPage /> },
  { path: '/projects/:project', element: <ProjectsPage /> },
  { path: '/*', element: <NotFoundPage /> }
]

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      
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