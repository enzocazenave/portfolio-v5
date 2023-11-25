import { Stats } from "./Stats";
import { Translate } from "./";

export const Me = () => (
  <div>
    <h1 style={{ "--index": 1 }} className="text-primary font-semibold text-3xl tracking-tight animate-in dark:text-primaryDark">Enzo Cazenave</h1>
    <p style={{ "--index": 2 }} className="text-secondary font-light animate-in dark:text-secondaryDark">Full Stack Developer</p>

    <div style={{ "--index": 3 }} className="mt-6 flex gap-6 items-center mb-6 animate-in">
      <img src="./src/assets/enzo.png" className="w-24 h-24 rounded-full object-cover bg-primary" />
      <Stats />
    </div>

    <p style={{ "--index": 4 }} className="text-primary mt-4 max-w-lg font-light animate-in dark:text-primaryDark">
      <Translate text="mePresentation" />
    </p>
  </div>
)