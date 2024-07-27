import DocsAside from "@/components/docs/DocsAside"
import { FC, ReactNode } from "react"

interface IDocsLayoutProps {
  readonly children: ReactNode
}

const DocsLayout: FC<IDocsLayoutProps> = ({ children }) =>
  <div className="max-w-screen-2xl flex max-md:flex-col-reverse flex-1 w-full self-center items-start">
    <DocsAside />

    <main className="md:p-8 p-4 bg-white min-w-0 dark:bg-tuatara-950 self-stretch">
      {children}
    </main>
  </div>

export default DocsLayout
