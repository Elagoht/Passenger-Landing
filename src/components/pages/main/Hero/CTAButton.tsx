import Link from "next/link"
import { FC } from "react"

export const CTAButton: FC = () => {
  return <Link
    href="/docs/getting-started"
    className="
    no-underline text-leaf-50 dark:text-leaf-200 text-center text-lg
    relative mt-6 p-3 rounded-md overflow-hidden
    bg-leaf-500 dark:bg-leaf-500 bg-opacity-70 dark:bg-opacity-20
    border-leaf-300 dark:border-leaf-600 border border-opacity-30 dark:border-opacity-50
    after:block after:absolute after:top-0 after:left-1/4 hover:after:left-1/3 after:right-1/4 hover:after:right-0 after:bg-gradient-to-r after:from-transparent after:via-leaf-50 dark:after:via-leaf-200 after:to-transparent after:h-px after:transition-all after:duration-300 after:ease-in-out
    before:block before:absolute before:w-24 before:h-24 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-leaf-50 before:bg-opacity-50 dark:before:bg-leaf-200 dark:before:bg-opacity-40 before:transition-all before:duration-300 before:ease-in-out hover:before:scale-150 hover:before:-skew-x-12 hover:before:translate-x-1/3 before:blur-2xl
    "
  >
    Create Your Vault Now
  </Link>
}
