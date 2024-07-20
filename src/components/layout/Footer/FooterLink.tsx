import { IconExternalLink } from "@tabler/icons-react"
import Link from "next/link"
import { FC } from "react"

export interface IFooterLinkProps {
  readonly href: string
  readonly text: string
  readonly isExternal?: boolean
}

const FooterLink: FC<IFooterLinkProps> = ({ href, text, isExternal = false }) =>
  <Link
    href={href}
    className="underline text-tuatara-500 hover:text-tuatara-400 p-2 transition-all duration-300 ease-in-out hover:underline-offset-4 underline-offset-2 decoration-1 hover:decoration-2 decoration-tuatara-200 dark:decoration-tuatara-800"
    rel={isExternal
      ? "noopener noreferrer"
      : undefined
    }
    target={isExternal
      ? "_blank"
      : undefined
    }
  >
    {text} {isExternal && <IconExternalLink />}
  </Link>

export default FooterLink
