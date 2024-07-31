import convertMarkdownToHtml from "@/lib/markdown/converter"
import { generateArticle } from "@/utilities/Article"
import { Metadata } from "next"
import { FC } from "react"

export const generateMetadata = async (): Promise<Metadata> => {
  const article = await generateArticle("documents/license.md")

  return {
    title: article.metadata.title,
    description: article.metadata.description,
    keywords: article.metadata.keywords,
    authors: article.metadata.authors.split(",").map((author) =>
      ({ name: author.trim() })
    )
  }
}

const CodeOfConductPage: FC = async () =>
  <article dangerouslySetInnerHTML={{
    __html: convertMarkdownToHtml((
      await generateArticle("documents/license.md")
    ).content)
  }} />

export default CodeOfConductPage
