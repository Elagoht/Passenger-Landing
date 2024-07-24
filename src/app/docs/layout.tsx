import DocsAside from "@/components/docs/DocsAside"
import { FC, ReactNode } from "react"

interface IDocsLayoutProps {
  readonly children: ReactNode
}

const DocsLayout: FC<IDocsLayoutProps> = ({ children }) =>
  <div className="max-w-screen-2xl flex flex-1 w-full self-center items-start">
    <DocsAside />

    <main className="md:p-8 p-4 bg-tuatara-100 dark:bg-tuatara-950">
      {children}
    </main>
  </div>

export default DocsLayout
