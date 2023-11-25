import { Experience, Me, Projects } from '../components/'
import { Education } from '../components/Education'

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Me />
      <Experience />
      <Education />
      <Projects />
    </div>
  )
}