"use client"

import hamburgerStore from "@/lib/stores/hamburger"
import classNames from "classnames"
import { FC, useEffect } from "react"

const hamburgerLines = (isOpen: boolean) => [{
  "origin-left -translate-y-1 transform rotate-45": isOpen
}, {
  "opacity-0": isOpen
}, {
  "origin-left translate-y-1 transform -rotate-45": isOpen
}]

const Hamburger: FC = () => {
  const { isOpen, toggle, close } = hamburgerStore()

  useEffect(() => {
    const handleWindowResize = () =>
      window.innerWidth >= 768
      && close()

    addEventListener("resize", handleWindowResize)
    return () => removeEventListener("resize", handleWindowResize)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <button
    className="p-3 md:hidden flex flex-col justify-center items-center gap-1 transition-transform ease-in-out"
    aria-label="Open Menu"
    onClick={toggle}
  >
    {hamburgerLines(isOpen).map((line, index) => (
      <div key={index} className={classNames({
        "w-7 h-0.5 bg-tuatara-500 rounded-full transition-all duration-300 ease-in-out": true,
        "translate-x-0.5": isOpen,
        ...line,
      })}></div>
    ))}
  </button>
}

export default Hamburger
