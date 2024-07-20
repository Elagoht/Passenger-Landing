import { Icon, IconProps } from "@tabler/icons-react"
import classNames from "classnames"
import Link from "next/link"
import { FC, ForwardRefExoticComponent, RefAttributes, createElement } from "react"

interface INavBarLinkProps {
  name: string
  href: string
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
  isActive?: boolean
  isExternal?: boolean
}

const NavBarLink: FC<INavBarLinkProps> = ({ href, name, icon, isActive, isExternal }) =>
  <Link
    href={href}
    rel={isExternal
      ? "noopener noreferrer"
      : undefined
    }
    target={isExternal
      ? "_blank"
      : undefined
    }
    className={classNames({
      "px-3 py-2 font-semibold rounded-md hover:bg-tuatara-100 dark:hover:bg-tuatara-950 transition-all duration-300 ease-in-out flex items-center gap-3": true,
      "bg-leaf-200 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-50": isActive,
    })}
  >
    {icon && createElement(icon, { size: 20 })}

    {name}
  </Link>

export default NavBarLink