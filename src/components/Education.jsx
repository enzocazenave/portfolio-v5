import { PiCertificate } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { Translate } from "./Translate";

const EDUCATION = [
  { place: 'UADE', title: 'educationUade', description: 'educationUadeDescription', finished: false },
  { place: 'Brighton English Insitute', title: 'educationBrighton', description: '', finished: true },
  { place: 'Udemy', title: 'educationUdemy1', description: '', finished: true },
  { place: 'Udemy', title: 'educationUdemy2', description: '', finished: true },
  { place: 'Udemy', title: 'educationUdemy3', description: '', finished: true },
  { place: 'Udemy', title: 'educationUdemy4', description: '', finished: true },
  { place: 'Udemy', title: 'educationUdemy5', description: '', finished: true },
  { place: 'Udemy', title: 'educationUdemy6', description: '', finished: true }
]

export const Education = () => {
  return (
    <div style={{ "--index": 7 }} className="flex flex-col gap-8 animate-in">
      <h2 className="text-secondary font-light dark:text-secondaryDark">
        <Translate text="educationTitle" />
      </h2>

      <ul className="animated-list grid grid-cols-2 gap-4 md:gap-8">
        {EDUCATION.map((education, index) => (
          <li key={index} className="flex gap-4 transition-opacity">
            { education.finished 
              ? <PiCertificate className="text-secondary dark:text-secondaryDark" size={34} /> 
              : <IoBookOutline className="mt-[2px] text-secondary dark:text-secondaryDark" size={30} />
            }

            <div className="flex-1 flex justify-between">
              <div className="flex flex-col gap-px">
                <p className="text-primary font-light dark:text-primaryDark">
                  <Translate text={ education.title } />
                </p>
                <p className="text-secondary font-light dark:text-terciary">{education.place}</p>
                <p className="text-secondary font-light text-sm dark:text-terciaryDark">
                  <Translate text={ education.description } />
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}