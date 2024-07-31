import { FC, ReactNode } from "react"
import "@/design/article.css"
import "@/design/highlight.css"

interface IDocumentsLayoutProps {
  readonly children: ReactNode
}

const DocumentsLayout: FC<IDocumentsLayoutProps> = ({ children }) =>
  <main className="md:p-8 p-4 max-w-screen-lg mx-auto w-full bg-white dark:bg-tuatara-950">
    {children}
  </main>

export default DocumentsLayout
