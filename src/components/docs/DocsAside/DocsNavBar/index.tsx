import { FC, createElement } from "react"
import DocsNavBarItem, { IDocsNavBarItemProps } from "./DocsNavBarItem"

interface IDocsNavBarProps {
  title: string
  pathname: string
  links: Omit<IDocsNavBarItemProps, "active">[]
}

const DocsNavBar: FC<IDocsNavBarProps> = ({ title, pathname, links = [] }) =>


  <nav className="flex flex-col gap-2">
    <b className="text-lg font-bold">{title}</b>

    <ul className="-mx-4">
      {links.map((link, index) =>
        createElement(DocsNavBarItem, {
          key: index,
          title: link.title,
          href: link.href,
          active: pathname === link.href,
          isFirstChild: index === 0,
          isLastChild: index === links.length - 1
        })
      )}
    </ul>
  </nav>

export default DocsNavBar
