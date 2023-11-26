import { useNavigate } from "react-router-dom"
import { Translate } from "./Translate"
import { GoArrowUpRight } from "react-icons/go"

const PROJECTS = [
  { title: 'projectStarTrekTitle', description: 'projectStarTrekDescription', year: 2023, tags: ['SQL', 'Express', 'React', 'Node', 'Tailwind'], route: '/projects/star-trek', src: './src/assets/star-trek.png' },
  { title: 'projectAppointmentsTitle', description: 'projectAppointmentsDescription', year: 2023, tags: ['Mongo DB', 'Express', 'React', 'Node', 'Tailwind'], route: '/projects/appointments-manager', src: './src/assets/appointments-manager.jpeg' },
  { title: 'projectTwitterTitle', description: 'projectTwitterDescription', year: 2022, tags: ['Mongo DB', 'Express', 'React', 'Node', 'CSS'], route: '/projects/twitter-clone', src: './src/assets/twitter.PNG' },
  { title: 'projectLetterSoupTitle', description: 'projectLetterSoupDescription', year: 2022, tags: ['Python'], route: '/projects/alphabet-soup', src: './src/assets/sopa.PNG' },
  { title: 'projectInmunesTitle', description: 'projectInmunesDescription', year: 2020, tags: ['Lua', 'HTML', 'jQuery', 'PHP', 'MySQL', 'CSS'], route: '/projects/inmunes-roleplay', src: './src/assets/inmunes-roleplay.png' }
]

export const Projects = () => {
  const navigate = useNavigate()

  return (
    <div style={{ '--index': 8 }} className="flex flex-col gap-8 animate-in">
      <h2 className="text-secondary font-light dark:text-secondaryDark">
        <Translate text="projectsTitle" />
      </h2>

      <ul className="animated-list flex flex-col gap-8 max-md:gap-16">
        {PROJECTS.map((project, index) => (
          <li 
            className="transition-opacity cursor-pointer"
            key={index}
            onClick={ () => { navigate(project.route) } }
          >
            <figure className="flex gap-6 max-md:flex-col">
              <div className="h-full bg-secondary rounded-lg w-2/5 aspect-video overflow-clip select-none max-md:w-full">
                <img alt="Imagen del proyecto" className="w-full h-full object-cover" src={project.src} />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-primary dark:text-primaryDark font-light"><Translate text={project.title} /> · <span className="text-secondary dark:text-secondary">{project.year}</span></h3>
                  <GoArrowUpRight className="opacity-0 transition-transform delay-50 text-primary dark:text-primaryDark svg-animation" />
                </div>
                <p className="text-terciary dark:text-terciaryDark font-light line-clamp-3">
                  <Translate text={project.description} />
                </p>

                <div className="flex gap-4">
                  { project.tags.map((tag, index) => ( <span key={index} className="text-terciary dark:text-terciaryDark rounded p-1 text-xs dark:bg-primary max-sm:text-[9px]">{tag}</span> )) }
                </div>
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}