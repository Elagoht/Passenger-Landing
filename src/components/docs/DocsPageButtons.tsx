import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"
import { FC } from "react"

interface IDocsPageButtonProps {
  title: string
  href: string
}

interface IDocsPageButtonsProps {
  prev?: IDocsPageButtonProps
  next?: IDocsPageButtonProps
}

const DocsPageButtons: FC<IDocsPageButtonsProps> = ({ next, prev }) =>
  <div className="flex gap-4 items-center justify-center max-sm:flex-col flex-wrap w-full">
    {prev &&
      <Link
        href={prev.href}
        className="no-underline w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-tuatara-500 flex-1 text-center relative overflow-hidden
        before:w-1/2 before:h-1/2 before:absolute before:top-1/2 before:-translate-y-1/2 before:right-0 before:bg-tuatara-500 before:blur-2xl before:rounded-full hover:before:right-1/2 before:transition-all before:duration-300
        after:block after:absolute after:top-0 after:right-0 hover:after:right-1/2 after:w-1/2 after:bg-gradient-to-r after:from-transparent after:via-tuatara-50 dark:after:via-tuatara-200 after:to-transparent after:h-px after:transition-all after:duration-300 after:ease-in-out"
      >
        <IconArrowLeft /> {prev.title}
      </Link>
    }

    {next &&
      <Link
        href={next.href}
        className="no-underline w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-tuatara-500 flex-1 text-center relative overflow-hidden
        before:w-1/2 before:h-1/2 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-tuatara-500 before:blur-2xl before:rounded-full hover:before:left-1/2 before:transition-all before:duration-300
        after:block after:absolute after:top-0 after:left-0 hover:after:left-1/2 after:w-1/2 after:bg-gradient-to-r after:from-transparent after:via-tuatara-50 dark:after:via-tuatara-200 after:to-transparent after:h-px after:transition-all after:duration-300 after:ease-in-out
        "
      >
        {next.title} <IconArrowRight />
      </Link>
    }
  </div>

export default DocsPageButtons
