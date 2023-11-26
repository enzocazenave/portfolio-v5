import { useState } from "react"
import { useEffect } from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { IoMailOutline } from "react-icons/io5";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Translate } from "./Translate";

export const Stats = () => {

  const [ghRepos, setGhRepos] = useState('00')

  useEffect(() => {
    const getGhUser = async () => {
      const res = await fetch('https://api.github.com/users/enzocazenave', { cache: 'no-cache' })
      const resJson = await res.json()
      return resJson.public_repos
    }

    setTimeout(() => {
      getGhUser().then(setGhRepos)
    }, 1000)
  }, [])

  return (
    <ul className="flex flex-col gap-2 animated-list">
      <li className="transition-opacity">
        <a className="text-secondary font-light flex gap-2 items-center dark:text-secondaryDark max-sm:text-sm" href="https://github.com/enzocazenave">
          <FaGithub className="text-secondary dark:text-secondaryDark" />

          <SwitchTransition>
            <CSSTransition
              key={ ghRepos }
              addEndListener={ (node, done) => node.addEventListener('transitionend', done, false) }
              classNames="fade"
            >
              <p>
                {ghRepos}
              </p>
            </CSSTransition>
          </SwitchTransition>

          <Translate text="statsPublicRepositories" />
        </a>
      </li>

      <li className="transition-opacity">
        <a className="text-secondary font-light flex gap-2 items-center dark:text-secondaryDark max-sm:text-sm" href="https://www.linkedin.com/in/enzo-cazenave/">
          <FaLinkedinIn className="text-secondary dark:text-secondaryDark" />
          +600 <Translate text="statsContacts" />
        </a>
      </li>

      <li className="transition-opacity">
        <a className="text-secondary font-light flex gap-2 items-center dark:text-secondaryDark max-sm:text-sm" href="mailto:enzocazenavedev@hotmail.com">
          <IoMailOutline className="text-secondary dark:text-secondaryDark" />
          enzocazenavedev@hotmail.com
        </a>
      </li>
    </ul>
  )
}