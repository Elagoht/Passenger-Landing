import { FC } from "react"
import "@/design/article.css"

const DocsNotFoundPage: FC = () => <article className="h-full text-center flex items-center justify-center flex-col">
  <h1 className="mb-0">
    404: Not Found
  </h1>

  <hr />

  <p>
    The page you are looking for does not exist. Please check the URL or go back to the
    <a href="/docs">Docs</a>.
  </p>
</article>

export default DocsNotFoundPage
