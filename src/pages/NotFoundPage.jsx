import { Link } from "react-router-dom"
import { Translate } from "../components"

export const NotFoundPage = () => {
  return (
    <div>
      <header className="mb-6">
        <h1 className="font-semibold text-2xl mb-2 text-primary dark:text-primaryDark">
          <Translate text="notFoundPageTitle" />
        </h1>
        <p className="font-light text-secondary dark:text-secondaryDark">
          <Translate text="notFoundPageDescription" />
        </p>
      </header>

      <Link to="/" className="underline underline-offset-4 text-primary dark:text-primaryDark">
        <Translate text="notFoundPageButton" />
      </Link>
    </div>
  )
}