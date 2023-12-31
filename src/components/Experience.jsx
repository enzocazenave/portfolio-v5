import { GoArrowUpRight } from "react-icons/go"
import { useNavigate } from "react-router-dom"
import { Translate } from "./Translate"

const EXPERIENCE = [
  { place: 'UFO Development', position: 'Owner', time: 'Jul 2023 -', src: './src/assets/ufo.png', route: '/experiences/ufo' },
  { place: 'Upbrands Agency', position: 'Frontend Engineer', time: 'Abr 2023 -', src: './src/assets/upbrands.jpeg', route: '/experiences/uprands'  },
  { place: 'Freelance', position: 'Freelance Developer', time: 'Ene 2022 - Dic 2022', src: './src/assets/freelancer.jpeg', route: '/experiences/freelance' },
  { place: 'Inmunes Roleplay', position: 'Owner', time: 'Ene 2020 - Dic 2021', src: './src/assets/inmunes.jpg', route: '/experiences/inmunesrp' }
]

export const Experience = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-8">
      <div style={{ "--index": 5 }} className="flex flex-col gap-4 animate-in">
        <h2 className="text-secondary font-light dark:text-secondaryDark">
          <Translate text="experienceTitle" />
        </h2>
        <p className="font-light text-primary dark:text-primaryDark">
          <Translate text="experienceDescription" />
        </p>
      </div>

      <ul style={{ "--index": 6 }} className="animated-list flex flex-col gap-8 animate-in">
        {EXPERIENCE.map((experience, index) => (
          <li 
            key={index} 
            className="flex gap-4 transition-opacity items-center cursor-pointer max-xs:items-start"
            onClick={ () => { navigate(experience.route) } } 
          >
            <img alt="Imagen de la experiencia" src={experience.src} className="w-10 rounded-md object-cover" />

            <div className="flex-1 flex justify-between max-xs:flex-col max-xs:justify-normal">
              <div className="flex flex-col gap-px">
                <p className="text-primary font-light dark:text-primaryDark">{experience.position}</p>
                <p className="text-secondary font-light dark:text-secondaryDark">{experience.place} </p>
              </div>

              <div className="flex items-end flex-col gap-px max-xs:items-start max-xs:justify-between max-xs:flex-row-reverse">
                <GoArrowUpRight className="opacity-0 transition-transform delay-50 text-primary dark:text-primaryDark svg-animation max-xs:opacity-100" />
                <time className='text-terciary font-light dark:text-terciaryDark'>{experience.time}</time>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}