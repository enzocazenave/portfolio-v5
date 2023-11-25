import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const VALID_ROUTES = ['ufo', 'upbrands', 'freelance', 'inmunesrp']

export const ExperiencesPage = () => {
  const navigate = useNavigate()
  const { experience }  = useParams()

  useEffect(() => {
    if (!VALID_ROUTES.includes(experience)) navigate('/404')
  }, [])


  return (
    <div>
      { experience }
    </div>
  )
}