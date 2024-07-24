import getArticles from "@/articles"
import DocsPageButtons from "@/components/docs/DocsPageButtons"
import "@/design/article.css"
import "@/design/highlight.css"
import convertMarkdownToHtml from "@/lib/markdown/converter"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { FC } from "react"

export const generateMetadata = async (): Promise<Metadata> => {
  const article = (await getArticles())[0]
  if (!article) notFound()

  return {
    title: article.metadata.title,
    description: article.metadata.description,
    keywords: article.metadata.keywords,
    authors: article.metadata.authors
      .split(",")
      .map((author) => ({ name: author })),
  }
}

const DocsMainPage: FC = async () => {
  const articles = await getArticles()
  const article = articles[0]
  if (!article) notFound()

  const next = articles.find((next) => next.slug === article.next)

  return <>
    <article dangerouslySetInnerHTML={{
      __html: convertMarkdownToHtml(article.content)
    }} />

    <DocsPageButtons next={next && {
      title: next.metadata.title,
      href: `/docs/${article.next}`
    }} />
  </>
}

export default DocsMainPage
