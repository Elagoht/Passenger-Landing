"use client"

import hamburgerStore from "@/lib/stores/hamburger"
import { IconDownload, IconFlag } from "@tabler/icons-react"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import { FC } from "react"
import NavBarLink from "./NavBarLink"

const menuItems = [
  { name: "Docs", href: "/docs", icon: IconFlag },
  { name: "Downloads", href: "/downloads", icon: IconDownload }
]

const NavBar: FC = () => {
  const pathname = usePathname()

  const { isOpen } = hamburgerStore()

  return <nav className={classNames({
    "flex max-md:flex-col md:items-center gap-4 max-md:p-4 max-md:z-20 max-md:border-r max-md:border-t max-md:border-tuatara-100 max-md:dark:border-tuatara-900 max-md:fixed max-md:top-16 max-md:bottom-0 max-md:bg-white dark:max-md:bg-tuatara-900 max-md:bg-opacity-80 max-md:dark:bg-opacity-80 max-md:backdrop-blur dark:backdrop-blur transition-[left] duration-300 ease-in-out max-md:h-[calc(100vh-4rem)] max-md:overflow-auto max-md:min-w-72 max-2xs:w-screen": true,
    "max-md:-left-full": !isOpen,
    "max-md:left-0": isOpen
  })}>
    {menuItems.map((item, index) =>
      <NavBarLink
        key={index}
        isActive={(`${pathname}/`).startsWith(`${item.href}/`)}
        {...item}
      />
    )}
  </nav>
}

export default NavBar
