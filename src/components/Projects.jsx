import { Translate } from "./Translate"

const PROJECTS = [
  { title: 'projectStarTrekTitle', description: 'projectStarTrekDescription', year: 2023, tags: ['SQL', 'Express', 'React', 'Node'] },
  { title: 'projectAppointmentsTitle', description: 'projectAppointmentsDescription', year: 2023, tags: ['Mongo DB', 'Express', 'React', 'Node'] },
  { title: 'projectTwitterTitle', description: 'projectTwitterDescription', year: 2022, tags: ['Mongo DB', 'Express', 'React', 'Node'] },
  { title: 'projectLetterSoupTitle', description: 'projectLetterSoupDescription', year: 2022, tags: ['Python'] }
]

export const Projects = () => {
  return (
    <div className="flex flex-col gap-8 animate-in">
      <h2 className="text-secondary font-light dark:text-secondaryDark">
        <Translate text="projectsTitle" />
      </h2>

      <ul className="animated-list flex flex-col gap-8">
        {PROJECTS.map((project, index) => (
          <li class="transition-opacity" key={index}>
            <figure className="flex gap-8">
              <div className="w-full h-full bg-secondary rounded-lg md:w-2/5 aspect-video border border-secondary overflow-clip select-none">
                <img className="w-full h-full object-cover" src="./src/assets/project.png" />
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-primary dark:text-primaryDark font-light"><Translate text={project.title} /> · <span className="text-secondary dark:text-secondary">{project.year}</span></h3>
                <p className="text-terciary dark:text-terciaryDark font-light line-clamp-3">
                  <Translate text={project.description} />
                </p>
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}