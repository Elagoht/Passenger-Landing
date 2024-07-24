import classNames from "classnames"
import Link from "next/link"
import { FC } from "react"

export interface IDocsNavBarItemProps {
  readonly title: string
  readonly href: string
  readonly active: boolean
  readonly isFirstChild?: boolean
  readonly isLastChild?: boolean
}

const DocsNavBarItem: FC<IDocsNavBarItemProps> = ({
  href, title, active,
  isFirstChild, isLastChild
}) =>
  <Link href={href} >
    <li className={classNames({
      "hover:bg-tuatara-200 dark:hover:bg-tuatara-900 transition-all duration-100 relative pl-10 pr-2 py-1": true,
      "before:block before:h-full before:w-px before:bg-tuatara-700 dark:before:bg-tuatara-500 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-5 before:-translate-x-1/2": true,
      "before:!h-1/2 before:!translate-y-0 before:!top-1/2": isFirstChild,
      "before:!h-1/2 before:!translate-y-0 before:!top-0": isLastChild,
      "after:block after:h-2 after:w-2 after:bg-current after:absolute after:top-1/2 after:-translate-y-1/2 after:left-4 after:rounded-full after:ring-4 after:ring-tuatara-100 dark:after:ring-tuatara-950": true,
      "text-creamcan-500": active,
      "text-tuatara-700 dark:text-tuatara-500": !active
    })}>
      {title}
    </li>
  </Link>

export default DocsNavBarItem
