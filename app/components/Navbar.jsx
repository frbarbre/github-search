"use client";

import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { motion as m } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useStore(
    (state) => [state.darkMode, state.setDarkMode],
    shallow
  );

  const setData = useStore((store) => store.setData);
  const setIsLoaded = useStore((store) => store.setIsLoaded)

  function handleClick() {
    setData({welcome: "welcome"})
    setIsLoaded(false)
  }

  return (
    <m.header initial={{opacity: 0, y: "-100%"}} animate={{opacity: 1, y: 0}} className="flex items-center justify-between pb-10">
      <h2
        onClick={handleClick}
        className="font-bold text-[26px] cursor-pointer"
      >
        devfinder
      </h2>
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer flex gap-6 items-center"
      >
        <h2 className={`${darkMode ? "" : "text-gray-blue"} font-bold`}>
          {darkMode ? "LIGHT" : "DARK"}
        </h2>
        <img
          className="h-[20px] object-contain"
          src={darkMode ? "/sun.svg" : "/moon.svg"}
          alt="dark mode toggle"
        />
      </div>
    </m.header>
  );
}
