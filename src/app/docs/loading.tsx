import { IconLoader } from "@tabler/icons-react"
import { FC } from "react"

const DocsLoadingPage: FC = () => {
  return <article className="h-full text-center flex items-center justify-center flex-col">
    <h1 className="mb-0">
      Checking the archives...
    </h1>

    <IconLoader
      size={128}
      className="animate-spin mt-8"
    />
  </article>
}

export default DocsLoadingPage
