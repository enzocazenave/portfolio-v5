import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const VALID_ROUTES = ['star-trek', 'appointments-manager', 'twitter-clone', 'alphabet-soup']

export const ProjectsPage = () => {
  const navigate = useNavigate()
  const { project }  = useParams()

  useEffect(() => {
    if (!VALID_ROUTES.includes(project)) navigate('/404')
  }, [])


  return (
    <div>
      <span className="text-primary dark:text-primaryDark">{ project }</span>
    </div>
  )
}