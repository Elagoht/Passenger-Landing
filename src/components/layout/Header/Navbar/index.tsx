"use client"

import { IconBooks, IconDownload, IconFlag } from "@tabler/icons-react"
import { FC } from "react"
import NavBarLink from "./NavBarLink"
import { usePathname } from "next/navigation"

const menuItems = [
  { name: "Getting Started", href: "/getting-started", icon: IconFlag },
  { name: "Docs", href: "/docs", icon: IconBooks },
  { name: "Downloads", href: "/downloads", icon: IconDownload }
]

const NavBar: FC = () => {
  const pathname = usePathname()

  return <nav className="flex gap-4 items-center">
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
