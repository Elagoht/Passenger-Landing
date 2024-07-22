import DocsAside from "@/components/docs/DocsAside"
import { FC, ReactNode } from "react"

interface IDocsLayoutProps {
  readonly children: ReactNode
}

const DocsLayout: FC<IDocsLayoutProps> = ({ children }) =>
  <div className="max-w-screen-2xl flex flex-1 w-full self-center">
    <DocsAside />

    {children}
  </div>

export default DocsLayout
